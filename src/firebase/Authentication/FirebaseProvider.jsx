import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
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
        logOut
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default FirebaseProvider;