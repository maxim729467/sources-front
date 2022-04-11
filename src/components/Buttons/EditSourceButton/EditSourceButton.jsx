import React from 'react';
import { modalContentTypes } from '../../../constants';
import { useDispatch } from 'react-redux';
import { openModal } from '../../../redux/modal/modalSlice';
import EditIcon from '@material-ui/icons/Edit';
import styles from '../styles.module.css';

const EditSourceButton = ({ id }) => {
    const dispatch = useDispatch();
    const onClick = () => dispatch(openModal({content: modalContentTypes.EDIT_SOURCE, targetId: id}))
    return <EditIcon className={styles.editSourceIcon} onClick={onClick} />
}

export default EditSourceButton;