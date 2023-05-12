import { Grid, Box, Typography, Container } from '@mui/material'
import React from 'react'
import styles from '../src/styles/Home.module.css'

function Experience() {
    return (
        <Box id="experience" py="200px">
            <Container maxWidth="xlg" >
                <Typography variant='h2' sx={{ color: "secondary.main", fontWeight: "bold", mb: 3 }}>About me</Typography>


            </Container>

        </Box>
    )
}

export default Experience