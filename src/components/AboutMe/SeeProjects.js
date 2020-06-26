import React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-scroll";
import Links from './Links';
import ContactLinks from '../ContactMe/ContactLinks';
import { Route, Switch } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    buttonContainerStyles: {
        width: 'auto',
        height: 'auto',
        marginTop: '50px',
        paddingLeft: '100px'
    },

    buttonStyles:{
        fontSize: '20px',
        border: 'solid 2px rgb(228, 130, 74)',
        borderRadius: '50%',
        backgroundColor: '#111111',
        color: 'rgb(228, 130, 74)',
        textTransform: 'none',
        width: '120px',
        height: '120px',
        '&:hover': {
            border: 'solid 4px rgb(228, 130, 74)',
            background: '#000000'
        }
    },


    line:{
        height: '40px',
        borderLeft: '3px solid rgb(228, 130, 74)',
        width: '5px',
        marginLeft: '60px',

    },
    
}));

const SeeProjects = () => {
    
    
    const classes =  useStyles();
    return(
        <div className={classes.buttonContainerStyles}>

            <Link
                        activeClass="active"
                        to="projects"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration= {500}
            >
                <Button className={classes.buttonStyles} >Projects</Button>
            </Link>
            <div className={classes.line}>

            </div>
                <Switch>
                    <Route path="/ContactMe" component={ContactLinks}/>
                    <Route path="/AboutMe" component={Links} />
                </Switch>
        </div>
    )
}


export default SeeProjects;