import React, {useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import { getAllSources } from "../../../../redux/sources/sources-selectors";
import { useDispatch, useSelector } from "react-redux";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import styles from "../styles.module.css";
import sourcesOperations from "../../../../redux/sources/sources-operations";

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

export default function EditSourceContent({ closeModal, id }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const sources = useSelector(getAllSources);
  const source = sources.find((folder) => folder.id === id);

  const [name, setName] = useState(source.name);
  const [description, setDescription] = useState(source.description);
  const [url, setUrl] = useState(source.url);

  const onSubmit = (e) => {
    e.preventDefault();

    const dataToSend = {
      name,
      url,
      description,
      id,
    };
    
    dispatch(sourcesOperations.editSource(dataToSend));
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
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <TextField
          className={classes.input}
          id="sourceLink"
          label="URL"
          variant="outlined"
          name="sourceLink"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
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
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <Button className={classes.submitBtn} variant="contained" type="submit">
          Edit
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
