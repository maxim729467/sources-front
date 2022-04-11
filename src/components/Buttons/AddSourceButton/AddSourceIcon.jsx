import React from 'react';
import { modalContentTypes } from '../../../constants';
import { useDispatch } from 'react-redux';
import { openModal } from '../../../redux/modal/modalSlice';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import styles from '../styles.module.css';

const AddSourceButton = ({folder}) => {
    const dispatch = useDispatch();
    const onClick = () => dispatch(openModal({content: modalContentTypes.ADD_SOURCE, folder}))
    return <AddCircleIcon className={styles.addSourceIcon} onClick={onClick} />
}

export default AddSourceButton;