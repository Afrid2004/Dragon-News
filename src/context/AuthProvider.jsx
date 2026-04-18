import React, { createContext, useEffect, useState } from "react";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
  sendPasswordResetEmail,
} from "firebase/auth";
import { auth } from "../Firebase/firebase.init";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  //create user using email and password
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // login user using email and password
  const logInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  //logout user
  const logOutUser = () => {
    return signOut(auth);
  };

  //Observe user
  useEffect(() => {
    const unsbscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsbscribe();
    };
  }, []);

  //update user
  const updateUser = (updatedData) => {
    return updateProfile(auth.currentUser, updatedData);
  };

  //reset password
  const resetPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  const userInfo = {
    user,
    setUser,
    createUser,
    logInUser,
    logOutUser,
    loading,
    updateUser,
    resetPassword,
  };
  return <AuthContext value={userInfo}>{children}</AuthContext>;
};

export default AuthProvider;
