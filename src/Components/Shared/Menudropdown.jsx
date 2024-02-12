import { AiOutlineMenu } from "react-icons/ai";
// import { BsFillChatQuoteFill } from "react-icons/bs";
// import Avatar from './Avatar'
import { useCallback, useContext, useState } from "react";
// import { AuthContext } from '../../../providers/AuthProvider'
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import toast from "react-hot-toast";
import HostModal from "../Modal/HostRequestModal";
import { becomeHost } from "../../api/auth";

const MenuDropdown = () => {
  const { user, logOut, role, setRole } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const[modal, setModal] = useState(false);
  console.log(role);
  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);
  // Modal handle
  const modalHandler = email => {
    becomeHost(email)
    .then(data => {
      console.log(data);
      toast.success('your are host now. Your can post');
      setRole('host')
      closeModal()
    })
  }
  const closeModal = () => {
    console.log("modal close");
    setModal(false)
  }

  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success("logout successfull");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  return (
    <div className="relative">
      {/* menu button for add */}
      <div className="flex flex-row items-center gap-2">
       {/*  <div className="hidden md:block text-sm font-semibold py-3 px-2 rounded-2xl hover:bg-[#2caacc]  hover:text-white transition duration-500 cursor-pointer">
          <Link to="/liveChat" className="flex items-center gap-2 text-md">
            <BsFillChatQuoteFill></BsFillChatQuoteFill> <span>Live Chat</span>
          </Link>
        </div> */}
        
        <div className="hidden md:block text-sm font-semibold py-2 px-2 rounded-lg bg-green-500 hover:bg-green-600 text-gray-100  hover:text-white transition duration-500 cursor-pointer">
          <Link to="/addProducts">
            <span>Post Your Add</span>
          </Link>
        </div>
        {user? role? "" : <div className="hidden md:block text-sm font-semibold py-2 px-2 rounded-lg bg-green-500 hover:bg-green-600 text-gray-100 hover:text-white transition duration-500 cursor-pointer">
          <button onClick={() => setModal(true)} >
            Become Host 
          </button>
        </div>:""}
        <div
          onClick={toggleOpen}
          className=" md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center  gap-2 rounded-xl cursor-pointer hover:shadow-md transition"
        >
          <AiOutlineMenu />
          <div className="hidden md:block">
            <div className="avatar">
              <div className="w-8 rounded-full">
                <img className="inline-block"
                  src={
                    user
                      ? user.photoURL
                      : "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="absolute rounded-b-xl shadow-md w-[40vw] md:w-[15vw]  bg-white overflow-hidden right-0 top-[57px] text-sm">
          <div className="flex flex-col cursor-pointer">
            <Link
              to="/"
              className="block md:hidden px-4 py-3 hover:bg-neutral-100 transition font-semibold"
            >
              Home
            </Link>
            {user ? (
              <>
                <div className="px-4 py-2  hover:bg-neutral-100 transition font-semibold cursor-pointer">
                  <h1>{user ? user.displayName : " "}</h1>
                </div>
                <div className="px-4 py-3 hover:bg-neutral-100 transition font-semibold cursor-pointer">
                  <Link to='dashboard'>Dashboard</Link>
                </div>

                <div
                  onClick={handleLogOut}
                  className="px-4 py-3 hover:bg-neutral-100 transition font-semibold cursor-pointer"
                >
                  Logout
                </div>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="px-4 py-3 hover:bg-neutral-100 transition font-semibold"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="px-4 py-3 hover:bg-neutral-100 transition font-semibold"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      )}
      <HostModal email={user?.email} modalHandler={modalHandler} isOpen={modal} closeModal={closeModal}></HostModal>
    </div>
  );
};

export default MenuDropdown;
