import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom';
import {Button} from '@material-ui/core';

const useStyles = makeStyles(() => ({

    buttonStyles:{
        fontSize: '25px',
        borderRadius: '50%',
        backgroundColor: 'rgb(12,12,12)',
        color: 'rgb(228, 130, 74)',
        textTransform: 'none',
        fontFamily: 'robot0',
        width: '120px',
        height: '120px',
        '&:hover': {
            border: 'solid 4px rgb(228, 130, 74)',
        }
    },


    line:{
        height: '25px',
        borderLeft: '6px solid black',
        width: '5px',
        marginLeft: '98px',

    },

    Link: {
        textDecoration: 'none'
    }
    
}));

const Links = () =>{
    const classes = useStyles();
    return(
        <div>
            <Link
                to='/AboutMe'
                className={classes.Link}
            >
                <Button className={classes.buttonStyles} >About<br></br>Me</Button>
            </Link>
            <div className={classes.line}>

            </div>
            <Link
                        to='/ContactMe'
                        className={classes.Link}
            >
                <Button className={classes.buttonStyles} >Contact <br></br>Me</Button>
            </Link>
            <div className={classes.line}>

            </div>
            <a target="_blank"  rel="noopener noreferrer" href="https://drive.google.com/file/d/1gjddR9ouFWNtRT4nRRxqtYcLG1RAE9Gj/view?usp=sharing" className={classes.Link}>
                <Button className={classes.buttonStyles} > Resume</Button>
           </a>
        </div>
    )
}

export default Links;