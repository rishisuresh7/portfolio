import React, { useState, useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import Paper from '@material-ui/core/Paper';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { initExperience } from '../experience/experience.actions.jsx';
import './experience.styles.scss';

const Experience = ({ initExperience, experience, global }) => {
    const classes = makeStyles(() => ({
        root: {
            minWidth: 750,
            maxWidth: 900,
            width: 900,
            marginTop: 10,
            background: "transparent",
            color: "cyan",
            height: 'auto !important',
        },
        content: {
            '& div': {
                display: 'flex',
                justifyContent: 'space-between',
            }
        },
        date: {
            position: 'relative',
        },
        details: {
            '& div': {
                overflow: 'scroll',
            }
        }
    }))();

    const [expanded, setExpanded] = useState(false);
    const handleChange = (name) => (_, isExpanded) => {
        setExpanded(isExpanded ? name : false);
    };

    useEffect(() => {
        initExperience(global);
        document.addEventListener('scroll', () => {
            const experienceDiv = document.getElementById('experience');
            if ((window.pageYOffset > experienceDiv.offsetTop / 2) && !experienceDiv.classList.contains('fadein')) {
                experienceDiv.classList.add('fadein');
            }
        });
    }, []);

    return (
        <div className="experience-container" id="experience">
            <div className="experience-heading">
                <h2>{experience.heading}</h2>
            </div>
            {
                experience && experience?.items.map((item, index) => (
                    <Accordion className={classes.root} key={index} expanded={expanded === `panel-${index}`} onChange={handleChange(`panel-${index}`)}>
                        <AccordionSummary className={classes.content} expandIcon={<i className="fas fa-arrow-down" style={{ color: 'cyan', fontSize: '16px' }} />} >
                            <Typography>
                                <span style={{ color: '#887ce7' }}>{item.name.toUpperCase()}</span> - {item.description?.role}
                            </Typography>
                            <Typography className={classes.date}>
                                {item.description?.period}
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails className={classes.details}>
                            <Paper elevation={1} style={{ color: 'cyan', background: 'linear-gradient(to right, #0f2027, #203a43, #2c5364)' }}>
                                <List sx={{ width: '100%', maxWidth: 360 }}>
                                    {
                                        item.description?.responsibilities.map(rs => (
                                            <Fragment key={rs.id}>
                                                <ListItem key={rs.id} alignItems="flex-start" sx={{ width: '100%' }}>
                                                    <ListItemText
                                                        primary={
                                                            <Typography>
                                                                {'- ' + (rs.title || '')}
                                                            </Typography>
                                                        }
                                                        secondary={
                                                            <Typography
                                                                style={{ display: 'inline', color: 'azure' }}
                                                                component="span"
                                                                variant="body2"
                                                            >
                                                                {rs.text}
                                                            </Typography>
                                                        }
                                                    />
                                                </ListItem>
                                                <Divider variant="fullWidth" light={true} component="li" />
                                            </Fragment>
                                        ))
                                    }
                                </List>
                            </Paper>
                        </AccordionDetails>
                    </Accordion>
                ))
            }
        </div>
    )
}

const mapStateToProps = state => ({
    experience: state.experience,
    global: state.global,
})

const mapDispatchToProps = dispatch => ({
    initExperience: (payload) => dispatch(initExperience(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(Experience);