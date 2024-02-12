import { useContext } from "react";
import Container from "./Container";
import Logo from "./Logo";
import MenuDropdown from "./Menudropdown";
import Search from "./Search";
import { AuthContext } from "../Provider/AuthProvider";


const Navbar = () => {
    const {user} = useContext(AuthContext)
    return (
        <div className="fixed w-full bg-white z-10 shadow-sm ">
                <Container>
                        <h1>Welcome <span className="font-bold">{user? <span>{user.email} : {user.displayName}</span>: 'Guest'}</span></h1>
            <div className="py-3 border-b-[1px]">
                    <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
                        <div><Logo></Logo></div>
                        <div><Search></Search></div>
                        <div><MenuDropdown></MenuDropdown></div>
                    </div>
            </div>
                </Container>
        </div>
    );
};

export default Navbar;