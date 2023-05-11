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


function Landing() {
    const theme = useTheme();
    return (
        <Box id="home" className={styles.backgroundimage} >
            <Container maxWidth="xlg" >
                <Grid container px="40px" spacing={2} >
                    <Grid item md={6} xs={12} className={styles.homeSection} sx={{ mt: "40vh" }}>
                        <Typography variant='h1' data-aos="fade-up" >Hi,</Typography>
                        <Typography variant='h1' >I'm Ahmed Adel Attia</Typography>
                        {/* <div className={styles.containertext}>

                            <div className={styles.typedout} data-aos="fade-up" data-aos-delay="500">Nada Orban</div>
                        </div> */}

                        <Typography variant='h4' data-aos="fade-up" data-aos-delay="1000">FRONT END DEVELOPER</Typography>
                        <Link href=""><button className={styles.buttonStyle} data-aos="fade-up" data-aos-delay="1500">Download My CV</button></Link>

                        <Link to="contact" spy={true} smooth={true} offset={-50} duration={500}><button className={styles.buttonStyle2} data-aos="fade-up" data-aos-delay="1500">Contact Me</button></Link>
                    </Grid>


                    <Grid item md={6} xs={12} data-aos="zoom-in" >
                        {/* <Box width="700px" height="700px" mb="50px">
                            <Image
                                src={profilephoto}
                                width={800}

                                alt="Picture of the author"
                            />
                        </Box> */}

                    </Grid>
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