import React, { createContext, useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
  sendEmailVerification,
  signInWithPopup,
  signOut,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";
import app from "../Firebase/Firebase.init";
import { GoogleAuthProvider } from "firebase/auth";

const auth = getAuth(app);

export const AuthContext = createContext();
const UserContext = ({ children }) => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();

  // create user with password
  const createUserWithPass = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // user name update
  const updateUserName = (name) => {
    setLoading(true)
    return updateProfile(auth.currentUser, {
      displayName: name,
    });
  };

  //user email varify
  const emailVerification = () => {
    setLoading(true)
    return sendEmailVerification(auth.currentUser);
  };

  const googleLogin = () => {
    setLoading(true)
    return signInWithPopup(auth, googleProvider);
  };

  const logOut = () => {
    setLoading(true)
    return signOut(auth);
  };

  const logInWithPassword = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
  };
  const forgetPassword=(email)=>{
    return sendPasswordResetEmail(auth, email)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (current) => {
      setUser(current);
      setLoading(false)
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const infoUser = {
    user,
    createUserWithPass,
    updateUserName,
    emailVerification,
    googleLogin,
    logOut,
    logInWithPassword,
    loading,
    forgetPassword
  };

  return (
    <AuthContext.Provider value={infoUser}>{children}</AuthContext.Provider>
  );
};

export default UserContext;
