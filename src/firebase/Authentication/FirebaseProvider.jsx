import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase.config";

export const AuthContext = createContext();


const FirebaseProvider = ({children}) => {

    const [user ,  setUser] = useState(null);
    const [loading ,  setLoading] = useState(true);
    useEffect(() =>{
      const unsubscribe = onAuthStateChanged( auth , currentUser =>{
                setUser(currentUser);
                setLoading(false);
                console.log('current user' ,  currentUser);
      });
      return () => {
       return unsubscribe();
    };
    } ,[]);

    // create user
    const createUser = (email , password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth , email , password)
    };

    // Sing in 
    const singIn = (email , password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth , email , password)
    };

    // Google Sing In
    const googleProvider = new GoogleAuthProvider();

    const googleLogin = () =>{
        setLoading(true);
        return signInWithPopup(auth , googleProvider)
    }
    
    // Log-out
    const logOut = () =>{
        setLoading(true)
        return signOut(auth)
    }

    let authInfo = {
        user,
        loading,
        createUser,
        singIn,
        logOut,
        googleLogin,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default FirebaseProvider;