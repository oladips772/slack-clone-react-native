/** @format */
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useMemo,
} from "react";
import * as Google from "expo-google-app-auth";
import { provider, auth } from "../firebase";
import {
  signInWithCredential,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
} from "firebase/auth";

const AuthContext = createContext({});
const config = {
  iosClientId:
    "646544315393-kl7mt0tdhbfthm1lh9g61eherqioi0hq.apps.googleusercontent.com",
  androidClientId:
    "646544315393-2tut8duu2bj60rakvson61o1i3rhhjqq.apps.googleusercontent.com",
  scopes: ["profile", "email"],
  permissions: ["public_profile", "email", "gender", "location"],
};

export const AuthProvider = ({ children }) => {
  const [error, setError] = useState();
  const [user, setUser] = useState(null);
  const [loadingInitial, setLoadingInitial] = useState(true);
  const [loading, setLoading] = useState(false);

  const signInWithGoogle = async () => {
    setLoading(true);
    await Google.logInAsync(config)
      .then(async (loginResult) => {
        if (loginResult.type === "success") {
          const { idToken, accessToken } = loginResult;
          const credential = GoogleAuthProvider.credential(
            idToken,
            accessToken
          );
          await signInWithCredential(auth, credential);
        }
        return Promise.reject();
      })
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  };

  const logoutGoogle = () => {
    setLoading(true);
    signOut(auth);
    setLoading(false);
  };

  useEffect(
    () =>
      onAuthStateChanged(auth, (user) => {
        setUser(user);
        setLoadingInitial(false);
      }),
    []
  );

  const memoedValue = useMemo(
    () => ({
      loading,
      user,
      error,
      signInWithGoogle,
      logoutGoogle,
    }),
    [loading, user, error, signInWithGoogle, logoutGoogle]
  );

  return (
    <AuthContext.Provider value={memoedValue}>
      {!loadingInitial && children}
    </AuthContext.Provider>
  );
};

export default function useAuth() {
  return useContext(AuthContext);
}
