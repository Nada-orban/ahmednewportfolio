import { Grid, Box, Typography, Container } from '@mui/material'
import React from 'react'
import styles from '../src/styles/Home.module.css'
import { ColorModeContext } from '../public/theme'
import { styled, useTheme, alpha } from '@mui/material/styles';
import GitHubIcon from '@mui/icons-material/GitHub';
import Link from 'next/link'
import Image from 'next/image'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { TypeSpecimen } from '@mui/icons-material';
import { projectsdata } from '../data'

function Projects2() {
    const colorMode = React.useContext(ColorModeContext);
    const theme = useTheme();
    return (
        <>
            <Box id='projects' py="100px">
                <Container maxWidth="xlg" >
                    <Box sx={{ px: { sm: "10px", md: "40px" } }} position="relative">
                        <Box display="flex" gap="20px">
                            <div className={styles.titlesection}>
                                <h1>
                                    <span class={styles.a} data-aos="zoom-in" data-aos-delay="50">P</span>
                                    <span class={styles.a} data-aos="zoom-in" data-aos-delay="100">r</span>
                                    <span class={styles.a} data-aos="zoom-in" data-aos-delay="200">o</span>
                                    <span class={styles.a} data-aos="zoom-in" data-aos-delay="300">j</span>
                                    <span class={styles.a} data-aos="zoom-in" data-aos-delay="400">e</span>
                                    <span class={styles.a} data-aos="zoom-in" data-aos-delay="500">c</span>
                                    <span class={styles.a} data-aos="zoom-in" data-aos-delay="600">t</span>
                                    <span class={styles.a} data-aos="zoom-in" data-aos-delay="700">s</span>

                                </h1>
                            </div>

                        </Box>
                        <Typography variant='h5' data-aos="fade-up"
                            data-aos-anchor-placement="top-bottom">
                            Below are some selected projects that I have worked on during my industry experience, as well as class and capstone projects. These endeavors highlight my skills and dedication in various professional contexts, showcasing the breadth of my experience and capabilities.
                        </Typography>
                        <Typography className={styles.bigfake}>WORK</Typography>
                    </Box>
                </Container>
                <Grid container sx={{ my: "80px" }} data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom" data-aos-delay="800">
                    {projectsdata.map(project => (
                        <Grid item xs={12} sm={6} lg={3} md={6}>

                            <Box className={styles.projectBox}>
                                <img src={project.image} alt='' className={styles.boximage} />
                                <Box className={styles.boxtext}>
                                    <Typography variant='subtitle1'>VIEW PROJECT</Typography>
                                </Box>

                            </Box>

                        </Grid>

                    ))}
                </Grid>

            </Box>
            {/* <Box width="500px" height="200px" backgroundColor="red">
                <Typography>hi</Typography>
            </Box> */}
        </>
    )
}

export default Projects2