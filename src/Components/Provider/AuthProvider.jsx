import { createContext,useEffect,useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../../Firebase/firebase.config";
import PropTypes from 'prop-types';
import { getRole } from "../../api/auth";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const[user, setUser]= useState(null);
    const[role, setRole] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        if(user){
         getRole(user?.email)
         .then(data => setRole(data))
        }
    },[user])

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
    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photo,
        })
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
        user,loading,role, setRole, setLoading,createUser, googleSingIn,sendVerificationEmail,updateUserProfile, logIn,resetPassword, logOut
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