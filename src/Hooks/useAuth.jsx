import { useContext } from "react";
import { AuthContext } from "../firebase/Authentication/FirebaseProvider";


export const useAuth = () => {
    const all = useContext(AuthContext);
    return all;
};

