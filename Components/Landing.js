import React, { useEffect } from 'react'
import { Box, Tabs, Tab, Typography, LinkTab, Grid, Button, Container, Avatar } from '@mui/material'
import Image from 'next/image'
import styles from '../src/styles/Home.module.css'
import FacebookIcon from '@mui/icons-material/Facebook';

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
// import jsonfile from '../public/assets/images/soft_dev (3).json'
// import sayhi from '../public/assets/images/hi.json'
// import Lottie from 'lottie-react'
import { styled, useTheme, alpha } from '@mui/material/styles';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import { Link } from 'react-scroll'
import profilephoto from '../public/assets/zyro-image.png'
import Lottie from 'lottie-react'
import waveform from '../public/assets/backgrounds/waves.json'
// import { useCallback } from "react";
// import Particles from "react-tsparticles";
// import { loadFull } from "tsparticles";
import logo from '../public/logo- 3 colors-small-flipped.png'
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import Particlesbackground from './Particlesbackground'
import { FiFacebook, FiLinkedin, FiGithub } from 'react-icons/fi'
import { SiUpwork, SiGooglescholar } from 'react-icons/si'




function Landing() {
    const theme = useTheme();

    return (
        <Box id="home" height="100vh" overflow="hidden">
            <Particlesbackground />

            <Container >
                <Box sx={{ position: "relative" }} spacing={2} height="100vh" >



                    {/* <Box sx={{ position: "absolute", top: "-150px", opacity: 0.4, }} >
                        <div ><Lottie animationData={waveform} className={styles.wavejson} /></div>
                    </Box> */}
                    <Box className={styles.homeSection} sx={{ px: { sm: "10px", md: "40px" }, pt: { lg: "10%", md: "10%", sm: "20%", xs: "40%" }, }}>
                        <Box display="flex" gap="10px">
                            <div className={styles.titlesection1}>
                                <h1>
                                    <span className={styles.a} data-aos="zoom-in" data-aos-delay="50" >H</span>
                                    <span className={styles.a} data-aos="zoom-in" data-aos-delay="100" >i</span>
                                    <span className={styles.a} data-aos="zoom-in" data-aos-delay="150">,</span>




                                </h1>
                            </div>
                            <div className={styles.titlesection1}>
                                <h1>
                                    <span className={styles.a} data-aos="zoom-in" data-aos-delay="200">I</span>
                                    <span className={styles.a} data-aos="zoom-in" data-aos-delay="250" >'</span>
                                    <span className={styles.a} data-aos="zoom-in" data-aos-delay="300">m</span>




                                </h1>
                            </div>



                        </Box>
                        <Box display="flex" gap="20px" alignItems="center">
                            <div className={styles.titlesection1}>
                                <h1 className={styles.ahmedtext}>
                                    <Box className="animate__animated animate__rollIn animate__delay-0.8s">
                                        <Image
                                            src={logo}
                                            className={styles.ahmedlogo}
                                            // height={500}
                                            alt="Picture of the author"

                                        />
                                        {/* <Lottie animationData={robotjson} /> */}
                                    </Box>
                                    {/* <div className={styles.letterA}><Lottie animationData={letterA} /></div> */}
                                    {/* <span class={styles.a} >A</span> */}
                                    <span className={styles.a} data-aos="zoom-in" data-aos-delay="400">h</span>
                                    <span className={styles.a} data-aos="zoom-in" data-aos-delay="450">m</span>
                                    <span className={styles.a} data-aos="zoom-in" data-aos-delay="500" >e</span>
                                    <span className={styles.a} data-aos="zoom-in" data-aos-delay="550">d</span>


                                </h1>
                            </div>
                            <div className={styles.titlesection1}>
                                <h1>
                                    <span className={styles.a} data-aos="zoom-in" data-aos-delay="600" >A</span>
                                    <span className={styles.a} data-aos="zoom-in" data-aos-delay="650" >d</span>
                                    <span className={styles.a} data-aos="zoom-in" data-aos-delay="700" >e</span>
                                    <span className={styles.a} data-aos="zoom-in" data-aos-delay="750">l</span>



                                </h1>
                            </div>
                            <Box sx={{ display: { xs: "none", sm: "none", md: "block", lg: "block" } }} className={styles.titlesection1}>
                                <h1>
                                    <span className={styles.a} data-aos="zoom-in" data-aos-delay="800">A</span>
                                    <span className={styles.a} data-aos="zoom-in" data-aos-delay="850" >t</span>
                                    <span className={styles.a} data-aos="zoom-in" data-aos-delay="900">t</span>
                                    <span className={styles.a} data-aos="zoom-in" data-aos-delay="950">i</span>
                                    <span className={styles.a} data-aos="zoom-in" data-aos-delay="1000">a</span>
                                </h1>
                            </Box>


                        </Box>
                        <Box sx={{ display: { sm: "block", md: "none", lg: "none" } }}>
                            <div className={styles.titlesection1}>
                                <h1>
                                    <span className={styles.a} data-aos="zoom-in" data-aos-delay="800">A</span>
                                    <span className={styles.a} data-aos="zoom-in" data-aos-delay="850" >t</span>
                                    <span className={styles.a} data-aos="zoom-in" data-aos-delay="900">t</span>
                                    <span className={styles.a} data-aos="zoom-in" data-aos-delay="950">i</span>
                                    <span className={styles.a} data-aos="zoom-in" data-aos-delay="1000">a</span>
                                </h1>
                            </div>
                        </Box>

                        {/* <div className={styles.containertext}>

                            <div className={styles.typedout} data-aos="fade-up" data-aos-delay="500">Nada Orban</div>
                        </div> */}

                        <Typography variant='h4' mb="50px" mx="5px" data-aos="fade-up" data-aos-delay="1300"
                            data-aos-anchor-placement="top-bottom">Deep Learning Ph.D Resercher</Typography>

                        <Box display="flex" sx={{ justifyContent: "start", mt: { sm: "10px", xs: "10px", md: "0px", lg: "0px" }, mb: "30px" }} alignItems="center" gap="20px" data-aos="fade-up" data-aos-delay="1350">
                            <a href="mailto:ahmadadelattia@gmail.com" target="_blank"><Avatar variant="rounded" sx={{ width: "50px", height: "50px", backgroundColor: "secondary.main", color: "white" }} className={styles.nadaavatar}><EmailIcon /></Avatar></a>
                            <a href="https://www.linkedin.com/in/ahmedadelattia" target="_blank" ><Avatar variant="rounded" sx={{ width: "50px", height: "50px", backgroundColor: "secondary.main", color: "white" }} className={styles.nadaavatar}><FiLinkedin /></Avatar></a>
                            <a href="https://github.com/ahmedadelattia" target="_blank"><Avatar variant="rounded" sx={{ width: "50px", height: "50px", backgroundColor: "secondary.main", color: "white" }} className={styles.nadaavatar}><FiGithub /></Avatar></a>
                            <a href="https://scholar.google.com/citations?user=x2TMhSQAAAAJ&hl=en&oi=sra" target="_blank"><Avatar variant="rounded" sx={{ width: "50px", height: "50px", backgroundColor: "secondary.main", color: "white" }} className={styles.nadaavatar}><SiGooglescholar /></Avatar></a>
                        </Box>



                        <Box sx={{ display: { xs: "grid", md: "flex", } }} gap="20px" justifyItems="center" justifyContent="start">
                            <Link to="contact" spy={true} smooth={true} offset={-50} duration={500} data-aos="fade-right" data-aos-delay="1400" >
                                <button className={styles.normalButton3} >
                                    <div className={styles.normalButtonbg3}></div>
                                    <p className={styles.normalButton3text}>Contact me</p>
                                </button>

                            </Link>
                            <a href="/assets/CV.pdf" target="_blank" rel='noopener noreferrer' data-aos="fade-right" data-aos-delay="1450">
                                <button className={styles.normalButton3} >
                                    <div className={styles.normalButtonbg3}></div>
                                    <p className={styles.normalButton3text}>Resume</p>
                                </button>
                                {/* <Box display="flex" gap="5px" padding="5px 40px" justifyItems="center" border="1px solid #0DD1CF" backgroundColor="secondary.main" cursor="pointer">
                                    <InsertDriveFileIcon sx={{ color: "white", mt: "8px", cursor: "pointer" }} />
                                    <Typography sx={{ fontSize: "25px", color: "white", cursor: "pointer" }}>RESUME</Typography>

                                </Box> */}

                            </a></Box>


                    </Box>



                </Box>


                {/* <Box gap="30px" mt="20px" className={styles.contactionbox} sx={{ display: { xs: 'none', sm: 'none', md: 'flex' } }}>

                    <a href='https://github.com/Nada-orban' data-aos="fade-left" target="_blank">
                        <Avatar className={styles.icon}><GitHubIcon sx={{ color: "black" }} /></Avatar>
                    </a>
                    <a href='https://www.linkedin.com/in/nada-samir-441a58130/' data-aos="fade-left" data-aos-delay="200" target="_blank">
                        <Avatar className={styles.icon} >
                            <LinkedInIcon sx={{ color: "black" }} /></Avatar>
                    </a>

                    <a href='mailto:nadasamir9334@gmail.com' data-aos="fade-left" data-aos-delay="800" target="_blank">
                        <Avatar className={styles.icon} ><EmailIcon sx={{ color: "black" }} /></Avatar>
                    </a>

                </Box> */}


                {/* <Link to="about" spy={true} smooth={true} offset={-50} duration={500}><KeyboardDoubleArrowDownIcon sx={{
                    width: "50px", height: "50px", color: "secondary.main",
                    position: "absolute", left: "50%", bottom: "30px", cursor: "pointer"
                }} className={styles.arrow} /></Link> */}










            </Container >
        </Box >



    )
}

export default Landing