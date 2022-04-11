import React from 'react';
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import styles from './styles.module.css';

const useStyles = makeStyles((theme) => ({
  reloadBtn: {
    width: 150,
    height: 40,
  },
}));

export default function ErrorComponent() {
    const classes = useStyles();
    const onReload = () => {
        window.location.reload();
    };

    return (
        <div className={styles.section}>
        <Typography paragraph={true}>
        Something went wrong. You might want to reload the page.
      </Typography>
         <Button
        className={classes.reloadBtn}
        variant="contained"
        color="primary"
        onClick={onReload}
      >
        Reload
      </Button>
        </div>
    )
}