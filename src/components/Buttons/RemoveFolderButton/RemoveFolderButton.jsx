import React from 'react';
import { modalContentTypes } from '../../../constants';
import { useDispatch } from 'react-redux';
import { openModal } from '../../../redux/modal/modalSlice';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import styles from '../styles.module.css';

const RemoveFolderButton = ({ id }) => {
    const dispatch = useDispatch();
    const onClick = () => dispatch(openModal({content: modalContentTypes.REMOVE_FOLDER, targetId: id}))
    return <DeleteForeverIcon className={styles.removeFolderIcon} onClick={onClick} />
}

export default RemoveFolderButton;