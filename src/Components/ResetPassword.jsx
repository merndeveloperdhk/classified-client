import  { useContext } from 'react';
import { AuthContext } from './Provider/AuthProvider';
import { Link } from 'react-router-dom';

const ResetPassword = () => {
    const{resetPassword} = useContext(AuthContext);
    const handleReset = (event) =>{
        event.preventDefault();
        const email = event.target.email.value;
        resetPassword(email)
        .then(()=>{
            alert('password sent successfully')
        })
        .catch(error =>{
            alert(error.message)
        })
    }

    return (
        <div className=' w-full text-center'>
            <h1 className='text-2xl font-semibold mb-8'>For Reset Your password </h1>
            <form onSubmit={handleReset}>
                <input type="email" name='email' placeholder='enter email'/>
                <input className="ml-4 p-3 text-center rounded-sm bg-sky-500 text-white font-bold" type="submit" value="Submit" />
            </form>
            <Link to='/login' className="block mx-auto mt-8 w-44 p-3 text-center rounded-sm bg-sky-500 text-white font-bold">Go To Log In page</Link>
        </div>
    );
};

export default ResetPassword;