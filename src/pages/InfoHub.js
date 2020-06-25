import React from 'react';
import { makeStyles, Grid, Hidden, Button } from '@material-ui/core';
import NavBar from '../components/AboutMe/NavBar';
import SeeProjects from '../components/AboutMe/SeeProjects';
import ProjectContent from '../components/mainPage/ProjectContent';
import ScrollUp from '../components/mainPage/ScrollUp';
import Description from '../components/AboutMe/Description';
import Footer from '../components/mainPage/Footer';
import { motion } from 'framer-motion';
import { pageVariant, pageTransition } from './PageTransition';
import AboutMe from './AboutMe';
import ContactMe from './ContactMe';
import { Route, Switch } from 'react-router-dom';
import CodingChallenges from '../components/mainPage/CodingChallenges';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import { Link } from 'react-scroll';


const useStyles = makeStyles((theme) => ({
    root:{
        backgroundColor: 'black',
        height: 'auto',
        width: 'auto'

    },
    navigation:{
        width: '100%',
        minHeight: '125vh',
        backgroundColor: 'black',
        marginBottom: '400px',
    },


    body: {
        marginTop: '400px'
    },

    change:{
        marginLeft: '0px',
        width: 'auto'
    },

    projects:{
      paddingTop: '10px',
      paddingBottom: '100px',
      marginTop: '40px',
      
    },
    
    example:{
        color: "white",
        fontSize: '40px',
    },

    header:{
        color: 'rgb(228, 130, 74)',
        fontFamily: 'roboto',
        fontSize: '40px',
        textAlign: 'center'
    },
    
    
    title:{
        width: '100%',
        height: 'auto',
        borderBottom: 'solid 3px rgb(228, 130, 74)',
        borderTop: 'solid 3px rgb(228, 130, 74)',
        marginTop: '70px'
    },

    codingChallenges:{
        backgroundColor: 'black',
        width: '100%',
        height: 'auto',
        textAlign: 'center',
        marginBottom: '150px',
        marginTop: '10px'
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
        backgroundColor: 'black',
        color: 'rgb(228, 130, 74)',
        textTransform: 'none',
        marginBottom: '0px',
        '&:hover': {
            border: 'solid 4px rgb(228, 130, 74)',
        }
    },

  
}));


const InfoHub = (props) =>{
    const classes = useStyles();
    const { width } = props;
    return(
        <div>
            <div className={classes.navigation}>
                <Grid container direction="column">
                <Grid item >
                    <NavBar />
                </Grid >
                <Grid item >
                    <Grid container direction="row">
                        <Grid item className={classes.projects} xs={1} sm={1} md={2} lg={1} xl={1}>
                            <Hidden smDown className={classes.projectButtons}><SeeProjects href="#Projects"/></Hidden>
                        </Grid>
                        <Grid item xs = {false} sm={false} md={1} lg={0}></Grid>
                        <Grid item xs={10} sm={10} md={7} lg={9} xl={10} className={classes.route}>
                            <motion.div
                                initial='out' 
                                animate='in' 
                                exit='out'
                                className={classes.change}
                                variants={pageVariant}
                                transition={pageTransition}
                            >
                                <Switch>
                                    <Route path="/ContactMe" component={ContactMe}/>
                                    <Route path="/AboutMe"   component={AboutMe} />
                                </Switch>

                            </motion.div>
                        </Grid>
                        <Grid item xs= {1} md={1}></Grid>
                    </Grid>
                </Grid>
                </Grid>
                
            </div>
            <div className='Projects' id="projects">
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
        </div>
        )
}

export default InfoHub;
