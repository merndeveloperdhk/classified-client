import { AiOutlineMenu } from 'react-icons/ai'
import { BsFillChatQuoteFill } from "react-icons/bs";
// import Avatar from './Avatar'
import { useCallback,  useContext,  useState } from 'react'
// import { AuthContext } from '../../../providers/AuthProvider'
import { Link } from 'react-router-dom'
import { AuthContext } from '../Provider/AuthProvider'


const MenuDropdown = () => {
  const { user, logOut } = useContext(AuthContext)
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = useCallback(() => {
    setIsOpen(value => !value)
  }, []);

const handleLogOut = () =>{
  logOut()
  .then(() => {
    alert('logout successfull')
  })
  .catch(error =>{
    console.log(error.message);
  })
}
  return (
    <div className='relative'>
        {/* menu button for add */}
      <div className='flex flex-row items-center gap-2'>
        <div className='hidden md:block text-sm font-semibold py-3 px-2 rounded-2xl hover:bg-[#2caacc]  hover:text-white transition duration-500 cursor-pointer'>
         <Link to='/liveChat' className='flex items-center gap-2 text-md'>
         <BsFillChatQuoteFill></BsFillChatQuoteFill> <span>Live Chat</span>
         </Link>
        </div>
        <div className='hidden md:block text-sm font-semibold py-3 px-2 rounded-2xl hover:bg-green-500  hover:text-white transition duration-500 cursor-pointer'>
         <Link to='/' >
          <span>Host HOme</span>
         </Link>
        </div>
        <div
          onClick={toggleOpen}
          className='p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition'
        >
          <AiOutlineMenu />
          <div className='hidden md:block'>
          <div className="avatar">
  <div className="w-8 rounded-full">
    <img src={user? user.photoURL: "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"} />
  </div>
</div>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className='absolute rounded-xl shadow-md w-[30vw] md:w-3/4  bg-white overflow-hidden right-0 top-12 text-sm'>
          <div className='flex flex-col cursor-pointer'>
            <Link
              to='/'
              className='block md:hidden px-4 py-3 hover:bg-neutral-100 transition font-semibold'
            >
              Home
            </Link>
            {user ? 
            <>
            <div className='px-4 py-3 hover:bg-neutral-100 transition font-semibold cursor-pointer'>
              <Link>Dashboard</Link>
              </div>
              <div
                onClick={handleLogOut}
                className='px-4 py-3 hover:bg-neutral-100 transition font-semibold cursor-pointer'
              >
                Logout
              </div>
              
              </>
             : 
              <>
                <Link
                  to='/login'
                  className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'
                >
                  Login
                </Link>
                <Link
                  to='/register'
                  className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'
                >
                  Sign Up
                </Link>
              </>
            }
          </div>
        </div>
      )}
    </div>
  )
}

export default MenuDropdown