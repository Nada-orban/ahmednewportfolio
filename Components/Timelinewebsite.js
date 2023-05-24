import React from 'react'
import { Box, Tabs, Tab, Typography, LinkTab, Grid, Button, Container, Paper, List, ListItem, ListItemText, ListItemIcon, Avatar } from '@mui/material'
import styles from '../src/styles/Home.module.css'
import { ColorModeContext } from '../public/theme'
import { styled, useTheme, alpha } from '@mui/material/styles';
import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import arizonalogo from '../public/assets/timeline/arizona.png'
import Image from 'next/image'

function Timelinewebsite() {
    const colorMode = React.useContext(ColorModeContext);
    const theme = useTheme();
    return (
        <Box id="timeline" py="60px">
            <Container maxWidth="xlg" >
                <Box sx={{ px: { sm: "10px", md: "40px" } }}>
                    <Typography variant='h2' sx={{ textAlign: "center", fontWeight: "bold" }} >Timeline</Typography>
                    <Typography variant='h6' sx={{ textAlign: "center" }}>A short summary of my work experience..</Typography>
                    <Timeline position="alternate" sx={{ my: 5, display: { xs: "none", sm: "block" } }} className={styles.timeline}>
                        <TimelineItem>
                            <TimelineSeparator>
                                <TimelineConnector />
                                <Box className={styles.timelinecirclebottom}>
                                    <Box className={styles.barbottom}>
                                        <TimelineDot className={styles.timelineinfodotbottom}>
                                            <Image
                                                src={arizonalogo}
                                                alt="Picture of the author"
                                                width={130}
                                                className={styles.timelineIcon}
                                            />
                                        </TimelineDot>
                                    </Box>
                                </Box>

                                <TimelineConnector sx={{ height: "130px", bgcolor: 'red', width: "5px" }} />
                            </TimelineSeparator>
                            <TimelineContent sx={{ py: '12px', px: 2, position: "relative" }} className={styles.timelineContentContainer}>
                                <Box className={styles.timelineContent} sx={{ position: "absolute", bottom: "0%", right: "60%" }}>
                                    <Typography variant='subtitle1' sx={{ color: "red" }}>Nov 2022 ‐ Now</Typography>
                                    <Typography sx={{ fontWeight: "bold", fontSize: "10px" }}>Machine Learning Developer</Typography>
                                    <Typography component="span" sx={{ color: "secondary.main", fontWeight: "bold" }}>
                                        OpenAI
                                    </Typography>
                                    <Typography sx={{ fontWeight: "bold" }}>US - Remote</Typography>
                                    <Typography >
                                        <ul>
                                            <li>Working on the tether project.</li>
                                            <li>Helping reinforcement learning models to fine‐tune and enhance chatgpt performance.</li>
                                        </ul></Typography>
                                </Box>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineSeparator>
                                <TimelineConnector />
                                <Box className={styles.timelinecircle}>
                                    <Box className={styles.bar}>
                                        <TimelineDot className={styles.timelineinfodot}>
                                            <Image
                                                src={arizonalogo}
                                                alt="Picture of the author"
                                                width={130}
                                                className={styles.timelineIcon}
                                            />
                                        </TimelineDot>
                                    </Box>
                                </Box>

                                <TimelineConnector sx={{ height: "130px", bgcolor: 'blue', width: "5px" }} />
                            </TimelineSeparator>
                            <TimelineContent sx={{ py: '12px', px: 2, position: "relative" }} className={styles.timelineContentContainer}>
                                <Box className={styles.timelineContent} sx={{ position: "absolute", bottom: "90%", left: "50%" }}>
                                    <Typography variant='subtitle1' sx={{ color: "red" }}>Nov 2022 ‐ Now</Typography>
                                    <Typography sx={{ fontWeight: "bold", fontSize: "10px" }}>Machine Learning Developer</Typography>
                                    <Typography component="span" sx={{ color: "secondary.main", fontWeight: "bold" }}>
                                        OpenAI
                                    </Typography>
                                    <Typography sx={{ fontWeight: "bold" }}>US - Remote</Typography>
                                    <Typography >
                                        <ul>
                                            <li>Working on the tether project.</li>
                                            <li>Helping reinforcement learning models to fine‐tune and enhance chatgpt performance.</li>
                                        </ul></Typography>
                                </Box>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineSeparator>
                                <TimelineConnector />
                                <Box className={styles.timelinecirclebottom}>
                                    <Box className={styles.barbottom}>
                                        <TimelineDot className={styles.timelineinfodotbottom}>
                                            <Image
                                                src={arizonalogo}
                                                alt="Picture of the author"
                                                width={130}
                                                className={styles.timelineIcon}
                                            />
                                        </TimelineDot>
                                    </Box>
                                </Box>

                                <TimelineConnector sx={{ height: "130px", bgcolor: 'red', width: "5px" }} />
                            </TimelineSeparator>
                            <TimelineContent sx={{ py: '12px', px: 2, position: "relative" }} className={styles.timelineContentContainer}>
                                <Box className={styles.timelineContent} sx={{ position: "absolute", bottom: "0%", right: "60%" }}>
                                    <Typography variant='subtitle1' sx={{ color: "red" }}>Nov 2022 ‐ Now</Typography>
                                    <Typography sx={{ fontWeight: "bold", fontSize: "10px" }}>Machine Learning Developer</Typography>
                                    <Typography component="span" sx={{ color: "secondary.main", fontWeight: "bold" }}>
                                        OpenAI
                                    </Typography>
                                    <Typography sx={{ fontWeight: "bold" }}>US - Remote</Typography>
                                    <Typography >
                                        <ul>
                                            <li>Working on the tether project.</li>
                                            <li>Helping reinforcement learning models to fine‐tune and enhance chatgpt performance.</li>
                                        </ul></Typography>
                                </Box>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem >
                            <TimelineSeparator>
                                <TimelineConnector />
                                <Box className={styles.timelinecircle}>
                                    <Box className={styles.bar}>
                                        <TimelineDot className={styles.timelineinfodot}>
                                            <Image
                                                src={arizonalogo}
                                                alt="Picture of the author"
                                                width={130}
                                                className={styles.timelineIcon}
                                            />
                                        </TimelineDot>
                                    </Box>
                                </Box>

                                <TimelineConnector sx={{ height: "130px", bgcolor: 'blue', width: "5px" }} />
                            </TimelineSeparator>
                            <TimelineContent sx={{ py: '20px', px: 2, position: "relative" }} className={styles.timelineContentContainer}>
                                <Box className={styles.timelineContent} sx={{ position: "absolute", bottom: "90%", left: "50%" }}>
                                    <Typography variant='subtitle1' sx={{ color: "red" }}>Nov 2022 ‐ Now</Typography>
                                    <Typography sx={{ fontWeight: "bold", fontSize: "10px" }}>Machine Learning Developer</Typography>
                                    <Typography component="span" sx={{ color: "secondary.main", fontWeight: "bold" }}>
                                        OpenAI
                                    </Typography>
                                    <Typography sx={{ fontWeight: "bold" }}>US - Remote</Typography>
                                    <Typography >
                                        <ul>
                                            <li>Working on the tether project.</li>
                                            <li>Helping reinforcement learning models to fine‐tune and enhance chatgpt performance.</li>
                                        </ul></Typography>
                                </Box>
                            </TimelineContent>
                        </TimelineItem>

                    </Timeline>







                </Box>



            </Container >
        </Box >
    )
}

export default Timelinewebsite