import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch } from "react-redux";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import styles from "../styles.module.css";
import sourcesOperations from "../../../../redux/sources/sources-operations";

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

export default function DeleteSourceContent({ closeModal, id }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const onConfirm = () => {
    dispatch(sourcesOperations.deleteSource(id));
    closeModal();
  };

  return (
    <div className={styles.block}>
      <Typography paragraph={true}>
        Are you sure you want to remove this source?
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
