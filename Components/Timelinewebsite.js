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
            <Container>
                <Typography variant='h2' sx={{ textAlign: "center", fontWeight: "bold" }} className={styles.timeline}>Timeline</Typography>
                <Typography variant='h6' sx={{ textAlign: "center" }}>A short summary of my work experience..</Typography>
                <Timeline position="alternate" sx={{ my: 5, display: { xs: "none", sm: "block" } }}>
                    <TimelineItem>
                        <TimelineSeparator >
                            <TimelineDot color="primary" variant="outlined" sx={{ width: "150px", height: "150px", overflow: "hidden", border: "2px solid #bdbdbd", padding: "15px 5px" }}>
                                <Image
                                    src={arizonalogo}
                                    alt="Picture of the author"
                                    width={130}
                                    className={styles.timelineIcon}

                                />
                            </TimelineDot>
                            <TimelineConnector sx={{ height: "100px" }} />
                        </TimelineSeparator>
                        <TimelineContent sx={{ py: '12px', px: 2 }}>
                            <Typography variant='subtitle1' sx={{ color: "text.secondary" }}>Nov 2022 ‐ Now</Typography>
                            <Typography variant='h5' sx={{ fontWeight: "bold" }}>Machine Learning Developer</Typography>
                            <Typography variant="h4" component="span" sx={{ color: "secondary.main", fontWeight: "bold" }}>
                                OpenAI
                            </Typography>
                            <Typography variant='h6' sx={{ fontWeight: "bold" }}>US - Remote</Typography>
                            <Typography variant='h6'>
                                <ul>
                                    <li>Working on the tether project.</li>
                                    <li>Helping reinforcement learning models to fine‐tune and enhance chatgpt performance.</li>
                                </ul></Typography>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineSeparator >
                            <TimelineDot color="primary" variant="outlined" sx={{ width: "150px", height: "150px", overflow: "hidden", border: "2px solid #bdbdbd", padding: "11px 5px" }}>
                                <Image
                                    src={arizonalogo}
                                    alt="Picture of the author"
                                    width={110}
                                    className={styles.timelineIcon}

                                />
                            </TimelineDot>
                            <TimelineConnector sx={{ height: "80px" }} />
                        </TimelineSeparator>
                        <TimelineContent sx={{ py: '12px', px: 2 }}>
                            <Typography variant='subtitle1' sx={{ color: "text.secondary" }}>Feb 2023 ‐ Now</Typography>
                            <Typography variant='h5' sx={{ fontWeight: "bold" }}>M.SC in computing and information systems</Typography>
                            <Typography variant="h4" component="span" sx={{ color: "secondary.main", fontWeight: "bold" }}>
                                Liverpool John Moores University
                            </Typography>
                            <Typography variant='h6' sx={{ fontWeight: "bold" }}>Liverpool - Remote</Typography>
                            <Typography variant='h6'>
                                • Topics: Computer Systems, Software Development.</Typography>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineConnector />
                            <TimelineDot color="primary" variant="outlined" sx={{ width: "150px", height: "150px", overflow: "hidden", border: "2px solid #bdbdbd", padding: "10px 0px" }}>
                                <Image
                                    src={arizonalogo}
                                    alt="Picture of the author"
                                    width={130}
                                    className={styles.timelineIcon}
                                />
                            </TimelineDot>
                            <TimelineConnector sx={{ height: "250px" }} />
                        </TimelineSeparator>
                        <TimelineContent sx={{ py: '12px', px: 2 }}>
                            <Typography variant='subtitle1' sx={{ color: "text.secondary" }}>Jan 2022 ‐ Jan 2023</Typography>
                            <Typography variant='h5' sx={{ fontWeight: "bold" }}>Lead Data Scientist</Typography>
                            <Typography variant="h4" component="span" sx={{ color: "secondary.main", fontWeight: "bold" }}>
                                P.E.R PARTNERS
                            </Typography>
                            <Typography variant='h6' sx={{ fontWeight: "bold" }}>UK ‐ Remote</Typography>
                            <Typography variant='h6' sx={{ textAlign: "start" }} >
                                <ul>
                                    <li>Lead a team of four data scientists where I was responsible for developing the company’s
                                        flagship product, Digital Eye, alongside other products such as Drug Interaction Checker.</li>
                                    <li>Digital Eye is based on a deep learning model for digitizing handwritten documents</li>
                                    <li>Carried out research and built the core understanding of the company performance metrics
                                        to qualitatively inform and interpret models</li>
                                    <li>Was responsible for supporting the growth and professional development of the team.</li>
                                </ul>

                            </Typography>
                        </TimelineContent>
                    </TimelineItem>

                </Timeline>









            </Container >
        </Box >
    )
}

export default Timelinewebsite