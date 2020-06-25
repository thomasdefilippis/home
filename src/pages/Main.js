import React from 'react';
import '../App.css';
import NavBar from '../components/mainPage/NavBar';
import SeeProjects from '../components/mainPage/SeeProjects';
import {Grid} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import ProjectContent from '../components/mainPage/ProjectContent';
import ScrollUp from "../components/mainPage/ScrollUp";
import Footer from '../components/mainPage/Footer';
import {motion} from 'framer-motion';
import { pageVariant, pageTransition } from './PageTransition';
import CodingChallenges from '../components/mainPage/CodingChallenges';
import silverFalls from '../img/Silver-Falls2.gif';
import { mergeClasses } from '@material-ui/styles';



const useStyles = makeStyles((theme) => ({
  body: {
    marginBottom: '400px'
  },

  projects:{
    paddingTop: '0px',
    paddingBottom: '100px',
    marginTop: '30px'
  },


  header:{
    color: 'rgb(228, 130, 74)',
    fontFamily: 'roboto',
    fontSize: '50px',
    textAlign: 'center'
  },

  seeProjects:{
    background: `url(${silverFalls}) no-repeat center`,
    backgroundSize: 'cover',
    width: '100%',
    height: '1000px',
    marginTop: '5px',
    paddingTop: '60px',
    marginBottom: '200px'
  },

  projectsSection:{
    height: 'auto'
  },

  title:{
      width: '100%',
      height: 'auto',
      borderBottom: 'solid 3px rgb(228, 130, 74)',
      borderTop: 'solid 3px rgb(228, 130, 74)',
      marginTop: '20px'
  },

  App:{
    height: 'auto'
  },

  codingChallenges:{
    backgroundColor: 'black',
    width: '100%',
    height: 'auto',
    textAlign: 'center',
    marginBottom: '75px',
    marginTop: '10px'
  },

  header:{
      color: 'rgb(228, 130, 74)',
      fontFamily: 'roboto',
      fontSize: '40px'
  },

}))

function Main() {
  const classes = useStyles();
  return (
    <motion.div
      initial='out' 
      animate='in' 
      exit='out'
      variants={pageVariant}
      transition={pageTransition}
    >
      <div className="App">
        <Grid container direction="column">
          <Grid item >
            <NavBar />
          </Grid >
          <Grid item >
            <div className={classes.seeProjects}>
              <SeeProjects href="#Projects"/>
            </div>
          </Grid>
        </Grid>
      </div>
      <div className={classes.projectsSection}>
        <ScrollUp />
        <header className={classes.title} >
            <h1 className={classes.header}>Projects</h1>
        </header>
        <Grid container direction='row' className={classes.projects} >
          <Grid item className={classes.example} xs={1} sm={1} md={1} lg={2} xl={2}>
          </Grid>
          <Grid item className={classes.example} xs={10} sm={10} md={10} lg={8} xl={8}>
            <ProjectContent />
          </Grid>
          <Grid item className={classes.example} xs={1} sm={1} md={1} lg={2} xl={2}>
          </Grid>
        </Grid>
      </div>
      <div className={classes.codingChallenges}>
          <header className={classes.title} >
              <h1 className={classes.header}>Coding Challenges</h1>
          </header>
          <Grid container direction='row' className={classes.projects} >
              <Grid item className={classes.example} xs={1} sm={1} md={1} lg={2} xl={2}>
              </Grid>
              <Grid item className={classes.example} xs={10} sm={10} md={10} lg={8} xl={8}>
                  <CodingChallenges />
              </Grid>
              <Grid item className={classes.example} xs={1} sm={1} md={1} lg={2} xl={2}>
              </Grid>
          </Grid>
        </div>
      <Footer />

    </motion.div>
  );
}

export default Main;
