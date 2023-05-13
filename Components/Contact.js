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

function Contact() {
    const colorMode = React.useContext(ColorModeContext);
    const theme = useTheme();
    const [state, handleSubmit] = useForm("mjvdegqz");
    return (
        <Box id="about" py="100px" sx={{ backgroundColor: "background.blue" }}>
            <Container maxWidth="xlg" >
                <Box sx={{ px: { sm: "10px", md: "40px" } }}>
                    <Typography sx={{ color: "secondary.main", fontWeight: "bold", mb: 3 }} className={styles.titlesection}>Contact me</Typography>
                    <Box display="flex">
                        <AttachEmailIcon sx={{ mt: "5px", marginRight: "3px" }} />
                        {/* <Typography variant='h5' >:</Typography> */}
                        <Link href="mailto:ahmedfakhry805@gmail.com"  >
                            <Typography variant='h5' sx={{ color: "secondary.main" }} className={styles.linkText}> ahmedfakhry805@gmail.com</Typography>
                        </Link>
                    </Box>
                    <Box display="flex" >
                        <PhoneIphoneIcon sx={{ mt: "5px" }} />
                        {/* <Typography variant='h5' >:</Typography> */}
                        <Link href=""  >
                            <Typography variant='h5' sx={{ color: "secondary.main" }} className={styles.linkText}>(+20) 10-9813-0059</Typography>
                        </Link>
                    </Box>
                    <Grid container spacing={2} mt="20px">
                        <Grid item sm={12} md={6}>
                            <Box display="flex" gap="10px" mb="10px">
                                <TextField
                                    // sx={{ '& .css-14m6kzo-MuiInputBase-root-MuiFilledInput-root.Mui-focused': { backgroundColor: "neutral.white" } }}
                                    id="name"
                                    name="name"
                                    type="name"
                                    label="Name"
                                    variant="filled"
                                    color="secondary"
                                    style={{
                                        backgroundColor: "#2B2B2B", width: "300px"
                                    }}
                                    InputProps={{
                                        style: {
                                            color: "black"
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

                                    id="email"
                                    name="email"
                                    type="email"
                                    label="Email"
                                    variant="filled"
                                    color="secondary"

                                    style={{
                                        backgroundColor: "#2B2B2B", width: "300px"
                                    }}
                                    InputProps={{
                                        style: {
                                            color: "black"
                                        }
                                    }}



                                />
                                <ValidationError
                                    prefix="Email"
                                    field="email"
                                    errors={state.errors}
                                />
                            </Box>

                            <TextField

                                id="message"
                                name="message"
                                label="Message"
                                color="secondary"
                                variant="filled"
                                multiline
                                rows={6}

                                style={{
                                    backgroundColor: "#2B2B2B", width: "610px"
                                }}
                                InputProps={{
                                    style: {
                                        color: "black"
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
                </Box>
            </Container >
        </Box >
    )
}

export default Contact