import React from 'react'
import { Box, Tabs, Tab, Typography, LinkTab, Grid, Button, Container, Paper, List, ListItem, ListItemText, ListItemIcon, Avatar } from '@mui/material'
import styles from '../src/styles/Home.module.css'
import { ColorModeContext } from '../public/theme'
import { styled, useTheme, alpha } from '@mui/material/styles';
// import profile from '../public/assets/sigma male.jpeg'
import Link from 'next/link'
import DownloadIcon from '@mui/icons-material/Download';
import Image from 'next/image'
import conf1 from '../public/assets/papers/eusipco2023_logo_large (1).png'
import conf2 from '../public/assets/papers/icassp (1).png'
import conf3 from '../public/assets/papers/insterspeech (1).png'


function Papers() {
    const colorMode = React.useContext(ColorModeContext);
    const theme = useTheme();
    return (
        <Box id="papers" py="50px" color="white" backgroundColor="white" position="relative" >

            <Container maxWidth="xlg" >
                <Box sx={{ px: { sm: "10px", md: "40px" }, py: "100px" }} >
                    <Grid container >





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

                    </Grid>
                    <Box className={styles.layer}>
                        <Box sx={{ px: { xs: "10px", md: "40px" }, pt: "50px" }}>
                            <Box display="flex" gap="20px">
                                <div className={styles.titlesection}>
                                    <h1>
                                        <span class={styles.a} data-aos="zoom-in" data-aos-delay="50">P</span>
                                        <span class={styles.a} data-aos="zoom-in" data-aos-delay="100">a</span>
                                        <span class={styles.a} data-aos="zoom-in" data-aos-delay="200">p</span>
                                        <span class={styles.a} data-aos="zoom-in" data-aos-delay="300">e</span>
                                        <span class={styles.a} data-aos="zoom-in" data-aos-delay="400">r</span>
                                        <span class={styles.a} data-aos="zoom-in" data-aos-delay="500">s</span>
                                    </h1>
                                </div>

                            </Box>
                            <Box my="40px" >
                                <Box my="20px" data-aos="fade-up"
                                    data-aos-anchor-placement="top-bottom" data-aos-delay="600">
                                    <a href="https://arxiv.org/pdf/2210.15195" className={styles.linkText} target="_blank">
                                        <Typography variant='h5' sx={{ color: "secondary.main", fontWeight: "bolder" }}>Masked Autoencoders Are Articulatory Learners</Typography>
                                    </a>
                                    <Typography variant='h6'>18 May, 2023 </Typography>
                                    <a href='https://arxiv.org/pdf/2210.15195.pdf' className={styles.linkText} target="_blank">
                                        <Box display="flex" justifyContent="start">
                                            <Typography variant='h5' sx={{ color: "secondary.main", }}>Download</Typography>
                                            <DownloadIcon sx={{ color: "secondary.main", width: "26px", height: "26px" }} className={styles.iconLink} />
                                        </Box>
                                    </a>
                                </Box>
                                <Box my="30px" data-aos="fade-up"
                                    data-aos-anchor-placement="top-bottom" data-aos-delay="700">
                                    <a href="https://arxiv.org/pdf/2305.10775" className={styles.linkText} target="_blank">
                                        <Typography variant='h5' sx={{ color: "secondary.main", fontWeight: "bolder" }}>Enhancing Speech Articulation Analysis Using A Geometric Transformation
                                            Of The X‐ray Microbeam Dataset </Typography>
                                    </a>
                                    <Typography variant='h6'>18 May, 2023</Typography>
                                    <a href='https://arxiv.org/pdf/2305.10775.pdf' className={styles.linkText} target="_blank">
                                        <Box display="flex" justifyContent="start">
                                            <Typography variant='h5' sx={{ color: "secondary.main", }}>Download</Typography>
                                            <DownloadIcon sx={{ color: "secondary.main", width: "26px", height: "26px" }} className={styles.iconLink} />
                                        </Box>
                                    </a>
                                </Box>
                                <Box my="30px" data-aos="fade-up"
                                    data-aos-anchor-placement="top-bottom" data-aos-delay="800">
                                    <a href="https://arxiv.org/pdf/2205.13086" className={styles.linkText} target="_blank">
                                        <Typography variant='h5' sx={{ color: "secondary.main", fontWeight: "bolder" }}>Audio Data Augmentation for Acoustic to articulatory Speech Inversion using
                                            Bidirectional Gated RNNs </Typography>
                                    </a>
                                    <Typography variant='h6'>28 October, 2022</Typography>
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