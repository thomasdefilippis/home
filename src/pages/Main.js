import React from 'react';
import NavBar from '../components/mainPage/NavBar';
import SeeProjects from '../components/mainPage/SeeProjects';
import {Grid, Button} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import ProjectContent from '../components/mainPage/ProjectContent';
import ScrollUp from "../components/mainPage/ScrollUp";
import Footer from '../components/mainPage/Footer';
import {motion} from 'framer-motion';
import { pageVariant, pageTransition } from './PageTransition';
import CodingChallenges from '../components/mainPage/CodingChallenges';
import silverFalls from '../img/Silver-Falls2.gif';
import { mergeClasses } from '@material-ui/styles';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import { Link } from 'react-scroll';



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
    width: '100%',
    height: '1000px',
    marginBottom: '200px'
  },

  seeProjectsGrid:{
    background: `url(${silverFalls}) no-repeat center`,
    backgroundSize: 'cover',
  },


  projectsSection:{
    height: 'auto',
    backgroundColor: '#111111'
  },

  top:{
    backgroundImage: 'linear-gradient(0deg,#111111, black)'
  },

  title:{
      width: '100%',
      height: 'auto',
      borderBottom: 'solid 3px rgb(228, 130, 74)',
      borderTop: 'solid 3px rgb(228, 130, 74)',
      marginTop: '20px',
      textAlign: 'center',
  },

  App:{
    height: 'auto',
  },

  codingChallenges:{
    backgroundColor: '#111111',
    width: '100%',
    height: 'auto',
    textAlign: 'center',
    marginBottom: '75px',
    marginTop: '0px'
  },

  header:{
      color: 'rgb(228, 130, 74)',
      fontFamily: 'roboto',
      fontSize: '40px'
  },

  arrowStyles:{
    position: 'relative',
    fontSize: '70px',
    color: "rgb(228, 130, 74)"
},

buttonContainerStyles: {

    width: '150px',
    height: 'auto',
    margin: '0 auto',
    textAlign: 'center',
    marginBottom: '250px'
},

buttonStyles:{
    fontSize: '18px',
    height: '120px',
    width: '120px',
    border: 'solid 2px rgb(228, 130, 74)',
    borderRadius: '50%',
    backgroundColor: '#111111',
    color: 'rgb(228, 130, 74)',
    textTransform: 'none',
    fontFamily: 'roboto',
    marginBottom: '0px',
    '&:hover': {
        border: 'solid 4px rgb(228, 130, 74)',
    }
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
          <Grid item className={classes.seeProjectsGrid}>
            <div className={classes.seeProjects}>
              <SeeProjects href="#Projects"/>
            </div>
          </Grid>
        </Grid>
      </div>
      <div className={classes.projectsSection}>
        <div className={classes.top}>
          <ScrollUp />
          <header className={classes.title} >
              <h1 className={classes.header}>Projects</h1>
          </header>
        </div>
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
        <ArrowUpwardIcon className={classes.arrowStyles} />
        <br id="codingChallenges"></br>
        <Link
                    activeClass="active"
                    to="projects"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration= {500}
        >
            <Button className={classes.buttonStyles} >Up</Button>
        </Link>
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
