import { AiOutlineMail } from 'react-icons/ai';
import { SlEarphonesAlt } from 'react-icons/sl';
import { IoLocationOutline } from "react-icons/io5";
import { FaXRay } from "react-icons/fa";


const ContactIcons = () => {
    return (
        <div>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 mt-12'>
            <div className=' p-4 space-y-1 text-center'>
                <AiOutlineMail className=' mx-auto mb-4 text-4xl'></AiOutlineMail>
                <h1 className='text-xl font-bold text-[#49b2cc]'>E-mail address</h1>
                <p>mail@example.com</p>
            </div>
            <div className=' p-4 space-y-2 text-center'>
                <SlEarphonesAlt className='mx-auto mb-4 text-4xl'></SlEarphonesAlt>
                <h1 className='text-xl font-bold text-[#49b2cc]'>Phone Number</h1>
                <p>+88015555555</p>
            </div>
            <div className=' p-4 space-y-2 text-center'>
                <IoLocationOutline className='mx-auto mb-4 text-4xl'></IoLocationOutline>
                <h1 className='text-xl font-bold text-[#49b2cc]'>Address</h1>
                <p>newyork, usa</p>
            </div>
            <div className=' p-4 space-y-2 text-center'>
                <FaXRay className='mx-auto mb-4 text-4xl'></FaXRay>
                <h1 className='text-xl font-bold text-[#49b2cc]'>Fax</h1>
                <p>1-256-25488</p>
            </div>
               
            
        </div>
        <hr className=' border-1 border-grey-200 my-8' />
        </div>
    );
};

export default ContactIcons;