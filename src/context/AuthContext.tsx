
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
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      setLoading(true);
      if (firebaseUser) {
        // User is signed in, get additional user data from Firestore
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
        } else {
          // User doesn't exist in Firestore yet, just use Firebase auth data
          setUser({
            id: firebaseUser.uid,
            name: firebaseUser.displayName || 'User',
            email: firebaseUser.email || '',
            role: 'user'
          });
        }
      } else {
        // User is signed out
        setUser(null);
      }
      setLoading(false);
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  // Save user data to Firestore
  const saveUserToFirestore = async (firebaseUser: FirebaseUser, name: string = '') => {
    const userRef = doc(db, 'users', firebaseUser.uid);
    const userData = {
      name: name || firebaseUser.displayName || 'User',
      email: firebaseUser.email,
      role: 'user',
      createdAt: new Date().toISOString()
    };
    
    await setDoc(userRef, userData, { merge: true });
    return userData;
  };

  const login = async (email: string, password: string) => {
    try {
      setLoading(true);
      const { user: firebaseUser } = await signInWithEmailAndPassword(auth, email, password);
      toast.success('Logged in successfully');
      navigate('/dashboard');
    } catch (error: any) {
      console.error('Login error:', error);
      toast.error(error.message || 'Login failed');
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const signup = async (name: string, email: string, password: string) => {
    try {
      setLoading(true);
      const { user: firebaseUser } = await createUserWithEmailAndPassword(auth, email, password);
      
      // Save additional user info to Firestore
      await saveUserToFirestore(firebaseUser, name);
      
      toast.success('Account created successfully');
      navigate('/dashboard');
    } catch (error: any) {
      console.error('Signup error:', error);
      toast.error(error.message || 'Signup failed');
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const loginWithGoogle = async () => {
    try {
      setLoading(true);
      const { user: firebaseUser } = await signInWithPopup(auth, googleProvider);
      
      // Check if it's a new user and save to Firestore if needed
      const userDoc = await getDoc(doc(db, 'users', firebaseUser.uid));
      if (!userDoc.exists()) {
        await saveUserToFirestore(firebaseUser);
      }
      
      toast.success('Logged in with Google');
      navigate('/dashboard');
    } catch (error: any) {
      console.error('Google login error:', error);
      toast.error(error.message || 'Google login failed');
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
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
