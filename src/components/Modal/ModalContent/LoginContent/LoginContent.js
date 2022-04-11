import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch } from "react-redux";
import authOperations from "../../../../redux/auth/auth-operations";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import styles from "../styles.module.css";

const useStyles = makeStyles((theme) => ({
  input: {
    width: "40vw",
    maxWidth: 500,
    marginBottom: 40,
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

export default function LoginContent({ closeModal }) {
  const classes = useStyles();
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();

    const dataToSend = {
      login: e.target.login.value,
      password: e.target.password.value,
    };
    dispatch(authOperations.logIn(dataToSend));
    closeModal();
  };

  return (
    <div className={styles.block}>
      <form className={styles.form} autoComplete="off" onSubmit={onSubmit}>
        <TextField
          className={classes.input}
          id="login"
          label="Login"
          variant="outlined"
          name="login"
          required
        />
        <TextField
          className={classes.input}
          id="password"
          label="Password"
          variant="outlined"
          name="password"
          required
        />
        <Button className={classes.submitBtn} variant="contained" type="submit">
          Login
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
