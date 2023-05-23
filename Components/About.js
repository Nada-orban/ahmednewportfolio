import { Box, Tabs, Tab, Typography, LinkTab, Grid, Button, Container, Paper, List, ListItem, ListItemText, ListItemIcon, Avatar } from '@mui/material'
import React from 'react'
import styles from '../src/styles/Home.module.css'
import profilephoto from '../public/assets/zyro-image.png'
import Image from 'next/image'
import { ColorModeContext } from '../public/theme'
import { styled, useTheme, alpha } from '@mui/material/styles';
import SchoolIcon from '@mui/icons-material/School';

function About() {
    const colorMode = React.useContext(ColorModeContext);
    const theme = useTheme();
    return (
        <Box id="about" py="100px"  >
            <Container maxWidth="xlg" >
                <Grid container sx={{ px: { sm: "10px", md: "40px" } }} spacing={10} >
                    <Grid item xs={12} md={6} position="relative">
                        <Box display="flex" gap="20px">
                            <div className={styles.titlesection}>
                                <h1>
                                    <span class={styles.a} data-aos="zoom-in" data-aos-delay="50">A</span>
                                    <span class={styles.a} data-aos="zoom-in" data-aos-delay="100">b</span>
                                    <span class={styles.a} data-aos="zoom-in" data-aos-delay="200">o</span>
                                    <span class={styles.a} data-aos="zoom-in" data-aos-delay="300">u</span>
                                    <span class={styles.a} data-aos="zoom-in" data-aos-delay="400">t</span>

                                </h1>
                            </div>
                            <div className={styles.titlesection}>
                                <h1>
                                    <span class={styles.a} data-aos="zoom-in" data-aos-delay="500">m</span>
                                    <span class={styles.a} data-aos="zoom-in" data-aos-delay="600">e</span>


                                </h1>
                            </div>
                        </Box>
                        <Typography className={styles.bigfakeleft}>ABOUT</Typography>
                        <Box data-aos="fade-up"
                            data-aos-anchor-placement="top-bottom">
                            <Typography variant='h5' >Welcome to my website!<br />I am a Deep Learning engineer and PhD researcher with expertise in Natural Language Processing, Signal Processing, Statistics, and Unsupervised Learning.My primary focus is on developing advanced Deep Learning models for speech and audio processing, with a passion for exploring the limitless possibilities of this cutting-edge technology.</Typography>
                        </Box>
                        <List >
                            <Typography variant='h4' sx={{ my: 1, fontWeight: "bold", color: "secondary.main" }} >Education</Typography>
                            <ListItem display="flex" justifyContent="center" alignItems='center'>
                                <ListItemIcon>
                                    <SchoolIcon sx={{ color: "text.primary", width: "30px", height: "30px" }} />
                                </ListItemIcon>
                                <ListItemText primary="Ph.D. in Computer Engineering" primaryTypographyProps={{ fontSize: '18px', color: "text.primary", fontWeight: "bold" }}
                                    secondary={<React.Fragment>
                                        <Typography
                                            sx={{ fontSize: '18px', marginRight: 6 }}
                                            component="span"
                                            variant="body2"
                                            color="text.primary"
                                        >
                                            University of Maryland
                                        </Typography>
                                        <br />

                                        {'2020 ‐ Current'}
                                    </React.Fragment>}  ></ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <SchoolIcon sx={{ color: "text.primary", width: "30px", height: "30px" }} />
                                </ListItemIcon>
                                <ListItemText primary="B.SC in electronics and communication engineering " primaryTypographyProps={{ fontSize: '18px', color: "text.primary", fontWeight: "bold" }}
                                    secondary={<React.Fragment>
                                        <Typography
                                            sx={{ fontSize: '18px', marginRight: 2 }}
                                            component="span"
                                            variant="body2"
                                            color="text.primary"
                                        >
                                            Alexandria University, Faculty of Engineering
                                        </Typography>
                                        <br />
                                        {'2015 ‐ 2020'}
                                    </React.Fragment>} ></ListItemText>
                            </ListItem>
                        </List>
                    </Grid>
                    {/* <Grid item xs={12} md={6}>
                        <Box width="300px" height="300px" position="relative">
                            <Image
                                src={profilephoto}
                                width={500}
                                className={styles.profile}
                                alt="Picture of the author"
                            />
                        </Box>


                    </Grid> */}
                </Grid>
            </Container>
        </Box>
    )
}

export default About