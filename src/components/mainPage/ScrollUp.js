import React from 'react';
import { Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import { Link } from "react-scroll";
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

const useStyles = (theme) => ({
    buttonContainerStyles: {

        width: '150px',
        height: 'auto',
        margin: '0 auto',
        textAlign: 'center',
        marginBottom: '0px'
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

    arrowStyles:{
        position: 'relative',
        fontSize: '70px',
        color: "rgb(228, 130, 74)"
    },

    line:{
        height: '20px',
        borderLeft: '3px solid rgb(228, 130, 74)',
        width: '5px',
        marginLeft: '72px',

    },
    
});



class ScrollUp extends React.Component {
    
    render(){
    const { classes } =  this.props;
    return(
        <div className={classes.buttonContainerStyles}>
            <ArrowUpwardIcon className={classes.arrowStyles}/>
            <br id='projects'></br>
            <Link
                        activeClass="active"
                        to="navBar"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration= {500}
            >
                <Button className={classes.buttonStyles} >Up</Button>
            </Link>
            <div className={classes.line}>
            </div>
            <Link
                    activeClass="active"
                    to="codingChallenges"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration= {500}
            >
                <Button className={classes.buttonStyles} >Coding Challenges</Button>
            </Link>
            <br></br>
            <ArrowDownwardIcon className={classes.arrowStyles}  />

        </div>
    )
    }
}


export default withStyles(useStyles)(ScrollUp);
