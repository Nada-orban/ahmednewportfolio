import { Grid, Box, Typography, Container } from '@mui/material'
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


function Contact() {
    const colorMode = React.useContext(ColorModeContext);
    const theme = useTheme();
    const [state, handleSubmit] = useForm("xdovjjlp");
    return (
        <Box id="contact" py="100px" sx={{ backgroundColor: "background.blue" }}>
            <Container maxWidth="xlg" >
                <Box sx={{ px: { sm: "10px", md: "40px" } }}>
                    <Box display="flex" gap="20px">
                        <div className={styles.titlesection}>
                            <h1>
                                <span class={styles.a} data-aos="zoom-in" data-aos-delay="50" >C</span>
                                <span class={styles.a} data-aos="zoom-in" data-aos-delay="100">o</span>
                                <span class={styles.a} data-aos="zoom-in" data-aos-delay="200">n</span>
                                <span class={styles.a} data-aos="zoom-in" data-aos-delay="300">t</span>
                                <span class={styles.a} data-aos="zoom-in" data-aos-delay="400">a</span>
                                <span class={styles.a} data-aos="zoom-in" data-aos-delay="500">c</span>
                                <span class={styles.a} data-aos="zoom-in" data-aos-delay="600">t</span>

                            </h1>
                        </div>
                        <div className={styles.titlesection}>
                            <h1>
                                <span class={styles.a} data-aos="zoom-in" data-aos-delay="700">m</span>
                                <span class={styles.a} data-aos="zoom-in" data-aos-delay="800">e</span>
                            </h1>
                        </div>
                    </Box>


                    <Box display="flex" data-aos="fade-up"
                        data-aos-anchor-placement="top-bottom" data-aos-delay="900">
                        <AttachEmailIcon sx={{ mt: "5px", marginRight: "3px" }} />
                        {/* <Typography variant='h5' >:</Typography> */}
                        <Link href="mailto:ahmedfakhry805@gmail.com" className={styles.myEmail}>
                            <Typography variant='h5' sx={{ color: "secondary.main" }} className={styles.linkText}> ahmedfakhry805@gmail.com</Typography>
                        </Link>
                    </Box>
                    <Box display="flex" data-aos="fade-up"
                        data-aos-anchor-placement="top-bottom" data-aos-delay="1000">
                        <PhoneIphoneIcon sx={{ mt: "5px" }} />
                        {/* <Typography variant='h5' >:</Typography> */}

                        <Typography variant='h5' sx={{ color: "secondary.main" }} className={styles.linkText}>(+20) 10-9813-0059</Typography>

                    </Box>
                    <form onSubmit={handleSubmit}  >
                        <Grid container spacing={2} mt="20px">
                            <Grid item sm={12} md={6}>
                                <Box gap="5px" mb="10px" sx={{ display: { sm: 'grid', md: "flex" } }}>
                                    <TextField
                                        data-aos="fade-up"
                                        data-aos-anchor-placement="top-bottom" data-aos-delay="1100"
                                        // sx={{ '& .css-14m6kzo-MuiInputBase-root-MuiFilledInput-root.Mui-focused': { backgroundColor: "neutral.white" } }}
                                        id="name"
                                        name="name"
                                        type="name"
                                        label="Name"
                                        variant="filled"
                                        color="secondary"
                                        style={{
                                            backgroundColor: "#2B2B2B", width: "100%"
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
                                        data-aos-anchor-placement="top-bottom" data-aos-delay="1200"
                                        sx={{ mt: { xs: "10px", md: '0px' } }}
                                        id="email"
                                        name="email"
                                        type="email"
                                        label="Email"
                                        variant="filled"
                                        color="secondary"

                                        style={{
                                            backgroundColor: "#2B2B2B", width: "100%",
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
                                <Box mb="10px">
                                    <TextField
                                        data-aos="fade-up"
                                        data-aos-anchor-placement="top-bottom" data-aos-delay="1300"

                                        id="subject"
                                        name="subject"
                                        label="subject"
                                        color="secondary"
                                        variant="filled"
                                        multiline


                                        style={{
                                            backgroundColor: "#2B2B2B", width: "100%"
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
                                    data-aos-anchor-placement="top-bottom" data-aos-delay="1400"

                                    id="message"
                                    name="message"
                                    label="Message"
                                    color="secondary"
                                    variant="filled"
                                    multiline
                                    rows={6}

                                    style={{
                                        backgroundColor: "#2B2B2B", width: "100%"
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



                            </Grid>
                            <Grid item sm={12} md={6}>

                            </Grid>


                        </Grid>
                        <button className={styles.normalButton2} type="submit" >
                            <div className={styles.normalButtonbg}></div>
                            <Box display="flex" justifyContent="center" alignItems="center" >
                                <p className={styles.normalButton2text}>Send</p>
                                <EastIcon sx={{ ml: "30px", width: "50px", height: "30px" }} className={styles.normalButton2icon} />
                            </Box>

                        </button>
                    </form>

                </Box>

            </Container >
        </Box >
    )
}

export default Contact