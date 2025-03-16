
import React, { createContext, useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  User as FirebaseUser
} from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { auth, db, googleProvider } from '@/lib/firebase';

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (name: string, email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  loginWithGoogle: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Listen for authentication state changes
  useEffect(() => {
    console.log("Setting up auth state listener");
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      setLoading(true);
      if (firebaseUser) {
        console.log("User is authenticated:", firebaseUser.uid);
        // User is signed in, get additional user data from Firestore
        try {
          const userDoc = await getDoc(doc(db, 'users', firebaseUser.uid));
          
          if (userDoc.exists()) {
            // User exists in Firestore
            const userData = userDoc.data() as Omit<User, 'id'>;
            setUser({
              id: firebaseUser.uid,
              name: userData.name || firebaseUser.displayName || 'User',
              email: userData.email || firebaseUser.email || '',
              role: userData.role || 'user'
            });
            console.log("User data retrieved from Firestore");
          } else {
            // User doesn't exist in Firestore yet, just use Firebase auth data
            setUser({
              id: firebaseUser.uid,
              name: firebaseUser.displayName || 'User',
              email: firebaseUser.email || '',
              role: 'user'
            });
            console.log("User not found in Firestore, using auth data");
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
          // Still set basic user info even if Firestore fails
          setUser({
            id: firebaseUser.uid,
            name: firebaseUser.displayName || 'User',
            email: firebaseUser.email || '',
            role: 'user'
          });
        }
      } else {
        // User is signed out
        console.log("No authenticated user");
        setUser(null);
      }
      setLoading(false);
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  // Save user data to Firestore
  const saveUserToFirestore = async (firebaseUser: FirebaseUser, name: string = '') => {
    try {
      const userRef = doc(db, 'users', firebaseUser.uid);
      const userData = {
        name: name || firebaseUser.displayName || 'User',
        email: firebaseUser.email,
        role: 'user',
        createdAt: new Date().toISOString()
      };
      
      await setDoc(userRef, userData, { merge: true });
      console.log("User data saved to Firestore");
      return userData;
    } catch (error) {
      console.error("Error saving user to Firestore:", error);
      throw error;
    }
  };

  const login = async (email: string, password: string) => {
    try {
      setLoading(true);
      console.log("Attempting login with email:", email);
      const { user: firebaseUser } = await signInWithEmailAndPassword(auth, email, password);
      console.log("Login successful for user:", firebaseUser.uid);
      toast.success('Logged in successfully');
      navigate('/dashboard');
    } catch (error: any) {
      console.error('Login error:', error);
      const errorMessage = error.code === 'auth/invalid-credential' 
        ? 'Invalid email or password'
        : error.message || 'Login failed';
      toast.error(errorMessage);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const signup = async (name: string, email: string, password: string) => {
    try {
      setLoading(true);
      console.log("Attempting signup with email:", email);
      const { user: firebaseUser } = await createUserWithEmailAndPassword(auth, email, password);
      console.log("Signup successful for user:", firebaseUser.uid);
      
      // Save additional user info to Firestore
      await saveUserToFirestore(firebaseUser, name);
      
      toast.success('Account created successfully');
      navigate('/dashboard');
    } catch (error: any) {
      console.error('Signup error:', error);
      let errorMessage = error.message || 'Signup failed';
      
      // More user-friendly error messages
      if (error.code === 'auth/email-already-in-use') {
        errorMessage = 'This email is already in use';
      } else if (error.code === 'auth/weak-password') {
        errorMessage = 'Password should be at least 6 characters';
      } else if (error.code === 'auth/invalid-email') {
        errorMessage = 'Please enter a valid email address';
      } else if (error.code === 'auth/configuration-not-found') {
        errorMessage = 'Firebase authentication is not properly configured';
      }
      
      toast.error(errorMessage);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const loginWithGoogle = async () => {
    try {
      setLoading(true);
      console.log("Attempting Google login");
      const { user: firebaseUser } = await signInWithPopup(auth, googleProvider);
      console.log("Google login successful for user:", firebaseUser.uid);
      
      // Check if it's a new user and save to Firestore if needed
      const userDoc = await getDoc(doc(db, 'users', firebaseUser.uid));
      if (!userDoc.exists()) {
        await saveUserToFirestore(firebaseUser);
      }
      
      toast.success('Logged in with Google');
      navigate('/dashboard');
    } catch (error: any) {
      console.error('Google login error:', error);
      let errorMessage = error.message || 'Google login failed';
      
      // Provide more specific error messages
      if (error.code === 'auth/popup-closed-by-user') {
        errorMessage = 'Login canceled. Please try again.';
      } else if (error.code === 'auth/configuration-not-found') {
        errorMessage = 'Firebase authentication is not properly configured';
      }
      
      toast.error(errorMessage);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    try {
      console.log("Attempting logout");
      await signOut(auth);
      console.log("Logout successful");
      toast.success('Logged out successfully');
      navigate('/');
    } catch (error: any) {
      console.error('Logout error:', error);
      toast.error(error.message || 'Logout failed');
      throw error;
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, signup, logout, loginWithGoogle }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
