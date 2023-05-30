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
import Timelinemobileview from './Timelinemobileview'
import CircleIcon from '@mui/icons-material/Circle';

function Timeline1() {
    const colorMode = React.useContext(ColorModeContext);
    const theme = useTheme();
    return (
        <Box id="experience" py="100px" height="100vh">
            <Container maxWidth="xlg" >
                <Box sx={{ px: { sm: "10px", md: "40px" }, }}>
                    <Box display="flex" gap="20px">
                        <div className={styles.titlesection}>
                            <h1>
                                <span class={styles.a} data-aos="zoom-in" data-aos-delay="50">T</span>
                                <span class={styles.a} data-aos="zoom-in" data-aos-delay="100">i</span>
                                <span class={styles.a} data-aos="zoom-in" data-aos-delay="200">m</span>
                                <span class={styles.a} data-aos="zoom-in" data-aos-delay="300">e</span>
                                <span class={styles.a} data-aos="zoom-in" data-aos-delay="400">l</span>
                                <span class={styles.a} data-aos="zoom-in" data-aos-delay="400">i</span>
                                <span class={styles.a} data-aos="zoom-in" data-aos-delay="400">n</span>
                                <span class={styles.a} data-aos="zoom-in" data-aos-delay="400">e</span>


                            </h1>
                        </div>

                    </Box>
                    <Timeline position="alternate" className={styles.timeline} sx={{ display: { xs: "none", sm: "none", md: "block" }, mt: "-600px", }}>
                        <TimelineItem>

                            <TimelineOppositeContent >
                                <Box className={styles.timelineContent} marginLeft="100px">
                                    <Typography variant='subtitle1' sx={{ color: "text.secondary" }}>Nov 2022 ‐ Now</Typography>
                                    <Typography variant='h5' sx={{ fontWeight: "bold" }}>Machine Learning Developer</Typography>
                                    <Typography variant="h4" component="span" sx={{ color: "secondary.main", fontWeight: "bold" }}>
                                        OpenAI
                                    </Typography>
                                    <Typography variant='subtitle1' sx={{ fontWeight: "bold" }}>US - Remote</Typography>
                                    <Typography variant='subtitle1'>
                                        <ul>
                                            <li>Working on the tether project.</li>
                                            <li>Helping reinforcement learning models to fine‐tune and enhance chatgpt performance.</li>
                                        </ul></Typography>
                                </Box>
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineDot />
                                <TimelineConnector sx={{ height: "400px" }} />
                            </TimelineSeparator>
                            <TimelineContent className={styles.timelineContentContainer}>
                                <Box className={styles.timelineContentup}>
                                    Eat
                                </Box>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineOppositeContent color="text.secondary" className={styles.timelineContentContainer}>
                                <Box className={styles.timelineContentup}>
                                    9.30pm
                                </Box>
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineDot />
                                <TimelineConnector sx={{ height: "400px" }} />
                            </TimelineSeparator>
                            <TimelineContent className={styles.timelineContentContainer}>
                                <Box className={styles.timelineContent}>
                                    <Typography variant='subtitle1' sx={{ color: "text.secondary" }}>Nov 2022 ‐ Now</Typography>
                                    <Typography variant='h5' sx={{ fontWeight: "bold", }}>Machine Learning Developer</Typography>
                                    <Typography variant="h4" component="span" sx={{ color: "secondary.main", fontWeight: "bold" }}>
                                        OpenAI
                                    </Typography>
                                    <Typography variant='subtitle1' sx={{ fontWeight: "bold" }}>US - Remote</Typography>
                                    <Typography variant='subtitle1'>
                                        <ul>
                                            <li>Working on the tether project.</li>
                                            <li>Helping reinforcement learning models to fine‐tune and enhance chatgpt performance.</li>
                                        </ul></Typography>
                                </Box>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineOppositeContent >
                                <Box className={styles.timelineContent}>
                                    <Typography variant='subtitle1' sx={{ color: "text.secondary" }}>Nov 2022 ‐ Now</Typography>
                                    <Typography variant='h5' sx={{ fontWeight: "bold", }}>Machine Learning Developer</Typography>
                                    <Typography variant="h4" component="span" sx={{ color: "secondary.main", fontWeight: "bold" }}>
                                        OpenAI
                                    </Typography>
                                    <Typography variant='subtitle1' sx={{ fontWeight: "bold" }}>US - Remote</Typography>
                                    <Typography variant='subtitle1'>
                                        <ul>
                                            <li>Working on the tether project.</li>
                                            <li>Helping reinforcement learning models to fine‐tune and enhance chatgpt performance.</li>
                                        </ul></Typography>
                                </Box>
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineDot />
                                <TimelineConnector sx={{ height: "400px" }} />
                            </TimelineSeparator>
                            <TimelineContent className={styles.timelineContentContainer}>
                                <Box className={styles.timelineContentup}>
                                    Eat
                                </Box>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineOppositeContent color="text.secondary" className={styles.timelineContentContainer}>
                                <Box className={styles.timelineContentup}>
                                    9.30pm
                                </Box>
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineDot />
                                <TimelineConnector sx={{ height: "400px" }} />
                            </TimelineSeparator>
                            <TimelineContent className={styles.timelineContentContainer}>
                                <Box className={styles.timelineContent}>
                                    <Typography variant='subtitle1' sx={{ color: "text.secondary" }}>Nov 2022 ‐ Now</Typography>
                                    <Typography variant='h5' sx={{ fontWeight: "bold", }}>Machine Learning Developer</Typography>
                                    <Typography variant="h4" component="span" sx={{ color: "secondary.main", fontWeight: "bold" }}>
                                        OpenAI
                                    </Typography>
                                    <Typography variant='subtitle1' sx={{ fontWeight: "bold" }}>US - Remote</Typography>
                                    <Typography variant='subtitle1'>
                                        <ul>
                                            <li>Working on the tether project.</li>
                                            <li>Helping reinforcement learning models to fine‐tune and enhance chatgpt performance.</li>
                                        </ul></Typography>
                                </Box>
                            </TimelineContent>
                        </TimelineItem>
                    </Timeline>
                    <Timelinemobileview />
                    {/* <Timeline position="alternate" sx={{ my: 5, display: { xs: "none", sm: "block" } }} className={styles.timeline}>
                        <TimelineItem>
                            <TimelineOppositeContent className={styles.timelineContent}>
                                09:30 am
                            </TimelineOppositeContent>
                            <TimelineSeparator >
                                <TimelineDot />

                                <TimelineConnector sx={{ height: "400px" }} />
                            </TimelineSeparator>
                            <TimelineContent sx={{ py: '12px', }} className={styles.timelineContentContainer}>
                                <Box className={styles.timelineContent}>
                                    <Typography variant='subtitle1' sx={{ color: "text.secondary" }}>Nov 2022 ‐ Now</Typography>
                                    <Typography variant='h5' sx={{ fontWeight: "bold" }}>Machine Learning Developer</Typography>
                                    <Typography variant="h4" component="span" sx={{ color: "secondary.main", fontWeight: "bold" }}>
                                        OpenAI
                                    </Typography>
                                    <Typography variant='subtitle1' sx={{ fontWeight: "bold" }}>US - Remote</Typography>
                                    <Typography variant='subtitle1'>
                                        <ul>
                                            <li>Working on the tether project.</li>
                                            <li>Helping reinforcement learning models to fine‐tune and enhance chatgpt performance.</li>
                                        </ul></Typography>
                                </Box>

                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineOppositeContent className={styles.timelineContent}>
                                <Typography variant='subtitle1' sx={{ color: "text.secondary" }}>Nov 2022 ‐ Now</Typography>
                                <Typography variant='h5' sx={{ fontWeight: "bold" }}>Machine Learning Developer</Typography>
                                <Typography variant="h4" component="span" sx={{ color: "secondary.main", fontWeight: "bold" }}>
                                    OpenAI
                                </Typography>
                                <Typography variant='subtitle1' sx={{ fontWeight: "bold" }}>US - Remote</Typography>
                                <Typography variant='subtitle1'>
                                    <ul>
                                        <li>Working on the tether project.</li>
                                        <li>Helping reinforcement learning models to fine‐tune and enhance chatgpt performance.</li>
                                    </ul></Typography>

                            </TimelineOppositeContent>
                            <TimelineSeparator >
                                <TimelineDot />

                                <TimelineConnector sx={{ height: "400px" }} />
                            </TimelineSeparator>
                            <TimelineContent sx={{ py: '12px', px: 2 }} className={styles.timelineContentContainer}>
                                <Box className={styles.timelineContent}>
                                    09:30 am
                                </Box>

                            </TimelineContent>
                        </TimelineItem>
                      
                     
                    </Timeline> */}
                </Box>
            </Container>
        </Box>
    )
}

export default Timeline1