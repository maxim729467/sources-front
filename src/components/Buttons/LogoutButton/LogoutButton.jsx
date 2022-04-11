import React from 'react';
import { useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';
import authOperations from '../../../redux/auth/auth-operations';


const LogoutButton = () => {
    const dispatch = useDispatch();

    const onClick = (e) => {
        e.preventDefault();
        dispatch(authOperations.logOut());

    }

    return <Button onClick={onClick} type='button' color="inherit">Logout</Button>
}

export default LogoutButton;