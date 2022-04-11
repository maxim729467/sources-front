import React, {useEffect} from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { useDispatch, useSelector } from 'react-redux';
import { getIsLoggedIn, getToken } from '../../redux/auth/auth-selectors';
import { openModal } from '../../redux/modal/modalSlice';
import { modalContentTypes } from '../../constants';
import LogoutButton from '../Buttons/LogoutButton';
import LoaderSpinner from '../LoaderSpinner';

import { getSourcesLoader } from '../../redux/sources/sources-selectors';
import { getFoldersLoader } from '../../redux/folders/folders-selectors';
import { isLoading } from '../../redux/auth/auth-selectors';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function NavBar() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const isAdminLoggedIn = useSelector(getIsLoggedIn);
  const token = useSelector(getToken);

  const isSourcesLoading = useSelector(getSourcesLoader);
  const isFoldersLoading = useSelector(getFoldersLoader)
  const isAuthLoading = useSelector(isLoading);

  const isDataLoading = isSourcesLoading || isFoldersLoading || isAuthLoading;

  useEffect(() => {
  if (token) axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  }, [token])

  const onClick = () => dispatch(openModal({ content: modalContentTypes.LOGIN }));

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Dev Notes
          </Typography>
          {
            isAdminLoggedIn ? <LogoutButton/> : <Button onClick={onClick} color="inherit">Admin login</Button>
          }
        </Toolbar>
      </AppBar>
      { isDataLoading && <LoaderSpinner/> }
    </div>
  );
}