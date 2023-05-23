import React from 'react'
import { Box, Tabs, Tab, Typography, LinkTab, Grid, Button, Container, Paper, List, ListItem, ListItemText, ListItemIcon, Avatar } from '@mui/material'
import styles from '../src/styles/Home.module.css'
import { ColorModeContext } from '../public/theme'
import { styled, useTheme, alpha } from '@mui/material/styles';
// import profile from '../public/assets/sigma male.jpeg'
import Link from 'next/link'
import DownloadIcon from '@mui/icons-material/Download';

function Papers() {
    const colorMode = React.useContext(ColorModeContext);
    const theme = useTheme();
    return (
        <Box id="papers" py="90px" color="white" className={styles.paperbackground}>
            <Container maxWidth="xlg" >
                <Box sx={{ px: { sm: "10px", md: "40px" } }}>
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
                            <a href="https://arxiv.org/abs/2011.13320" className={styles.linkText} target="_blank">
                                <Typography variant='h5' sx={{ color: "white", fontWeight: "bolder" }}>Masked Autoencoders Are Articulatory Learners</Typography>
                            </a>
                            <Typography variant='h6'>Nov 2020, Awaiting AE Recommendation from IEEE TAI. </Typography>
                            <a href='https://arxiv.org/pdf/2011.13320.pdf' className={styles.linkText} target="_blank">
                                <Box display="flex" justifyContent="start">
                                    <Typography variant='h5' sx={{ color: "white", }}>Download</Typography>
                                    <DownloadIcon sx={{ color: "secondary.main", width: "26px", height: "26px" }} className={styles.iconLink} />
                                </Box>
                            </a>
                        </Box>
                        <Box my="30px" data-aos="fade-up"
                            data-aos-anchor-placement="top-bottom" data-aos-delay="700">
                            <a href="https://www.isca-speech.org/archive/pdfs/interspeech_2021/fakhry21_interspeech.pdf" className={styles.linkText} target="_blank">
                                <Typography variant='h5' sx={{ color: "white", fontWeight: "bolder" }}>Enhancing Speech Articulation Analysis Using A Geometric Transformation
                                    Of The X‐ray Microbeam Dataset </Typography>
                            </a>
                            <Typography variant='h6'>March 2021,Interspeech conference 2021</Typography>
                            <a href='https://www.isca-speech.org/archive/pdfs/interspeech_2021/fakhry21_interspeech.pdf.' className={styles.linkText} target="_blank">
                                <Box display="flex" justifyContent="start">
                                    <Typography variant='h5' sx={{ color: "white", }}>Download</Typography>
                                    <DownloadIcon sx={{ color: "secondary.main", width: "26px", height: "26px" }} className={styles.iconLink} />
                                </Box>
                            </a>
                        </Box>
                        <Box my="30px" data-aos="fade-up"
                            data-aos-anchor-placement="top-bottom" data-aos-delay="700">
                            <a href="https://www.isca-speech.org/archive/pdfs/interspeech_2021/fakhry21_interspeech.pdf" className={styles.linkText} target="_blank">
                                <Typography variant='h5' sx={{ color: "white", fontWeight: "bolder" }}>Audio Data Augmentation for Acoustic to articulatory Speech Inversion using
                                    Bidirectional Gated RNNs </Typography>
                            </a>
                            <Typography variant='h6'>March 2021,Interspeech conference 2021</Typography>
                            <a href='https://www.isca-speech.org/archive/pdfs/interspeech_2021/fakhry21_interspeech.pdf.' className={styles.linkText} target="_blank">
                                <Box display="flex" justifyContent="start">
                                    <Typography variant='h5' sx={{ color: "white", }}>Download</Typography>
                                    <DownloadIcon sx={{ color: "secondary.main", width: "26px", height: "26px" }} className={styles.iconLink} />
                                </Box>
                            </a>
                        </Box>
                    </Box>
                </Box>

            </Container>

        </Box>
    )
}

export default Papers