import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch } from 'react-redux';
import apiOperations from '../../../../redux/folders/folders-operations';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import styles from "../styles.module.css";

const useStyles = makeStyles((theme) => ({
  input: {
    width: "40vw",
    maxWidth: 500,
    marginBottom: 60,
  },
  backBtn: {
    width: "30vw",
    maxWidth: 300,
    marginTop: 20,
  },
  submitBtn: {
    width: "30vw",
    maxWidth: 300,
  },
}));

export default function AddFolderContent({ closeModal }) {
  const classes = useStyles();

  const dispatch = useDispatch();
  const onSubmit = (e) => {
    e.preventDefault();

    const dataToSend = {
      folder: e.target.folderField.value,
    };
    
    dispatch(apiOperations.addFolder(dataToSend));
    closeModal();
  };

  return (
    <div className={styles.block}>
      <form className={styles.form} autoComplete="off" onSubmit={onSubmit}>
        <TextField
          className={classes.input}
          id="folderField"
          label="Folder name"
          variant="outlined"
          name="folder"
          required
        />
        <Button className={classes.submitBtn} variant="contained" type="submit">
          Add
        </Button>
      </form>
      <Button
        className={classes.backBtn}
        variant="contained"
        color="primary"
        onClick={closeModal}
      >
        Back
      </Button>
    </div>
  );
}
