import { useContext } from "react";
import { RxAvatar } from "react-icons/rx";
import { AuthContext } from "../Provider/AuthProvider";

const Avatar = () => {
    const{user}= useContext(AuthContext);
    return (
        <div>
            {
                user && user.photoURL? user.photoURL:
                <RxAvatar className="text-xl"></RxAvatar>
            }
            
        </div>
            
       
    );
};

export default Avatar;