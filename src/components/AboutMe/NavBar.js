import React from 'react';
import {AppBar, Toolbar, Typography, makeStyles, Hidden, Grid} from '@material-ui/core';
import TitleIcon from '@material-ui/icons/Title';
import { Link } from 'react-router-dom';
import { Link as Scroll } from 'react-scroll';

const useStyles = makeStyles((theme) => ({
    root: {
        boxShadow: "none",
        backgroundColor: "#222222",
        height: 'auto',
    },
    
    gridContainer:{
        flex: 1,
        marginTop: '30px',
        marginBottom: '20px',
    },

    titleIcon: {
        color: 'rgb(228, 130, 74)',
        marginTop: '10px',
        marginRight: '10px',
        marginBottom: '10px',
        fontSize: '40px',
        border: 'solid 2px rgb(228, 130, 74)'

    },

    link:{
        color: 'rgb(228, 130, 74)',
        width: '20px',
        height: 'auto',
        margin: '0 auto',
        textDecoration: 'none',
    },

    scrollLink:{
        color: 'rgb(228, 130, 74)',
        width: '20px',
        height: 'auto',
        margin: '0 auto',
        cursor: 'pointer'
    },

    linkTypography:{
        color: 'rgb(228, 130, 74)',
        fontSize: '23px',
        paddingTop: '0px',
        fontFamily: 'roboto',
        textDecoration: 'underline',
    },

    specialLink:{
        color: 'rgb(228, 130, 74)',
        fontSize: '23px',
        paddingTop: '0px',
        fontFamily: 'roboto',
        textDecoration: 'underline',
        height: 'auto',
        position: 'relative',
        top: '12%',
    },

    linkContainer:{
        textAlgin: 'left',
        width: 'auto',
        marginLeft: '20px',
    }
    
}));

const NavBar = () => {
    const classes = useStyles();
    return(
        <AppBar position="static" className={classes.root} id="navBar">
            <Toolbar>
                <Grid container direction='row' className={classes.gridContainer}>
                    <Grid item className={classes.linkContainer} style={{marginLeft: '5px'}}>
                        <Link to='/' className={classes.link}><Typography className={classes.linkTypography}>Home</Typography></Link>
                    </Grid>
                    <Hidden mdUp>
                        <Grid item className={classes.linkContainer}>
                            <Scroll 
                                className={classes.scrollLink}
                                activeClass="active"
                                to="projects"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration= {500}
                            >
                                <Typography className={classes.linkTypography}>
                                    Projects
                                </Typography>
                            </Scroll>
                        </Grid>
                    </Hidden>
                    <Hidden mdUp>
                        <Grid item className={classes.linkContainer}>
                            <Link to='/AboutMe' className={classes.link}><Typography className={classes.linkTypography}>About</Typography></Link>
                        </Grid>
                    </Hidden>
                    <Hidden mdUp>
                        <Grid item className={classes.linkContainer}>
                            <Link to='/ContactMe' className={classes.link}><Typography className={classes.linkTypography}>Contact</Typography></Link>
                        </Grid>
                    </Hidden>
                    <Hidden mdUp>
                        <Grid item className={classes.linkContainer}>
                            <a target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/1gjddR9ouFWNtRT4nRRxqtYcLG1RAE9Gj/view?usp=sharing" className={classes.specialLink}>
                                    Resume
                            </a> 
                        </Grid>
                    </Hidden>
                </Grid>
                <Hidden xsDown>
                    <TitleIcon className={classes.titleIcon}/>
                </Hidden>
            </Toolbar>
        </AppBar>
    )
}

export default NavBar;