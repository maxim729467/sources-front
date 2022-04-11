import React, {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { getIsLoggedIn } from '../../redux/auth/auth-selectors'
import { getFoldersError, getFolders, getIsFoldersFetched } from "../../redux/folders/folders-selectors";
import apiOperations from '../../redux/folders/folders-operations';
import ErrorComponent from "../../components/ErrorComponent";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import RemoveFolderButton from '../Buttons/RemoveFolderButton';
import AddFolderButton from '../Buttons/AddFolderButton';
import EditFolderButton from '../Buttons/EditFolderButton';
import FoldersPlaceholder from '../Placeholders/FoldersPlaceholder';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: 20,
    position: 'relative',
    },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 100,
      cursor: 'pointer',
      color: 'grey',
      textTransform: 'uppercase',
    fontWeight: 700,
  },
      divider: {
        marginTop: 10,
        marginBottom: 20,
    },
}));

export default function SectionsGrid() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAdminLoggedIn = useSelector(getIsLoggedIn);
  const foldersError = useSelector(getFoldersError);
  const list = useSelector(getFolders);
  const isFetched = useSelector(getIsFoldersFetched);

  useEffect(() => {
    if (!list.length) {
      dispatch(apiOperations.getFolders())
    }
  }, [])

    const onNavigate = (name) => {
         navigate(`/${name}`, { replace: true });
    };
        
  return (
    <div className={classes.root}>
      {isAdminLoggedIn && (
      <>
      <AddFolderButton />
      <Divider className={classes.divider} variant="fullWidth" />
      </>
      )}

      <Grid container spacing={4}>
    {
        list && list.map(({ name, id }) => (
          <Grid item xs={6} sm={3} key={id} >
            {isAdminLoggedIn && (
            <>
            <RemoveFolderButton id={id}/>
            <EditFolderButton id={id}/>
            </>
            )}

            <Paper onClick={() => onNavigate(name)} className={classes.paper}>{name}</Paper>
            </Grid>  
        ))
    }
      </Grid>
      {foldersError && <ErrorComponent />}
      {(list.length === 0 && isFetched) && (
        <FoldersPlaceholder />
      )}
    </div>
  );
}