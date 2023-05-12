import { Grid, Box, Typography, Container, Divider } from '@mui/material'
import React from 'react'
import styles from '../src/styles/Home.module.css'
import Image from 'next/image'
import googlephoto from '../public/assets/timeline/Google__G__Logo.svg.webp'

function Experience() {
    return (
        <Box id="experience" py="200px">
            <Container maxWidth="xlg" >
                <Box px="40px">
                    <Typography variant='h2' sx={{ color: "secondary.main", fontWeight: "bold", mb: 3 }}>TimeLine</Typography>
                    <Box gap="10px" mt="50px">
                        <Box display="flex" alignItems="center" gap="10px" mt="50px">
                            <Box border="2px solid gray" borderRadius="50%" width="200px" height="200px" padding="20px">
                                <Image
                                    src={googlephoto}
                                    width={150}

                                    alt="Picture of the author"
                                />

                            </Box>
                            <Divider sx={{ width: "200px", height: "3px", backgroundColor: "gray", }} />
                            <Box border="2px solid gray" borderRadius="50%" width="200px" height="200px" padding="20px">
                                <Image
                                    src={googlephoto}
                                    width={150}

                                    alt="Picture of the author"
                                />

                            </Box>
                            <Divider sx={{ width: "200px", height: "3px", backgroundColor: "gray", }} />
                            <Box border="2px solid gray" borderRadius="50%" width="200px" height="200px" padding="20px">
                                <Image
                                    src={googlephoto}
                                    width={150}

                                    alt="Picture of the author"
                                />

                            </Box>
                            <Divider sx={{ width: "200px", height: "3px", backgroundColor: "gray", }} />
                            <Box border="2px solid gray" borderRadius="50%" width="200px" height="200px" padding="20px">
                                <Image
                                    src={googlephoto}
                                    width={150}

                                    alt="Picture of the author"
                                />

                            </Box>

                        </Box>

                        <Box display="flex" gap="100px">

                            <Box mt="20px">
                                <Typography variant='subtitle1' sx={{ color: "text.secondary" }}>Nov 2022 ‐ Now</Typography>
                                <Typography variant='h5' sx={{ fontWeight: "bold" }}>Machine Learning  Developer</Typography>
                                <Typography variant="h4" component="span" sx={{ color: "secondary.main", fontWeight: "bold" }}>
                                    OpenAI
                                </Typography>
                                <Typography variant='h6' sx={{ fontWeight: "bold" }}>US - Remote</Typography>
                                <Typography variant='h6'>
                                    <ul>
                                        <li>Working on the tether project.</li>
                                        <li>Helping reinforcement learning models to <br /> fine‐tune and enhance chatgpt performance.</li>
                                    </ul></Typography>
                            </Box>
                            <Box mt="20px">
                                <Typography variant='subtitle1' sx={{ color: "text.secondary" }}>Nov 2022 ‐ Now</Typography>
                                <Typography variant='h5' sx={{ fontWeight: "bold" }}>Machine Learning Developer</Typography>
                                <Typography variant="h4" component="span" sx={{ color: "secondary.main", fontWeight: "bold" }}>
                                    OpenAI
                                </Typography>
                                <Typography variant='h6' sx={{ fontWeight: "bold" }}>US - Remote</Typography>
                                <Typography variant='h6'>
                                    <ul>
                                        <li>Working on the tether project.</li>
                                        <li>Helping reinforcement learning models to <br /> fine‐tune and enhance chatgpt performance.</li>
                                    </ul></Typography>
                            </Box>
                            <Box mt="20px">
                                <Typography variant='subtitle1' sx={{ color: "text.secondary" }}>Nov 2022 ‐ Now</Typography>
                                <Typography variant='h5' sx={{ fontWeight: "bold" }}>Machine Learning Developer</Typography>
                                <Typography variant="h4" component="span" sx={{ color: "secondary.main", fontWeight: "bold" }}>
                                    OpenAI
                                </Typography>
                                <Typography variant='h6' sx={{ fontWeight: "bold" }}>US - Remote</Typography>
                                <Typography variant='h6'>
                                    <ul>
                                        <li>Working on the tether project.</li>
                                        <li>Helping reinforcement learning models to <br /> fine‐tune and enhance chatgpt performance.</li>
                                    </ul></Typography>
                            </Box>
                            <Box mt="20px">
                                <Typography variant='subtitle1' sx={{ color: "text.secondary" }}>Nov 2022 ‐ Now</Typography>
                                <Typography variant='h5' sx={{ fontWeight: "bold" }}>Machine Learning Developer</Typography>
                                <Typography variant="h4" component="span" sx={{ color: "secondary.main", fontWeight: "bold" }}>
                                    OpenAI
                                </Typography>
                                <Typography variant='h6' sx={{ fontWeight: "bold" }}>US - Remote</Typography>
                                <Typography variant='h6'>
                                    <ul>
                                        <li>Working on the tether project.</li>
                                        <li>Helping reinforcement learning models to <br /> fine‐tune and enhance chatgpt performance.</li>
                                    </ul></Typography>
                            </Box>
                        </Box>


                    </Box>

                </Box>
            </Container>

        </Box>
    )
}

export default Experience