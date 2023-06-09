import { Grid, Box, Typography, Container, Divider, Avatar } from '@mui/material'
import React from 'react'
import styles from '../src/styles/Home.module.css'
import profilephoto from '../public/assets/zyro-image.png'
import Image from 'next/image'
import { ColorModeContext } from '../public/theme'
import { styled, useTheme, alpha } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Link from 'next/link'
import { useForm, ValidationError } from '@formspree/react';
import AttachEmailIcon from '@mui/icons-material/AttachEmail';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import EastIcon from '@mui/icons-material/East';
import mapphoto from '../public/assets/Screenshot from 2023-05-24 17-26-00.png'
import { FiFacebook, FiLinkedin, FiGithub } from 'react-icons/fi'
import { SiUpwork } from 'react-icons/si'


function Contact() {
    const colorMode = React.useContext(ColorModeContext);
    const theme = useTheme();
    const [state, handleSubmit] = useForm("moqzolwp");
    return (
        <Box id="contact" py="50px" sx={{ backgroundColor: "background.blue" }}>
            <Container maxWidth="xlg" >

                <Box sx={{ px: { sm: "10px", md: "40px" } }}>


                    <Grid container spacing={4} mt="20px">
                        <Grid item sm={12} md={6}>
                            <Box display="flex" gap="20px">
                                <div className={styles.titlesection}>
                                    <h1>
                                        <span class={styles.a} data-aos="zoom-in" data-aos-delay="50" >C</span>
                                        <span class={styles.a} data-aos="zoom-in" data-aos-delay="100">o</span>
                                        <span class={styles.a} data-aos="zoom-in" data-aos-delay="150">n</span>
                                        <span class={styles.a} data-aos="zoom-in" data-aos-delay="200">t</span>
                                        <span class={styles.a} data-aos="zoom-in" data-aos-delay="250">a</span>
                                        <span class={styles.a} data-aos="zoom-in" data-aos-delay="300">c</span>
                                        <span class={styles.a} data-aos="zoom-in" data-aos-delay="350">t</span>

                                    </h1>
                                </div>
                                <div className={styles.titlesection}>
                                    <h1>
                                        <span class={styles.a} data-aos="zoom-in" data-aos-delay="400">m</span>
                                        <span class={styles.a} data-aos="zoom-in" data-aos-delay="450">e</span>
                                    </h1>
                                </div>
                            </Box>


                            <Box display="flex" data-aos="fade-up"
                                data-aos-anchor-placement="top-bottom" >
                                <AttachEmailIcon sx={{ mt: "5px", marginRight: "3px" }} />
                                {/* <Typography variant='h5' >:</Typography> */}
                                <Link href="mailto:ahmadadelattia@gmail.com" className={styles.myEmail}>
                                    <Typography variant='h5' sx={{ color: "secondary.main" }} className={styles.linkText}> ahmadadelattia@gmail.com</Typography>
                                </Link>
                            </Box>
                            <Box display="flex" data-aos="fade-up"
                                data-aos-anchor-placement="top-bottom" >
                                <PhoneIphoneIcon sx={{ mt: "5px" }} />
                                {/* <Typography variant='h5' >:</Typography> */}
                                <Typography variant='h5' className={styles.linkText}> (+1) 469-596-4371</Typography>

                                {/* <Typography variant='h5' sx={{ color: "secondary.main" }} className={styles.linkText}>(+1) 469-596-4371</Typography> */}

                            </Box>
                            {/* <Box display="flex" sx={{ justifyContent: "start", mt: { sm: "10px", xs: "10px", md: "0px", lg: "0px" } }} alignItems="center" gap="20px" >
                                <Link href="mailto:nadasamir9334@gmail.com" ><Avatar sx={{ width: "30px", height: "30px", backgroundColor: "secondary.main", color: "white" }} className={styles.nadaavatar}><EmailIcon /></Avatar></Link>
                                <Link href="https://www.linkedin.com/in/nada-samir-441a58130/" ><Avatar sx={{ width: "30px", height: "30px", backgroundColor: "secondary.main", color: "white" }} className={styles.nadaavatar}><FiLinkedin /></Avatar></Link>
                                <Link href="https://github.com/Nada-orban" ><Avatar sx={{ width: "30px", height: "30px", backgroundColor: "secondary.main", color: "white" }} className={styles.nadaavatar}><FiGithub /></Avatar></Link>
                                <Link href="https://www.upwork.com/freelancers/~0158c861bae4be2e7b" ><Avatar sx={{ width: "30px", height: "30px", backgroundColor: "secondary.main", color: "white" }} className={styles.nadaavatar}><SiUpwork /></Avatar></Link>
                            </Box> */}
                            <form onSubmit={handleSubmit}  >
                                <Box mb="20px">
                                    <Box gap="5px" mb="10px" mt="30px" sx={{ display: { sm: 'grid', md: "flex" } }}>
                                        <TextField
                                            data-aos="fade-up"
                                            data-aos-anchor-placement="top-bottom"
                                            // sx={{ '& .css-14m6kzo-MuiInputBase-root-MuiFilledInput-root.Mui-focused': { backgroundColor: "neutral.white" } }}
                                            id="name"
                                            name="name"
                                            type="name"
                                            label="Name"
                                            variant="filled"
                                            color="secondary"
                                            style={{
                                                backgroundColor: "#055f6946", width: "100%"
                                            }}
                                            InputProps={{
                                                style: {
                                                    color: "white"
                                                }
                                            }}
                                            f
                                        />
                                        <ValidationError
                                            prefix="Name"
                                            field="name"
                                            errors={state.errors}
                                        />
                                        <TextField
                                            data-aos="fade-up"
                                            data-aos-anchor-placement="top-bottom"
                                            sx={{ mt: { xs: "10px", md: '0px' } }}
                                            id="email"
                                            name="email"
                                            type="email"
                                            label="Email"
                                            variant="filled"
                                            color="secondary"

                                            style={{
                                                backgroundColor: "#055f6946", width: "100%",
                                            }}
                                            InputProps={{
                                                style: {
                                                    color: "white"
                                                }
                                            }}



                                        />
                                        <ValidationError
                                            prefix="Email"
                                            field="email"
                                            errors={state.errors}
                                        />
                                    </Box>
                                    <Box mb="10px" data-aos="fade-up"
                                        data-aos-anchor-placement="top-bottom" >
                                        <TextField


                                            id="subject"
                                            name="subject"
                                            label="Subject"
                                            color="secondary"
                                            variant="filled"
                                            multiline


                                            style={{
                                                backgroundColor: "#055f6946", width: "100%"
                                            }}
                                            InputProps={{
                                                style: {
                                                    color: "white"
                                                }
                                            }}




                                        />
                                        <ValidationError
                                            prefix="Message"
                                            field="message"
                                            errors={state.errors}
                                        />


                                    </Box>

                                    <TextField
                                        data-aos="fade-up"
                                        data-aos-anchor-placement="top-bottom"
                                        id="message"
                                        name="message"
                                        label="Message"
                                        color="secondary"
                                        variant="filled"
                                        multiline
                                        rows={6}

                                        style={{
                                            backgroundColor: "#055f6946", width: "100%"
                                        }}
                                        InputProps={{
                                            style: {
                                                color: "white"
                                            }
                                        }}




                                    />
                                    <ValidationError
                                        prefix="Message"
                                        field="message"
                                        errors={state.errors}
                                    />
                                </Box>

                                <button className={styles.normalButton2} type="submit" data-aos="fade-right" >
                                    <div className={styles.normalButtonbg}></div>
                                    <Box display="flex" justifyContent="center" alignItems="center" >
                                        <p className={styles.normalButton2text}>Send</p>
                                        <EastIcon sx={{ ml: "30px", width: "50px", height: "30px" }} className={styles.normalButton2icon} />
                                    </Box>

                                </button>
                            </form>
                        </Grid>
                        <Grid item sm={12} md={6} xs={12} sx={{ display: { xs: "none", sm: "none", md: "block" } }}>
                            <Box className={styles.mapbox} >
                                <Box className={styles.maplayer}></Box>
                            </Box>
                            {/* <Image
                                src={mapphoto}
                                width={700}
                            /> */}

                        </Grid>


                    </Grid>



                </Box>

            </Container >
        </Box >
    )
}

export default Contact