import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Card from '@material-ui/core/Card';
import { useNavigate, useParams } from "react-router-dom";
import SourceLink from '../SourceLink';
import NavButton from '../NavButton';
import { getIsLoggedIn } from '../../redux/auth/auth-selectors';
import { getFolders, getFoldersError } from '../../redux/folders/folders-selectors';
import { getAllSources, getSourcesError, getIsSourcesFetched } from '../../redux/sources/sources-selectors';
import { useSelector, useDispatch } from 'react-redux';
import {getSources} from '../../redux/sources/sources-operations';
import apiOperations from '../../redux/folders/folders-operations';
import { clearSources } from '../../redux/sources/sources-slice';
import AddSourceButton from '../Buttons/AddSourceButton';
import EditSourceButton from '../Buttons/EditSourceButton';
import RemoveSourceButton from '../Buttons/RemoveSourceButton';
import ErrorComponent from '../../components/ErrorComponent';
import SourcesPlaceholder from '../Placeholders/SourcesPlaceholder';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: '100%',
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
    paper: {
    padding: theme.spacing(3),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    minHeight: 100,
    color: 'black',
    fontWeight: 400,
    },
    panel: {
        width: '80vw',
        maxWidth: 1050,
        display: 'flex',
        flexDirection: 'column',
    },
    divider: {
        marginTop: 10,
        marginBottom: 20,
    },
}));

export default function SourceBar() {
  const { name } = useParams();
  const dispatch = useDispatch();
  const isAdminLoggedIn = useSelector(getIsLoggedIn);
  const folders = useSelector(getFolders);
  const sources = useSelector(getAllSources);
  const isFetched = useSelector(getIsSourcesFetched);
  const foldersError = useSelector(getFoldersError);
  const sourcesError = useSelector(getSourcesError);
  const [folderIndex, setFolderIndex] = useState(0);

  const classes = useStyles();
  const navigate = useNavigate();

//   useEffect(() => {
//   if(folders.length)
// })
  
  useEffect(() => {
    if (!folders.length) {
      dispatch(apiOperations.getFolders());
    }

    dispatch(getSources(name));
  }, [name])

  useEffect(() => {
    if (folders.length) {
      const index = folders.findIndex(folder => folder.name === name);
      
      if (index === -1) {
        navigate(`/`, { replace: true });
        return;
      }
    setFolderIndex(index);
  }
  }, [folders, name])

    // const handleChange = (event, newValue) => setValue(newValue);
    const onNavigate = name => {
    navigate(`/${name}`, { replace: true });
    dispatch(clearSources());
    };

     const renderTabs = () => {
            if (folders.length !== 0) {
                return (
                folders.map(((el, index) => (
                    <Tab
                        label={el.name}
                        {...a11yProps(index)}
                        onClick={() => onNavigate(el.name)}
                        key={el.id}
                    />
                    )))
                )}
            return null
    }
    

    const renderSources = () => {
        if (sources.length !== 0) {
            return (
            sources.map(({ name, url, description, id }) => (
              <Grid item xs={12} sm={6} key={id}>
                {isAdminLoggedIn && (
                  <>
                <EditSourceButton id={id} />
                <RemoveSourceButton id={id} />
                  </>
                )}
                <Card className={classes.paper}>
                    <SourceLink url={url} name={name}/>
                    {description && (
                    <Typography>
                         {description}
                    </Typography>
                    )} 
                </Card>
            </Grid>  
        )))}
        return null
    }
  
  return (
    <div className={classes.root}>
      {folders.length !== 0 && (
        <>
        <Tabs
        orientation="vertical"
        variant="scrollable"
        value={folderIndex}
        // onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >     
        {renderTabs()}
      </Tabs>
            <TabPanel className={classes.panel} value={folderIndex} index={folderIndex}>
        <NavButton />
       { isAdminLoggedIn && <AddSourceButton folder={name} /> }
                  <Divider className={classes.divider} variant="fullWidth" />
                  <Grid container spacing={3}>
                  {renderSources()}
                  </Grid>
            </TabPanel>
        </>
      )}
      {(foldersError || sourcesError) && <ErrorComponent />}
      {(sources.length === 0 && isFetched) && (
        <SourcesPlaceholder/>
      )}
      </div>
  );
}