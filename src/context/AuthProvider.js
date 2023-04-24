import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const logOut = () => {
    signOut(auth);
  };

  const upProfile = (userInfo) => {
    return updateProfile(user, userInfo);
  };
  const createSignInuser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const LoginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    const unsubsribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("user observing");
      setUser(currentUser);
    });
    return () => unsubsribe;
  }, []);
  const authInfo = {
    createSignInuser,
    LoginUser,
    user,
    logOut,
    upProfile,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
