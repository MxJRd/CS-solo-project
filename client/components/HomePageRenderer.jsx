import React from "react";
import UserUI from './UserUI';
import DataStructureCode from '../components/DataStructureCode';
import DataStructureLogged from '../components/DataStructureLogged';
import DataStructureImg from '../components/DataStructureImg';
import { Grid } from '@material-ui/core/';
import { makeStyles, useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
  },
}));


const HomePageRenderer = (props) => {

  const classes = useStyles(props.theme);
  return (
    <div className={classes.root} id="home-page">
      <Grid container style={{ alignItems: 'center' }}>
        <Grid item style={{ textAlign: 'center' }} xs={12}>
          <h1>Home Page Component is Rendering</h1>
        </Grid>
        <Grid item xs={12}>
          <DataStructureImg />
        </Grid>
        <Grid item xs={6}>
          <DataStructureCode />
        </Grid>
        <Grid item xs={6}>
          <DataStructureLogged />
        </Grid>
        <Grid item xs={3}></Grid>
        <Grid item xs={6}>
          <UserUI theme={props.theme} />
        </Grid>
        <Grid item xs={3}></Grid>
      </Grid>
    </div >
  )
}

export default HomePageRenderer;