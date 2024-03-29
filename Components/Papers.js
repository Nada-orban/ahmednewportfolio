import React from 'react'
import { Box, Tabs, Tab, Typography, LinkTab, Grid, Button, Container, Paper, List, ListItem, ListItemText, ListItemIcon, Avatar } from '@mui/material'
import styles from '../src/styles/Home.module.css'
import { ColorModeContext } from '../public/theme'
import { styled, useTheme, alpha } from '@mui/material/styles';
// import profile from '../public/assets/sigma male.jpeg'
import Link from 'next/link'
import DownloadIcon from '@mui/icons-material/Download';
import Image from 'next/image'
import conf1 from '../public/assets/papers/icassp (1).png'
import conf2 from '../public/assets/papers/insterspeech (3).png'
import conf3 from '../public/assets/papers/eusipco2023_logo_large (3).png'
import conf4 from '../public/assets/papers/ICASSP-2024_400.png'
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import { BiSolidFilePdf } from 'react-icons/bi'
import { BsGithub } from 'react-icons'
import SlideshowIcon from '@mui/icons-material/Slideshow';
import YouTubeIcon from '@mui/icons-material/YouTube';
import GitHubIcon from '@mui/icons-material/GitHub';

function Papers() {
    const colorMode = React.useContext(ColorModeContext);
    const theme = useTheme();
    const confarray = [conf1, conf2, conf3, conf4];
    return (
        <Box id="papers" color="white" backgroundColor="background.secondary" position="relative" sx={{ py: { sm: "50px", xs: "150px" } }} >

            <Container maxWidth="xlg" >
                <Box sx={{ px: { sm: "10px", md: "40px" }, py: "80px" }}  >
                    <Box className={styles.slideTrack} display="flex" justifyContent="space-between" gap="50px" alignItems="center">
                        {confarray.map((array) => (
                            <Paper sx={{ width: "400px", height: "400px", textAlign: "center", p: "50px ", backgroundColor: "white" }} className={styles.paper}>
                                <Image
                                    src={array}
                                    alt="Picture of the skill"

                                    width={300}

                                />
                            </Paper>
                        ))}
                        {confarray.map((array) => (
                            <Paper sx={{
                                width: "400px", height: "400px", textAlign: "center", p: "50px 30px", backgroundColor: "white"
                            }} className={styles.paper}>
                                <Image
                                    src={array}
                                    alt="Picture of the author"

                                    width={300}

                                />
                            </Paper>
                        ))}
                        {confarray.map((array) => (
                            <Paper sx={{
                                width: "400px", height: "400px", textAlign: "center", p: "50px 30px", backgroundColor: "white"
                            }} className={styles.paper}>
                                <Image
                                    src={array}
                                    alt="Picture of the author"

                                    width={300}

                                />
                            </Paper>
                        ))}




                    </Box>
                    {/* <Grid container >
                        <Grid item md={4} xs={12} sm={12}>
                            <Box >
                                <Image
                                    src={conf3}
                                    alt="Picture of the author"
                                    className={styles.paperimage}
                                />
                            </Box>

                        </Grid>
                        <Grid item md={4} xs={12} sm={12}>
                            <Image
                                src={conf2}
                                alt="Picture of the author"
                                className={styles.paperimage}


                            />
                        </Grid>

                        <Grid item md={4} xs={12} sm={12}>
                            <Image
                                src={conf1}
                                alt="Picture of the author"
                                className={styles.paperimage}


                            />
                        </Grid>

                    </Grid> */}
                    <Box className={styles.layer}>
                        <Box sx={{ px: { xs: "20px", md: "65px" }, pt: "30px" }}>
                            <Box display="flex" gap="20px">
                                <div className={styles.titlesection}>
                                    <h1>
                                        <span class={styles.a} data-aos="zoom-in" data-aos-delay="50">P</span>
                                        <span class={styles.a} data-aos="zoom-in" data-aos-delay="100">a</span>
                                        <span class={styles.a} data-aos="zoom-in" data-aos-delay="150">p</span>
                                        <span class={styles.a} data-aos="zoom-in" data-aos-delay="200">e</span>
                                        <span class={styles.a} data-aos="zoom-in" data-aos-delay="250">r</span>
                                        <span class={styles.a} data-aos="zoom-in" data-aos-delay="300">s</span>
                                    </h1>
                                </div>

                            </Box>
                            <Box my="30px" >
                                <Box my="20px" data-aos="fade-up"
                                    data-aos-anchor-placement="top-bottom" >
                                    <a href="https://arxiv.org/abs/2309.07927" className={styles.linkText} target="_blank">
                                        <Typography variant='h5' sx={{ color: "secondary.main", fontWeight: "bolder" }}>Kid-Whisper: Towards Bridging the Performance Gap in Automatic Speech Recognition for Children VS. Adults</Typography>
                                    </a>
                                    <Typography variant='h6'>
                                        <span className={styles.papername}>Ahmed Adel Attia</span>
                                        , Jing Liu, Wei Ai, Dorottya Demszky, Carol Espy-Wilson, ICASSP 2024 (Under Review) </Typography>
                                    <Box display="flex " gap="10px">
                                        <a href='https://arxiv.org/pdf/2309.07927.pdf' className={styles.linkText} target="_blank">
                                            <Box display="flex" justifyContent="start">
                                                <Typography variant='h5' sx={{ color: "secondary.main", }}>Download</Typography>
                                                <DownloadIcon sx={{ color: "secondary.main", width: "26px", height: "26px" }} className={styles.iconLink} />
                                            </Box>

                                        </a>

                                        <a href='https://github.com/ahmedadelattia/whisperKids' className={styles.linkText} target="_blank" >
                                            <Box display="flex" gap="4px" justifyContent="start" alignItems="center" >
                                                <Typography variant='h5' sx={{ color: "secondary.main", }}>GitHub</Typography>
                                                <GitHubIcon className={styles.iconLink} />
                                            </Box>
                                        </a>
                                    </Box>
                                </Box>
                                <Box my="20px" data-aos="fade-up"
                                    data-aos-anchor-placement="top-bottom" >
                                    <a href="https://arxiv.org/abs/2309.09220" className={styles.linkText} target="_blank">
                                        <Typography variant='h5' sx={{ color: "secondary.main", fontWeight: "bolder" }}>Improving Speech Inversion Through Self-Supervised Embeddings and Enhanced Tract Variables</Typography>
                                    </a>
                                    <Typography variant='h6'>
                                        <span className={styles.papername}>Ahmed Adel Attia</span>
                                        , Yashish M. Siriwardena, Carol Espy-Wilson. ICASSP 2024 (Under Review)  </Typography>
                                    <Box display="flex " gap="10px">
                                        <a href='https://arxiv.org/pdf/2309.09220.pdf' className={styles.linkText} target="_blank">
                                            <Box display="flex" justifyContent="start">
                                                <Typography variant='h5' sx={{ color: "secondary.main", }}>Download</Typography>
                                                <DownloadIcon sx={{ color: "secondary.main", width: "26px", height: "26px" }} className={styles.iconLink} />
                                            </Box>

                                        </a>

                                        {/* <a href='/assets/Interspeech.pdf ' className={styles.linkText} target="_blank" >
                                            <Box display="flex" gap="4px" justifyContent="start" alignItems="center" >
                                                <Typography variant='h5' sx={{ color: "secondary.main", }}>Presentation</Typography>
                                                <YouTubeIcon className={styles.iconLink} />
                                            </Box>
                                        </a> */}
                                    </Box>
                                </Box>
                                <Box my="20px" data-aos="fade-up"
                                    data-aos-anchor-placement="top-bottom" >
                                    <a href="https://arxiv.org/abs/2210.15195" className={styles.linkText} target="_blank">
                                        <Typography variant='h5' sx={{ color: "secondary.main", fontWeight: "bolder" }}>Masked Autoencoders Are Articulatory Learners</Typography>
                                    </a>
                                    <Typography variant='h6'>
                                        <span className={styles.papername}>Ahmed Adel Attia</span>
                                        , Carol Espy-Wilson. ICASSP 2023 </Typography>
                                    <Box display="flex " gap="10px">
                                        <a href='https://arxiv.org/pdf/2210.15195.pdf' className={styles.linkText} target="_blank">
                                            <Box display="flex" justifyContent="start">
                                                <Typography variant='h5' sx={{ color: "secondary.main", }}>Download</Typography>
                                                <DownloadIcon sx={{ color: "secondary.main", width: "26px", height: "26px" }} className={styles.iconLink} />
                                            </Box>

                                        </a>
                                        <a href='https://www.youtube.com/watch?v=k4sBA1g17QY ' className={styles.linkText} target="_blank" >
                                            <Box display="flex" gap="4px" justifyContent="start" alignItems="center" >
                                                <Typography variant='h5' sx={{ color: "secondary.main", }}>Presentation</Typography>
                                                <YouTubeIcon className={styles.iconLink} />
                                            </Box>
                                        </a>
                                        <a href='https://github.com/ahmedadelattia/MAE_Articulatory_Learners' className={styles.linkText} target="_blank" >
                                            <Box display="flex" gap="4px" justifyContent="start" alignItems="center" >
                                                <Typography variant='h5' sx={{ color: "secondary.main", }}>GitHub</Typography>
                                                <GitHubIcon className={styles.iconLink} />
                                            </Box>
                                        </a>
                                    </Box>
                                </Box>
                                <Box my="30px" data-aos="fade-up"
                                    data-aos-anchor-placement="top-bottom" >
                                    <a href="https://arxiv.org/abs/2305.10775" className={styles.linkText} target="_blank">
                                        <Typography variant='h5' sx={{ color: "secondary.main", fontWeight: "bolder" }}>Enhancing Speech Articulation Analysis Using A Geometric Transformation
                                            Of The X‐ray Microbeam Dataset </Typography>
                                    </a>
                                    <Typography variant='h6'><span className={styles.papername}>Ahmed Adel Attia</span>, Mark Tiede, Carol Y. Espy-Wilson. Interspeech 2023</Typography>
                                    <Box display="flex " gap="10px">
                                        <a href='https://arxiv.org/pdf/2305.10775.pdf' className={styles.linkText} target="_blank">
                                            <Box display="flex" justifyContent="start">
                                                <Typography variant='h5' sx={{ color: "secondary.main", }}>Download</Typography>
                                                <DownloadIcon sx={{ color: "secondary.main", width: "26px", height: "26px" }} className={styles.iconLink} />
                                            </Box>
                                        </a>
                                        <a href='/assets/Interspeech.pdf ' className={styles.linkText} target="_blank" >
                                            <Box display="flex" justifyContent="start" alignItems="center" gap="4px">
                                                <Typography variant='h5' sx={{ color: "secondary.main", }}>Presentation</Typography>

                                                <PictureAsPdfIcon className={styles.iconLink} />
                                            </Box>
                                        </a>

                                    </Box>
                                </Box>
                                <Box my="30px" data-aos="fade-up"
                                    data-aos-anchor-placement="top-bottom" >
                                    <a href="https://arxiv.org/abs/2205.13086" className={styles.linkText} target="_blank">
                                        <Typography variant='h5' sx={{ color: "secondary.main", fontWeight: "bolder" }}>Audio Data Augmentation for Acoustic to articulatory Speech Inversion using
                                            Bidirectional Gated RNNs </Typography>
                                    </a>
                                    <Typography variant='h6'>Yashish M. Siriwardena, <span className={styles.papername}>Ahmed Adel Attia</span>, Ganesh Sivaraman, Carol Espy-Wilson. EUSIPCO 2023</Typography>
                                    <a href='https://arxiv.org/pdf/2205.13086.pdf' className={styles.linkText} target="_blank">
                                        <Box display="flex" justifyContent="start">
                                            <Typography variant='h5' sx={{ color: "secondary.main", }}>Download</Typography>
                                            <DownloadIcon sx={{ color: "secondary.main", width: "26px", height: "26px" }} className={styles.iconLink} />
                                        </Box>
                                    </a>
                                </Box>
                            </Box>

                        </Box>
                    </Box>
                </Box>


            </Container >
        </Box >


    )
}

export default Papers