import React from 'react'
import {
    Box, Tabs, Tab, Typography, LinkTab, Grid, Button, Container, Paper, List, ListItem, ListItemText, ListItemIcon, Avatar
} from '@mui/material'
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
import FastfoodIcon from '@mui/icons-material/Fastfood';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import HotelIcon from '@mui/icons-material/Hotel';
import RepeatIcon from '@mui/icons-material/Repeat';
import { FcGoogle } from 'react-icons/fc'
import Image from 'next/image'
import arizonalogo from '../public/assets/timeline/arizona.png'
import marylandlogo from '../public/assets/timeline/university-of-maryland-logo-1.png'
import omnispeech2logo from '../public/assets/timeline/omnispeech2.png'
// import alexunversity from '../public/assets/download.jpeg'
import { NoEncryption } from '@mui/icons-material';
// import openaiphoto from '../public/assets/timeline/contact-helpdesk-customer-service-spaceship-graphic-concept.jpg'
// import perphoto from '../public/assets/timeline/download.jpeg'
// import bergenphoto from '../public/assets/timeline/Uni-Bergen-emblem.png'
// import virufyphoto from '../public/assets/timeline/virufy-logo-white-brackground-small.webp'

function Timelinemobileview() {
    return (
        <Box sx={{ display: { sm: "block", md: "none" } }}>
            <Timeline sx={{
                my: 5,
                [`& .${timelineItemClasses.root}:before`]: {
                    flex: 0,
                    padding: 0,
                },
            }} >
                <TimelineItem>
                    <TimelineSeparator >
                        <TimelineDot color="primary" variant="outlined" sx={{ width: "70px", height: "70px", overflow: "hidden", border: "2px solid #bdbdbd", padding: "3px" }}>
                            <Image
                                src={marylandlogo}
                                alt="Picture of the author"
                                width={60}

                            />
                        </TimelineDot>
                        <TimelineConnector sx={{ height: { sm: "200px", xs: "400px" } }} />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '12px', px: 2 }}>
                        <Typography variant='subtitle1' sx={{ color: "text.secondary" }}>2022 ‐ Present</Typography>
                        <Typography variant='h6' sx={{ fontWeight: "bold" }}>Graduate Research Assistant</Typography>
                        <Typography variant="h5" component="span" sx={{ color: "secondary.main", fontWeight: "bold" }}>
                            University Of Maryland
                        </Typography>
                        <Typography variant='subtitle1' sx={{ fontWeight: "bold" }}>Maryland,USA</Typography>
                        <Typography variant='subtitle1'>
                            <ul>
                                <li>Conducting research to develop Deep Learning and Machine Learning algorithms for acoustic and articulatory
                                    speech data to better understand speech production.</li>

                                <li>Published a number of papers in top conferences in speech and signal processing and machine learning.</li>
                            </ul></Typography>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineConnector />
                        <TimelineDot color="primary" variant="outlined" sx={{ width: "70px", height: "70px", overflow: "hidden", border: "2px solid #bdbdbd", padding: "2px" }}>
                            <Image
                                src={omnispeech2logo}
                                alt="Picture of the author"
                                width={60}

                            />
                        </TimelineDot>
                        <TimelineConnector sx={{ height: { sm: "300px", xs: "540px" } }} />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '12px', px: 2 }}>
                        <Typography variant='subtitle1' sx={{ color: "text.secondary" }}>June 2021 ‐ January 2022 </Typography>
                        <Typography variant='h6' sx={{ fontWeight: "bold" }}>Deep Learning Consultant</Typography>
                        <Typography variant="h5" component="span" sx={{ color: "secondary.main", fontWeight: "bold" }}>
                            Omnispeech, LLC
                        </Typography>
                        <Typography variant='subtitle1' sx={{ fontWeight: "bold" }}>Us ‐ Remote</Typography>
                        <Typography variant='subtitle1' >
                            <ul>
                                <li>I worked on developing lightweight real‐time speech enhancement deep learning models.</li>
                                <li>I successfully scaled down large Speech Enhancement GAN models from 37 million parameters to less than 1
                                    Million parameters, maintaining good clarity and noise cancellation.</li>
                                <li>I also developed an efficient data pipeline using TensorFlow Dataset API and TensorFlow profiler for more than
                                    a terabyte of audio data achieving optimal performance and ∼ 100% GPU utilization.</li>
                            </ul>
                        </Typography>
                    </TimelineContent>
                </TimelineItem>

                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineConnector />
                        <TimelineDot color="primary" variant="outlined" sx={{ width: "70px", height: "70px", overflow: "hidden", border: "2px solid #bdbdbd", padding: "3px" }}>
                            <Image
                                src={arizonalogo}
                                alt="Picture of the author"
                                width={60}

                            />
                        </TimelineDot>
                        <TimelineConnector sx={{ height: { sm: "200px", xs: "350px" } }} />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '12px', px: 2 }}>
                        <Typography variant='subtitle1' sx={{ color: "text.secondary" }}>July 2019 ‐ September 2019</Typography>
                        <Typography variant='h6' sx={{ fontWeight: "bold" }}>Deep Learning Research Intern</Typography>
                        <Typography variant="h5" component="span" sx={{ color: "secondary.main", fontWeight: "bold" }}>
                            University Of Arizona
                        </Typography>
                        <Typography variant='subtitle1' sx={{ fontWeight: "bold" }}>Arizona, USA</Typography>
                        <Typography variant='subtitle1'>
                            <ul>
                                <li>Conducted research on Generative Adversarial Networks (GANs) under the supervision of Prof. Ravi Tandon.</li>
                                <li>I worked on and helped with different projects on GANs.</li>
                                <li>I developed Mutual Information Neural Estimators that achieved over 98% accuracy, and unsupervised Outlier
                                    Detection systems.</li>
                            </ul></Typography>
                    </TimelineContent>
                </TimelineItem>



            </Timeline>
        </Box>
    )
}

export default Timelinemobileview