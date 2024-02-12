import  { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { TbFidgetSpinner } from "react-icons/tb";
import { AuthContext } from './Provider/AuthProvider';
import Swal from 'sweetalert2';
import SocialLogin from './Shared/SocialLogin';
import toast from 'react-hot-toast';
import { saveUser } from '../api/auth';

const Login = () => {
    const[showPassword, setShowPassword] = useState(false);
    const[error, setError] = useState('');
    const[success, setSuccess] = useState(' ');
    const{loading, setLoading, logIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/' ;
    console.log(loading);
   
    //handle Submit
    const handleSubmit = event =>{
      event.preventDefault();
      const email = event.target.email.value;
      const password = event.target.password.value;
      const loggedEmailPassword = {email, password};
      console.log(loggedEmailPassword);
      setError(' ');
      setSuccess(' ');
      // user login
      logIn(email, password)
      .then(result =>{
        toast.success('Log in Successfully');
        // from auth js file
        saveUser(result.user)
       /*  Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Log in Successfully',
          showConfirmButton: false,
          timer:500
        })  */
        
        console.log(result.user);
        setSuccess(result.user)
        navigate(from, {replace: true});
        
      })
      .catch(error => {
        console.log(error.message);
        setError(error.message)
        setLoading(false)
      })
    };
    return (
        <div className=" ">
      <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-sky-100  mx-auto my-8 ">
        <p className='text-red-600 text-center'>
          {
            error? error: ''
          }
        </p>
        <p className='text-green-600 text-center'>
          {
            success? success: ''
          }
        </p>
        <h1 className="text-2xl font-bold text-center">Login</h1>
        <form onSubmit={handleSubmit}  className="space-y-6">
          <div className="space-y-1 text-sm">
            <label name="username" className="block text-gray-800">
              User Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your Email"
              required
              className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
            />
          </div>
          <div className="space-y-1 text-sm relative">
            <label name="password" className="block text-gray-800">
              Password
            </label>
            <input
              type={showPassword? 'text': 'password'}
              name="password"
              id="password"
              placeholder="Password"
              required
              className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
            />
            <span onClick={()=>setShowPassword(!showPassword)} className="absolute bottom-[35px] right-4">
                  {
                    showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                  }
                 </span>
            <div className="flex justify-between text-xs dark:text-gray-400">
              <div className="flex gap-1 items-center">
                <input type="checkbox" name="" id="" />
              <a rel="noopener noreferrer" href="#">
               Remember Password
              </a>
              </div>
              <Link rel="noopener noreferrer" to='/resetPassword'>
                Forgot Password?
              </Link>
            </div>
          </div>
        
          <button type='submit' className="block w-full p-3 text-center rounded-sm bg-sky-500 text-white font-bold">
            {
              loading? <span className='flex justify-center gap-2  mx-auto'>Continue <TbFidgetSpinner className=' animate-spin' size={24} /></span> :"continue"
            }
            </button>
        </form>
        <div className="divider pt-2">OR</div>
        {/* social login */}
        <SocialLogin></SocialLogin>
        
        <p className="text-xs text-center sm:px-6 dark:text-gray-400">
          Do not have an account?
          <Link
            to='/register'
            className="underline dark:text-gray-100"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
    );
};

export default Login;