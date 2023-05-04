import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../../firebaseConfig/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();
  const gitHubProvider = new GithubAuthProvider();
  const createUserHandler = (email, password) => {
    setIsLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }
  const googleUserHandler = () => {
    setIsLoading(true);
    return signInWithPopup(auth, googleProvider)
  }
  const GitHubUserHandler = () => {
    setIsLoading(true)
    return signInWithPopup(auth, gitHubProvider)
  }
  const loginHandler = (email, password) => {
    setIsLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
  }
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setIsLoading(false)
      setUser(currentUser);
      return currentUser;
    })
    return unsubscribe;
  }, [])
  const logout = () => {
    return signOut(auth)
  }
  const userInfo = {
    user,
    createUserHandler,
    googleUserHandler,
    GitHubUserHandler,
    loginHandler,
    logout,
    isLoading
  }
  return (
    <AuthContext.Provider value={userInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;