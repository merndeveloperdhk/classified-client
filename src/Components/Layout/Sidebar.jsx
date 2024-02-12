import { useContext } from "react";
import { FaHome } from "react-icons/fa";
import { MdProductionQuantityLimits } from "react-icons/md";
import {  NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";


const Sidebar = () => {
    const {user} = useContext(AuthContext);
    return (
        <div>
            
            <div className="flex flex-col gap-2 bg-slate-100 min-h-screen p-2 ">
            <div className="text-center my-2">
                <img src={user?.photoURL} alt="" className="w-20 h-20 rounded-full mx-auto object-cover" />
                <h1 className="font-semibold">{user?.displayName}</h1>
                <h1 className="text-xs">{user?.email}</h1>
            </div>
            <div className=" flex flex-col  items-center ">
            <div className="">
            <NavLink to='/' className='flex gap-1 items-center mb-2'><FaHome></FaHome>Home</NavLink>
            <NavLink to='/dashboard' className="">Dashboard Home</NavLink>
            <NavLink to='/dashboard/addProducts' className='flex gap-1 items-center mt-2'><MdProductionQuantityLimits /> Add Products</NavLink>
            </div>
            </div>
            </div>
        </div>
    );
};

export default Sidebar;