import { useContext } from "react";
import { AuthContext } from "../Components/Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Loader from "../Components/Shared/Loader";
import PropTypes from 'prop-types'


const PrivateRoute = ({Children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    if(loading){
        return <Loader></Loader>
    }
    if(user){
        return Children
    }
    return <Navigate to='/login' state={{from: location}} replace></Navigate>
};

export default PrivateRoute;
PrivateRoute.propTypes={
    Children: PropTypes.object
}