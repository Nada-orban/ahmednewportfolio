import React from 'react'
import { Box, Tabs, Tab, Typography, LinkTab, Grid, Button, Container, Paper, List, ListItem, ListItemText, ListItemIcon, Avatar, Divider } from '@mui/material'
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
import marylandlogo from '../public/assets/timeline/university-of-maryland-logo-1.png'
import omnispeech2logo from '../public/assets/timeline/omnispeech2.png'
import Image from 'next/image'
import Timelinemobileview from './Timelinemobileview'
import CircleIcon from '@mui/icons-material/Circle';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

function Timeline2() {
    const colorMode = React.useContext(ColorModeContext);
    const theme = useTheme();
    return (
        <Box id="experience" py="100px" >
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
                    <Grid container mt="100px">
                        <Grid item xs={12} md={3}>
                            <Image
                                src={arizonalogo}
                                alt="Picture of the author"
                                width={70}

                            />
                            <Box display="flex" justifyContact="center" justifyItems="center" mb="20px">
                                <Divider sx={{ width: "30px", height: "10px", mt: "-4px", }} />
                                <Box sx={{ border: "1px solid #F7AE9D", borderRadius: "50%", width: "10px", height: "10px", backgroundColor: "#F7AE9D" }}></Box>
                                <Divider sx={{ width: "404px", height: "10px", mt: "-4px", }} />

                            </Box>

                            <Box width="80%">
                                <Typography variant='subtitle1' sx={{ color: "text.secondary", }}>July 2019 ‐ September 2019</Typography>
                                <Typography variant='h5' sx={{ fontWeight: "bold" }}>Deep Learning Research Intern</Typography>
                                <Typography variant="h4" component="span" sx={{ color: "secondary.main", fontWeight: "bold" }}>
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
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <Image
                                src={omnispeech2logo}
                                alt="Picture of the author"
                                width={85}

                            />
                            <Box display="flex" justifyContact="center" justifyItems="center" mb="20px">
                                <Divider sx={{ width: "35px", height: "10px", mt: "-4px", }} />
                                <Box sx={{ border: "1px solid #F7AE9D", borderRadius: "50%", width: "10px", height: "10px", backgroundColor: "#F7AE9D" }}></Box>
                                <Divider sx={{ width: "400px", height: "10px", mt: "-4px", }} />
                            </Box>

                            <Box width="80%">
                                <Typography variant='subtitle1' sx={{ color: "text.secondary", }}>June 2021 ‐ January 2022</Typography>
                                <Typography variant='h5' sx={{ fontWeight: "bold" }}>Deep Learning Consultant</Typography>
                                <Typography variant="h4" component="span" sx={{ color: "secondary.main", fontWeight: "bold" }}>
                                    Omnispeech, LLC
                                </Typography>
                                <Typography variant='subtitle1' sx={{ fontWeight: "bold" }}>US - Remote</Typography>
                                <Typography variant='subtitle1'>
                                    <ul>
                                        <li>I worked on developing lightweight real‐time speech enhancement deep learning models.</li>
                                        <li>I successfully scaled down large Speech Enhancement GAN models from 37 million parameters to less than 1
                                            Million parameters, maintaining good clarity and noise cancellation.</li>
                                        <li>I also developed an efficient data pipeline using TensorFlow Dataset API and TensorFlow profiler for more than
                                            a terabyte of audio data achieving optimal performance and ∼ 100% GPU utilization.</li>
                                    </ul></Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <Image
                                src={marylandlogo}
                                alt="Picture of the author"
                                width={76}

                            />
                            <Box display="flex" justifyContact="center" justifyItems="center" mb="20px">
                                <Divider sx={{ width: "35px", height: "10px", mt: "-4px", }} />
                                <Box sx={{ border: "1px solid #F7AE9D", borderRadius: "50%", width: "10px", height: "10px", backgroundColor: "#F7AE9D" }}></Box>
                                <Divider sx={{ width: "399px", height: "10px", mt: "-4px", }} />
                            </Box>

                            <Box width="80%">
                                <Typography variant='subtitle1' sx={{ color: "text.secondary", }}>January 2022 ‐ Present</Typography>
                                <Typography variant='h5' sx={{ fontWeight: "bold" }}>Graduate Research Assistant</Typography>
                                <Typography variant="h4" component="span" sx={{ color: "secondary.main", fontWeight: "bold" }}>
                                    University Of Maryland
                                </Typography>
                                <Typography variant='subtitle1' sx={{ fontWeight: "bold" }}>Maryland,USA</Typography>
                                <Typography variant='subtitle1'>
                                    <ul>
                                        <li>Conducting research to develop Deep Learning and Machine Learning algorithms for acoustic and articulatory
                                            speech data to better understand speech production.</li>
                                        <li>In my first 10 months in this position I authored and published my first conference paper (arXiv: 2210.15195) to
                                            IEEE ICASSP 2023.</li>
                                    </ul></Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <Image
                                src={marylandlogo}
                                alt="Picture of the author"
                                width={76}

                            />
                            <Box display="flex" justifyContact="center" justifyItems="center" mb="20px">
                                <Divider sx={{ width: "35px", height: "10px", mt: "-4px", }} />
                                <Box sx={{ border: "1px solid #F7AE9D", borderRadius: "50%", width: "10px", height: "10px", backgroundColor: "#F7AE9D" }}></Box>
                                <Divider sx={{ width: "399px", height: "10px", mt: "-4px", }} />

                            </Box>

                            <Box width="80%">
                                <Typography variant='subtitle1' sx={{ color: "text.secondary", }}>January 2022 ‐ Present</Typography>
                                <Typography variant='h5' sx={{ fontWeight: "bold" }}>Advisor: Prof. Carol Espy‐Wilson.</Typography>
                                <Typography variant="h4" component="span" sx={{ color: "secondary.main", fontWeight: "bold" }}>
                                    University Of Maryland
                                </Typography>
                                <Typography variant='subtitle1' sx={{ fontWeight: "bold" }}>Maryland,USA</Typography>
                                <Typography variant='subtitle1'>
                                    <ul>
                                        <li>Working on the tether project.</li>
                                        <li>Helping reinforcement learning models to fine‐tune and enhance chatgpt performance.</li>
                                    </ul></Typography>
                            </Box>
                        </Grid>

                    </Grid>
                </Box>

            </Container>
        </Box>
    )
}

export default Timeline2