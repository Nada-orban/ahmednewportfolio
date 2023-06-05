import { Grid, Box, Typography, Container, Divider } from '@mui/material'
import React from 'react'
import styles from '../src/styles/Home.module.css'
import { ColorModeContext } from '../public/theme'
import { styled, useTheme, alpha } from '@mui/material/styles';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import ShareIcon from '@mui/icons-material/Share';
import ComputerIcon from '@mui/icons-material/Computer';
import { SiTensorflow, SiUnity, SiLatex, SiLinux, SiGnubash } from 'react-icons/si'
import { GiSoundWaves } from 'react-icons/gi'
import { BiNetworkChart } from 'react-icons/bi'
import { FiMonitor } from 'react-icons/fi'

function Skill() {
    const colorMode = React.useContext(ColorModeContext);
    const theme = useTheme();
    return (
        <Box id="skills" py="100px" >
            <Container maxWidth="xlg" >
                <Box sx={{ px: { sm: "10px", md: "40px" } }}>
                    <Box display="flex" gap="20px">
                        <div className={styles.titlesection}>
                            <h1>
                                <span class={styles.a} data-aos="zoom-in" data-aos-delay="50">S</span>
                                <span class={styles.a} data-aos="zoom-in" data-aos-delay="100">k</span>
                                <span class={styles.a} data-aos="zoom-in" data-aos-delay="150">i</span>
                                <span class={styles.a} data-aos="zoom-in" data-aos-delay="200">l</span>
                                <span class={styles.a} data-aos="zoom-in" data-aos-delay="250">l</span>
                                <span class={styles.a} data-aos="zoom-in" data-aos-delay="300">s</span>


                            </h1>
                        </div>

                    </Box>
                    <Typography variant='h6' data-aos="fade-up"
                        data-aos-anchor-placement="top-bottom" data-aos-delay="350">Below are some of my skills, and I'm always looking to learn more.</Typography>
                    <Grid container spacing={1} sx={{ my: "50px", }} data-aos="fade-right"
                        data-aos-delay="400">
                        <Grid item xs={12} sm={6} md={4} sx={{ display: "flex", justifyContent: "center", flexDirection: "column", mt: "30px" }} >
                            <Box sx={{ display: "flex", justifyContent: "center", flexDirection: "column", mt: "30px", }}>
                                <Box sx={{ padding: "25px 20px", textAlign: "center", border: "2px solid white", borderRadius: "25px", backgroundColor: "secondary.main", color: "background.secondary", width: "120px", height: "120px", overflow: "hidden", mx: "auto" }} ><FiMonitor style={{ width: "70px", height: "70px" }} /></Box>
                                <Typography variant='h4' sx={{ textAlign: "center", my: 2, fontWeight: "bold" }}>Programming Languages</Typography>
                                <Typography variant='h6' sx={{ textAlign: "center" }}>Python, Matlab, C, C++, C#, VHDL, Verilog
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} sx={{ display: "flex", justifyContent: "center", flexDirection: "column", mt: "30px" }} >
                            <Box sx={{ display: "flex", justifyContent: "center", flexDirection: "column", mt: "30px", }}>
                                <Box sx={{ padding: "25px 20px", textAlign: "center", border: "2px solid white", borderRadius: "25px", backgroundColor: "secondary.main", color: "background.secondary", width: "120px", height: "120px", overflow: "hidden", mx: "auto" }} ><BiNetworkChart style={{ width: "70px", height: "70px" }} /></Box>
                                <Typography variant='h4' sx={{ textAlign: "center", my: 2, fontWeight: "bold" }}>Deep Learning </Typography>
                                <Typography variant='h6' sx={{ textAlign: "center" }}>Transformers, GANs, Autoencoders, Unsupervised learning, FairAI
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} sx={{ display: "flex", justifyContent: "center", flexDirection: "column", mt: "30px" }} >
                            <Box sx={{ display: "flex", justifyContent: "center", flexDirection: "column", mt: "30px", }}>
                                <Box sx={{ padding: "25px 20px", textAlign: "center", border: "2px solid white", borderRadius: "25px", backgroundColor: "secondary.main", color: "background.secondary", width: "120px", height: "120px", overflow: "hidden", mx: "auto" }} ><SiTensorflow style={{ width: "70px", height: "70px" }} /></Box>
                                <Typography variant='h4' sx={{ textAlign: "center", my: 2, fontWeight: "bold" }}>Deep Learning Frameworks</Typography>
                                <Typography variant='h6' sx={{ textAlign: "center" }}>Tensorflow, Pytorch, Scikit learn
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} sx={{ display: "flex", justifyContent: "center", flexDirection: "column", mt: "30px" }} >
                            <Box sx={{ display: "flex", justifyContent: "center", flexDirection: "column", mt: "30px", }}>
                                <Box sx={{ padding: "25px 20px", textAlign: "center", border: "2px solid white", borderRadius: "25px", backgroundColor: "secondary.main", color: "background.secondary", width: "120px", height: "120px", overflow: "hidden", mx: "auto" }} ><GiSoundWaves style={{ width: "70px", height: "70px" }} /></Box>
                                <Typography variant='h4' sx={{ textAlign: "center", my: 2, fontWeight: "bold" }}>Signal Processing</Typography>
                                <Typography variant='h6' sx={{ textAlign: "center" }}>Audio Processing, Speech Processing, Computer Vision and Image Processing
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} sx={{ display: "flex", justifyContent: "center", flexDirection: "column", mt: "30px" }} >
                            <Box sx={{ display: "flex", justifyContent: "center", flexDirection: "column", mt: "30px", }}>
                                <Box sx={{ padding: "25px 20px", textAlign: "center", border: "2px solid white", borderRadius: "25px", backgroundColor: "secondary.main", color: "background.secondary", width: "120px", height: "120px", overflow: "hidden", mx: "auto" }} ><SiUnity style={{ width: "70px", height: "70px" }} /></Box>
                                <Typography variant='h4' sx={{ textAlign: "center", my: 2, fontWeight: "bold" }}>Game Development</Typography>
                                <Typography variant='h6' sx={{ textAlign: "center" }}>Unity Game Engine, VR Development
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} sx={{ display: "flex", justifyContent: "center", flexDirection: "column", mt: "30px" }} >
                            <Box sx={{ display: "flex", justifyContent: "center", flexDirection: "column", mt: "30px", }}>
                                <Box sx={{ padding: "25px 20px", display: "flex", textAlign: "center", border: "2px solid white", borderRadius: "25px", backgroundColor: "secondary.main", color: "background.secondary", width: "120px", height: "120px", overflow: "hidden", mx: "auto" }} >

                                    <SiLinux style={{ width: "70px", height: "70px" }} />

                                </Box>
                                <Typography variant='h4' sx={{ textAlign: "center", my: 2, fontWeight: "bold" }}>Others</Typography>
                                <Typography variant='h6' sx={{ textAlign: "center" }}>Linux,Bash,Latex
                                </Typography>
                            </Box>
                        </Grid>


                        {/* <Grid item xs={12} sm={6} md={6} sx={{ display: "flex", justifyContent: "center", flexDirection: "column", mt: "30px" }}>
                        <ComputerIcon sx={{ padding: "20px", textAlign: "center", border: "2px solid white", borderRadius: "50%", backgroundColor: "white", color: "secondary.main", width: "120px", height: "120px", overflow: "hidden", mx: "auto" }} />
                        <Typography variant='h4' sx={{ textAlign: "center", my: 2, fontWeight: "bold" }}>Others</Typography>
                        <Typography variant='h6' sx={{ textAlign: "center" }}> Linux,Git,OOP Fundamentals,Matlab
                        </Typography>
                    </Grid> */}

                    </Grid>
                </Box>



            </Container >
        </Box>


    )
}

export default Skill