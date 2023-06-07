import React from 'react'
import { Box, Tabs, Tab, Typography, LinkTab, Grid, Button, Container, Paper, List, ListItem, ListItemText, ListItemIcon, Avatar, Stack } from '@mui/material'
import styles from '../styles/Home.module.css'
import { ColorModeContext } from '../../public/theme'
import { styled, useTheme, alpha } from '@mui/material/styles';
import Link from 'next/link'
import Image from 'next/image';
import Nav from '../../Components/Nav'
import Particlesbackground from '../../Components/Particlesbackground'
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
import icassplogo from '../../public/assets/papers/icassp.png'
import Head from 'next/head'
import Mobilenavinpage from '../../Components/Mobilenavinpage';




function ICASSP2023() {
    const colorMode = React.useContext(ColorModeContext);
    const theme = useTheme();
    return (
        <>
            <Head>
                <title>Ahmed Adel Attia</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/logo.png" />
                <link rel="icon" href="%PUBLIC_URL%/logonada.png" />
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
                />
                <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet"></link>

            </Head>
            <Mobilenavinpage />

            <Box id="home" my="100px" overflow="hidden">
                <Particlesbackground />
                <Container >
                    <Stack irection="column" justifyContent="center" alignItems="center" spacing={2} mt="0px"
                        backgroundColor="rgba(245, 241, 241, 0.822) " borderRadius="10px" py="120px" border="4px solid white ">
                        <Box>
                            <Image
                                src={icassplogo}
                                width={200}
                                alt="conference photo"
                            />
                        </Box>
                        <Box >
                            <Link href="https://arxiv.org/abs/2210.15195" target="_blank" className={styles.outlink}> <Typography variant='h5' sx={{ color: "background.secondary" }}>Learn more about my paper</Typography></Link>
                            <Link href="http://www.ahmedadelattia.com/" target="_blank" className={styles.outlink}> <Typography variant='h5' sx={{ color: "background.secondary" }}>Learn more about about me</Typography></Link>
                        </Box>
                    </Stack>
                </Container>
            </Box>
        </>
    )
}

export default ICASSP2023
