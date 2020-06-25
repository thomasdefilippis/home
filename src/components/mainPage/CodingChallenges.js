import React from 'react';
import { makeStyles, Grid, Button } from '@material-ui/core';
import CodingChallengeData from './CodingChallengeData';
import ProjectCard from './ProjectCard';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import { Link } from 'react-scroll';


const useStyles = makeStyles((theme) => ({

    title:{
        width: '100%',
        height: 'auto',
        borderBottom: 'solid 3px rgb(228, 130, 74)',
        borderTop: 'solid 3px rgb(228, 130, 74)',
        marginTop: '70px'
    },

    codingChallenges:{
        marginTop: '30px'
    },

    projectContainer:{
        textAlign: 'left'
    },
    

    
}))


const CodingChallenges = () =>{
    const classes = useStyles();
    const getProjectCard = (projectObj) => {
        const {title, imageUrl, description, edabit, gifUrl, sourceLink} = projectObj;
        return(
            <Grid item xs={12} md={4} className={classes.projectContainer} key={title}>
                <ProjectCard projectObj={ projectObj } />
            </Grid>
        )
    }
    return(
        <div className={classes.root}>
            <section>
                <Grid container direction="row" spacing={4}>
                    {CodingChallengeData.map(projectObj => getProjectCard(projectObj))}

                </Grid>
            </section>
        </div>
    )
}

export default CodingChallenges;