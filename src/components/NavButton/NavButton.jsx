import React from 'react';
import styles from './styles.module.css';
import { useNavigate } from "react-router-dom";
import PermMediaIcon from '@material-ui/icons/PermMedia';
import { useDispatch } from 'react-redux';
import { clearSources } from '../../redux/sources/sources-slice';

const NavButton = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const onNavigate = () => {
        navigate(`/`, { replace: true });
        dispatch(clearSources());
    };      
return <PermMediaIcon className={styles.icon} onClick={onNavigate}/>
}

export default NavButton;