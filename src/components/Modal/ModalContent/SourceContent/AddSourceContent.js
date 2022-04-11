import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import styles from "../styles.module.css";
import sourcesOperations from "../../../../redux/sources/sources-operations";
import { getFolderName } from "../../../../redux/modal/modal-selectors";

const useStyles = makeStyles((theme) => ({
  input: {
    width: "40vw",
    maxWidth: 500,
    marginBottom: 30,
  },
  backBtn: {
    width: "30vw",
    maxWidth: 300,
    marginTop: 10,
  },
  submitBtn: {
    width: "30vw",
    maxWidth: 300,
  },
}));

export default function AddSourceContent({ closeModal }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const folder = useSelector(getFolderName);

  const onSubmit = (e) => {
    e.preventDefault();

    const dataToSend = {
      name: e.target.sourceName.value,
      url: e.target.sourceLink.value,
      description: e.target.description.value,
      folder,
    };
    dispatch(sourcesOperations.addSource(dataToSend));
    closeModal();
  };

  return (
    <div className={styles.block}>
      <form className={styles.form} autoComplete="off" onSubmit={onSubmit}>
        <TextField
          className={classes.input}
          id="sourceName"
          label="Name"
          variant="outlined"
          name="sourceName"
          required
        />
        <TextField
          className={classes.input}
          id="sourceLink"
          label="URL"
          variant="outlined"
          name="sourceLink"
          required
        />
        <TextField
          className={classes.input}
          id="description"
          label="Description"
          name="description"
          multiline
          rows={6}
          variant="outlined"
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
