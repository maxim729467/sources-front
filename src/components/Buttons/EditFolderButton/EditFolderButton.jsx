import React from 'react';
import { modalContentTypes } from '../../../constants';
import { useDispatch } from 'react-redux';
import { openModal } from '../../../redux/modal/modalSlice';
import EditIcon from '@material-ui/icons/Edit';
import styles from '../styles.module.css';

const EditFolderButton = ({ id }) => {
    const dispatch = useDispatch();
    const onClick = () => dispatch(openModal({content: modalContentTypes.EDIT_FOLDER, targetId: id}))
    return <EditIcon className={styles.editFolderIcon} onClick={onClick} />
}

export default EditFolderButton;