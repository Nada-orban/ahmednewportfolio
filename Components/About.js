import { Grid, Box, Typography, Container } from '@mui/material'
import React from 'react'
import styles from '../src/styles/Home.module.css'
import profilephoto from '../public/assets/zyro-image.png'
import Image from 'next/image'

function About() {
    return (
        <Box id="about" py="200px" className={styles.aboutbackground}>
            <Container maxWidth="xlg" >
                <Grid container px="40px" spacing={10} >
                    <Grid item xs={12} md={6}>
                        <Typography variant='h2' sx={{ color: "secondary.main", fontWeight: "bold", mb: 3 }}>About me</Typography>
                        <Typography variant='h5'>Welcome to my website!I am a Deep Learning engineer and PhD researcher with expertise in Natural Language Processing, Signal Processing, Statistics, and Unsupervised Learning.My primary focus is on developing advanced Deep Learning models for speech and audio processing, with a passion for exploring the limitless possibilities of this cutting-edge technology.</Typography>

                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box width="300px" height="300px" position="relative">
                            <Image
                                src={profilephoto}
                                width={500}
                                className={styles.profile}
                                alt="Picture of the author"
                            />
                        </Box>


                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default About