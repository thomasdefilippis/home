import React from 'react';
import { Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import { Link } from "react-scroll";
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

const useStyles = (theme) => ({
    buttonContainerStyles: {

        width: 'auto',
        height: 'auto',
        margin: '0 auto',
        textAlign: 'center',
        marginBottom: '0px',
        marginTop: '10px'

    },

    buttonStyles:{
        fontSize: '19px',
        height: '120px',
        width: '120px',
        border: 'solid 2px rgb(228, 130, 74)',
        borderRadius: '50%',
        fontFamily: 'roboto',
        backgroundColor: '#111111',
        color: 'rgb(228, 130, 74)',
        textTransform: 'none',
        marginBottom: '0px',
        '&:hover': {
            border: 'solid 4px rgb(228, 130, 74)',
        }
    },

    arrowStyles1:{
        position: 'relative',
        fontSize: '70px',
        left: '-80px',
        color: "rgb(228, 130, 74)"
    },

    arrowStyles2:{
        position: 'relative',
        fontSize: '70px',
        right: '-80px',
        color: "rgb(228, 130, 74)"
    },


    line:{
        height: '20px',
        borderBottom: '3px solid rgb(228, 130, 74)',
        width: '40px',
        display: 'inline-block'

    },
    
});



class ScrollUp extends React.Component {
    
    render(){
    const { classes } =  this.props;
    return(
        <div className={classes.buttonContainerStyles}>
            <ArrowUpwardIcon className={classes.arrowStyles1}/>
            <br ></br>
            <Link
                        activeClass="active"
                        to="navBar"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration= {500}
            >
                <Button className={classes.buttonStyles} id='projects'>Up</Button>
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
            <ArrowDownwardIcon className={classes.arrowStyles2}  />

        </div>
    )
    }
}


export default withStyles(useStyles)(ScrollUp);
