import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch } from "react-redux";
import apiOperations from "../../../../redux/folders/folders-operations";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import styles from "../styles.module.css";

const useStyles = makeStyles((theme) => ({
  backBtn: {
    width: "30vw",
    maxWidth: 300,
    marginTop: 20,
    display: "flex",
    flexDirection: "column",
  },
  confirmBtn: {
    width: "30vw",
    maxWidth: 300,
  },
}));

export default function DeleteFolderContent({ closeModal, id }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const onConfirm = () => {
    dispatch(apiOperations.deleteFolder(id));
    closeModal();
  };

  return (
    <div className={styles.block}>
      <Typography paragraph={true}>
        Are you sure you want to remove the folder? It will remove all
        associated resources.
      </Typography>
      <Button
        className={classes.confirmBtn}
        onClick={onConfirm}
        variant="contained"
        type="submit"
      >
        Confirm
      </Button>
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
