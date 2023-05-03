import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithPopup, signOut } from "firebase/auth";
import { createContext } from "react";
import app from "../../firebaseConfig/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const googleProvider = new GoogleAuthProvider();
  const gitHubProvider = new GithubAuthProvider();
  const createUserHandler = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }
  const googleUserHandler=()=>{
    return signInWithPopup(auth,googleProvider)
  }
  const GitHubUserHandler=()=>{
    return signInWithPopup(auth,gitHubProvider)
  }
  const logoutHandler = ()=>{
    return signOut(auth)
  }
  const userInfo = {
    createUserHandler,
    googleUserHandler,
    GitHubUserHandler,
    logoutHandler
  }
  return (
    <AuthContext.Provider value={userInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;