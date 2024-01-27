import { Link } from "react-router-dom";


const Logo = () => {
    return (
        <div>
            <Link className="hidden md:block md:w-36" to='/'><img src="https://i.ibb.co/51f0xrZ/Logo-03.png" alt="logo" /></Link>
            <Link className="md:hidden block" to='/'><img src="https://i.ibb.co/2Y5Tv8R/Logo-05.png" alt="logo" /></Link>
        </div>
        
    );
};

export default Logo;