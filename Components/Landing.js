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
import letterA from '../public/assets/backgrounds/A (1).json'

import logo from '../public/assets/backgrounds/logo2.png'


function Landing() {
    const theme = useTheme();
    return (
        <Box id="home" className={styles.backgroundimage} >
            <Container maxWidth="xlg" >
                <Grid container sx={{ px: { sm: "10px", md: "40px" }, mt: { lg: "10%", md: "30px", sm: "30%", xs: "40%" } }} spacing={2} >
                    <Grid item md={12} xs={12} className={styles.homeSection} sx={{ textAlign: "start" }}>
                        <Box display="flex" gap="10px">
                            <div className={styles.titlesection1}>
                                <h1>
                                    <span className={styles.a} data-aos="zoom-in" data-aos-delay="50" >H</span>
                                    <span className={styles.a} data-aos="zoom-in" data-aos-delay="100" >i</span>
                                    <span className={styles.a} data-aos="zoom-in" data-aos-delay="200">,</span>




                                </h1>
                            </div>
                            <div className={styles.titlesection1}>
                                <h1>
                                    <span className={styles.a} data-aos="zoom-in" data-aos-delay="300">I</span>
                                    <span className={styles.a} data-aos="zoom-in" data-aos-delay="400" >'</span>
                                    <span className={styles.a} data-aos="zoom-in" data-aos-delay="500">m</span>


                                </h1>
                            </div>



                        </Box>
                        <Box display="flex" gap="20px">


                            <div className={styles.titlesection1}>
                                <h1 className={styles.ahmedtext}>
                                    <Box  >
                                        <Image
                                            src={logo}
                                            width={80}
                                            // height={500}
                                            alt="Picture of the author"

                                        />
                                        {/* <Lottie animationData={robotjson} /> */}
                                    </Box>
                                    {/* <div className={styles.letterA}><Lottie animationData={letterA} /></div> */}
                                    {/* <span className{styles.a} >A</span> */}
                                    <span className={styles.a} data-aos="zoom-in" data-aos-delay="600">h</span>
                                    <span className={styles.a} data-aos="zoom-in" data-aos-delay="700">m</span>
                                    <span className={styles.a} data-aos="zoom-in" data-aos-delay="800" >e</span>
                                    <span className={styles.a} data-aos="zoom-in" data-aos-delay="900">d</span>


                                </h1>
                            </div>
                            <div className={styles.titlesection1}>
                                <h1>
                                    <span className={styles.a} data-aos="zoom-in" data-aos-delay="1000" >A</span>
                                    <span className={styles.a} data-aos="zoom-in" data-aos-delay="1100" >d</span>
                                    <span className={styles.a} data-aos="zoom-in" data-aos-delay="1200" >e</span>
                                    <span className={styles.a} data-aos="zoom-in" data-aos-delay="1300">l</span>



                                </h1>
                            </div>
                            <Box sx={{ display: { xs: "none", sm: "none", md: "none", lg: "block" } }} className={styles.titlesection1}>
                                <h1>
                                    <span className={styles.a} data-aos="zoom-in" data-aos-delay="1400">A</span>
                                    <span className={styles.a} data-aos="zoom-in" data-aos-delay="1500" >t</span>
                                    <span className={styles.a} data-aos="zoom-in" data-aos-delay="1600">t</span>
                                    <span className={styles.a} data-aos="zoom-in" data-aos-delay="1700">i</span>
                                    <span className={styles.a} data-aos="zoom-in" data-aos-delay="1800">a</span>
                                </h1>
                            </Box>

                        </Box>
                        <Box sx={{ display: { md: "block", lg: "none" } }}>
                            <div className={styles.titlesection1}>
                                <h1>
                                    <span className={styles.a} data-aos="zoom-in" data-aos-delay="1400">A</span>
                                    <span className={styles.a} data-aos="zoom-in" data-aos-delay="1500">t</span>
                                    <span className={styles.a} data-aos="zoom-in" data-aos-delay="1600">t</span>
                                    <span className={styles.a} data-aos="zoom-in" data-aos-delay="1700">i</span>
                                    <span className={styles.a} data-aos="zoom-in" data-aos-delay="1800">a</span>
                                </h1>
                            </div>



                        </Box>

                        {/* <div className={styles.containertext}>

                            <div className={styles.typedout} data-aos="fade-up" data-aos-delay="500">Nada Orban</div>
                        </div> */}

                        <Typography variant='h4' mb="50px" mx="5px" data-aos="fade-up" data-aos-delay="1900"
                            data-aos-anchor-placement="top-bottom">Deep Learning Ph.D Resercher</Typography>
                        {/* <Link href=""><button className={styles.buttonStyle} data-aos="fade-up" data-aos-delay="1500">Download My CV</button></Link> */}

                        <Link to="contact" spy={true} smooth={true} offset={-50} duration={500}
                        >
                            <button className={styles.normalButton2} data-aos="fade-right" data-aos-delay="2000">
                                <div className={styles.normalButtonbg}></div>
                                <p className={styles.normalButton1text}>Contact me</p>
                            </button>

                        </Link>
                    </Grid>


                    {/* <Grid item md={6} xs={12} data-aos="zoom-in" >
                     <Box width="700px" height="700px" mb="50px">
                            <Image
                                src={profilephoto}
                                width={800}

                                alt="Picture of the author"
                            />
                        </Box>

                </Grid>  */}
                </Grid>


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