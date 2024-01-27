import { createContext,useEffect,useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../../Firebase/firebase.config";
import PropTypes from 'prop-types';

export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const[user, setUser]= useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const sendVerificationEmail = () =>{
        setLoading(true);
        return sendEmailVerification(auth.currentUser )
    }

    const logIn = (email, password)=> {
        setLoading(true);
        return signInWithEmailAndPassword(auth,email, password);
    }

    const resetPassword = (email)=>{
        setLoading(true);
        return sendPasswordResetEmail(auth, email);
    }

    const googleSingIn = ()=>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const logOut = ()=> {
        setLoading(true);
        return signOut(auth);
    }
    useEffect(() => {
       const unSubscribe = onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser)
            setLoading(false)
        });
        return () => {
            return unSubscribe()
        }
    },[])
   

    const authInfo = {
        user,loading,createUser, googleSingIn,sendVerificationEmail, logIn,resetPassword, logOut
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider >
    );
};

export default AuthProvider;
AuthProvider.propTypes ={
    children: PropTypes.object
}