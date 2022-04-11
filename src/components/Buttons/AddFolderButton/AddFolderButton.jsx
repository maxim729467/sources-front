import React from 'react';
import { modalContentTypes } from '../../../constants';
import { useDispatch } from 'react-redux';
import { openModal } from '../../../redux/modal/modalSlice';
import LibraryAddIcon from '@material-ui/icons/LibraryAdd';
import styles from '../styles.module.css';

const AddFolderButton = () => {
    const dispatch = useDispatch();
    const onClick = () => dispatch(openModal({content: modalContentTypes.ADD_FOLDER}))
    return <LibraryAddIcon className={styles.addFolderIcon} onClick={onClick} />
}

export default AddFolderButton;