import { info } from 'autoprefixer';
import React, { useContext } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import Loading from '../components/Loading';
import { AuthContext } from '../UserContext/UserContext';

const PriveteRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext)

    if(loading){
        return <Loading/>
    }
    if(user && user.uid){
        return children
    }
        return <Navigate to='/login'></Navigate>
    
    
};

export default PriveteRoute;