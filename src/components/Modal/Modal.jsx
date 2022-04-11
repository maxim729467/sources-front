import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { modalContentTypes } from '../../constants';
import { useSelector, useDispatch } from 'react-redux';
import { getContentType, getIsModalOpen, getTargetId } from '../../redux/modal/modal-selectors';
import { closeModal } from '../../redux/modal/modalSlice';

import AddContentFolder from './ModalContent/FolderContent/AddFolderContent';
import EditContentFolder from './ModalContent/FolderContent/EditFolderContent';
import AddSourceFolder from './ModalContent/SourceContent/AddSourceContent';
import EditSourceFolder from './ModalContent/SourceContent/EditSourceContent';
import LoginContent from './ModalContent/LoginContent/LoginContent';
import DeleteFolderContent from './ModalContent/FolderContent/DeleteFolderContent';
import DeleteSourceContent from './ModalContent/SourceContent/DeleteSourceContent';

function getModalStyle() {
return {
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: '40vw',
    maxWidth: 550,
    minHeight: 150,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    height: '75vh',
    maxHeight: 450,
    overflow: 'auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

export default function CommonModal() {
  const dispatch = useDispatch();
  const open = useSelector(getIsModalOpen);
  const modalContentType = useSelector(getContentType);
  const targetId = useSelector(getTargetId);
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);

  const handleClose = () => dispatch(closeModal());

  const addFolder = () => (
    <div style={modalStyle} className={classes.paper}>
      <AddContentFolder closeModal={handleClose} />
    </div>
  );

    const editFolder = () => (
    <div style={modalStyle} className={classes.paper}>
      <EditContentFolder closeModal={handleClose} id={targetId} />
    </div>
  );

    const addSource = () => (
    <div style={modalStyle} className={classes.paper}>
      <AddSourceFolder closeModal={handleClose} />
    </div>
  );

    const editSource = () => (
    <div style={modalStyle} className={classes.paper}>
      <EditSourceFolder closeModal={handleClose} id={targetId} />
    </div>
  );

      const loginContent = () => (
    <div style={modalStyle} className={classes.paper}>
      <LoginContent closeModal={handleClose} />
    </div>
  );

        const deleteFolder = () => (
    <div style={modalStyle} className={classes.paper}>
      <DeleteFolderContent closeModal={handleClose} id={targetId} />
    </div>
  );

          const deleteSource = () => (
    <div style={modalStyle} className={classes.paper}>
      <DeleteSourceContent closeModal={handleClose} id={targetId} />
    </div>
  );

  const renderContent = () => {
    switch (modalContentType) {
      case modalContentTypes.ADD_FOLDER: return addFolder();
      case modalContentTypes.EDIT_FOLDER: return editFolder();
      case modalContentTypes.ADD_SOURCE: return addSource();
      case modalContentTypes.EDIT_SOURCE: return editSource();
      case modalContentTypes.LOGIN: return loginContent();
      case modalContentTypes.REMOVE_FOLDER: return deleteFolder();
      case modalContentTypes.REMOVE_SOURCE: return deleteSource();
      default: return null;
    }
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}>
        {renderContent()}
      </Modal>
    </div>
  );
}