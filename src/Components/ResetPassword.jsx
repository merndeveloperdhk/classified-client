import  { useContext } from 'react';
import { AuthContext } from './Provider/AuthProvider';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';

const ResetPassword = () => {
    const{resetPassword, setLoading} = useContext(AuthContext);
    const handleReset = (event) =>{
        event.preventDefault();
        const email = event.target.email.value;
        resetPassword(email)
        .then(()=>{
            // alert('password sent successfully')
            toast.success('password sent successfully');
            setLoading(false)
        })
        .catch(error =>{
            // alert(error.message)
            toast.error(error.message)
        })
    }

    return (
        <div className=' w-full text-center'>
            <h1 className='text-2xl font-semibold mb-8'>For Reset Your password </h1>
            <form onSubmit={handleReset}>
                <input type="email" name='email' placeholder='enter email' className='p-3 w-1/4 border'/>
                <input className="ml-4 p-3 text-center rounded bg-sky-400 text-white font-bold cursor-pointer" type="submit" value="Submit" />
            </form>
            <Link to='/login' className="block mx-auto mt-8 w-44 p-3 text-center rounded bg-sky-400 text-white font-bold">Go To Log In page</Link>
        </div>
    );
};

export default ResetPassword;