import { Grid, Box, Typography, Container } from '@mui/material'
import React from 'react'

function About() {
    return (
        <Box py="50px">
            <Container maxWidth="xlg" >
                <Grid container px="40px" spacing={2} >
                    <Grid item xs={12} md={6}>
                        <Typography variant='h2' sx={{ color: "secondary.main", fontWeight: "bold", mb: 3 }}>About me</Typography>
                        <Typography variant='h5'>Welcome to my website!I am a Deep Learning engineer and PhD researcher with expertise in Natural Language Processing, Signal Processing, Statistics, and Unsupervised Learning.My primary focus is on developing advanced Deep Learning models for speech and audio processing, with a passion for exploring the limitless possibilities of this cutting-edge technology.</Typography>

                    </Grid>
                    <Grid item xs={12} md={6}>

                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default About