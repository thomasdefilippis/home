import React from 'react';
import { makeStyles, Hidden } from '@material-ui/core';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import { Link } from 'react-scroll';


const useStyles = makeStyles(() => ({
    description: {
        backgroundColor: '#111111',
        width: 'auto',
        height: 'auto',
        paddingLeft: '10px',
        color: 'rgb(228, 130, 74)',
        fontFamily: 'roboto',
        fontSize: '40px',
    },

    paragraph2:{
        fontSize: '20px'
    },

    text1:{
        textAlign: 'left',
        paddingTop: '35px'
    },

    text2: {
        textAlign: 'left'
    },

    arrow:{
        color: 'white',
        fontSize: '40px',
        cursor: 'pointer',
        '&:hover':{
            opacity: '0.7'
        }
    }
    
}));
const Description = () =>{
    const classes = useStyles();
    return (
        <div className={classes.description}>
            <Hidden xsDown>
                <section className={classes.text1}>
                            <h3 style={{display: 'inline'}}>Life Long Learner</h3>
                            <p className={classes.paragraph1}> 
                                -that's the best way to describe me. Whether it's studying math proofs and algorithms as a college student, crafting an engaging lesson as a math teacher, or designing a beautiful and consistent website, I always give it my all.<br></br><br></br>
                                My name is Thomas Defilippis, and I am a self-taught developer based out of Denver, Colorado, who has strong skills in React JS front-end development. In fact, I designed this whole site in React. <br></br><br></br>
                                Although, I am mostly focused on front-end development, I have experience building APIs in Node libraries such as Node.express, managing databases using mongoDB, and authenticating login info using passport-jwt.<br></br><br></br>
                                Even though I have little experience working formally, I am an extremely hard worker, fast-learner, effective communicator, and creative designer. Everyday, I am not only gaining a vast amount of knowledge, but also testing that knowledge in projects.<br></br> 
                                Check out my projects below    
                                <Link
                                        activeClass="active"
                                        to="projects"
                                        spy={true}
                                        smooth={true}
                                        offset={-70}
                                        duration= {500}>
                                    <ArrowDownwardIcon className={classes.arrow}/>
                                </Link>
                            </p>
                </section>
            </Hidden>
            <Hidden smUp>
                <section className={classes.text2}>
                    <p className={classes.paragraph2}>Life Long Learner-
                        that's the best way to describe me. Whether it's studying math proofs and algorithms as a college student, crafting an engaging lesson as a math teacher, or designing a beautiful and consistent website, I always give it my all.<br></br><br></br>
                        I'm Thomas Defilippis, and I'm a self taught developer based out of Denver, Colorado, who has strong skills in React JS front-end development. In fact, I designed this whole site in React. <br></br><br></br>
                        Although, I am mostly focused on front-end development, I have experience building APIs in Node libraries such as Node.express, managing databases using mongoDB, and authenticating login info using passport-jwt.<br></br><br></br>
                        Even though I have little experience working formally, I am an extremely hard worker, fast-learner, effective communicator, and creative designer. Everyday, I am not only gaining a vast amount of knowledge, but also testing that knowledge in projects.<br></br> 
                        Check out my projects below    
                        <Link
                                activeClass="active"
                                to="projects"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration= {500}>
                            <ArrowDownwardIcon className={classes.arrow}/>
                        </Link>
                    </p>
                </section>
            </Hidden>
        </div>
    )
}

export default Description;