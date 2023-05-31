import React from 'react'
import { Box, Tabs, Tab, Typography, LinkTab, Grid, Button, Container, Paper, List, ListItem, ListItemText, ListItemIcon, Avatar, Divider } from '@mui/material'
import styles from '../src/styles/Home.module.css'
import { ColorModeContext } from '../public/theme'
import { styled, useTheme, alpha } from '@mui/material/styles';
import { FiFacebook, FiLinkedin, FiGithub } from 'react-icons/fi'
import { SiUpwork } from 'react-icons/si'
import EmailIcon from '@mui/icons-material/Email';
import Link from 'next/link'

function Footer() {
    const colorMode = React.useContext(ColorModeContext);
    const theme = useTheme();
    return (
        <>
            <Divider sx={{ backgroundColor: "secondary.main", }} />
            <Box id="footer" >
                <Container maxWidth="xlg">
                    <Box sx={{ px: { sm: "10px", md: "40px" } }}>
                        <Grid container spacing={4} sx={{ my: "2px", padding: "15px" }}>

                            <Grid xs={12} md={6}>
                                <Typography variant='h6' sx={{ textAlign: { xs: "center", sm: "center", md: "start", lg: "start" } }}>Copyright ©<a href="https://nadasamir.vercel.app/" target="_blank" className={styles.portfoliolink}> Nada Samir</a> 2023</Typography>
                            </Grid>
                            <Grid xs={12} md={6} >
                                <Box display="flex" sx={{ justifyContent: { xs: "center", sm: "center", md: "end", lg: "end" }, mt: { sm: "10px", xs: "10px", md: "0px", lg: "0px" } }} alignItems="center" gap="20px" >
                                    <Link href="mailto:nadasamir9334@gmail.com" target="_blank"><Avatar sx={{ width: "30px", height: "30px", backgroundColor: "secondary.main", color: "white" }} className={styles.nadaavatar}><EmailIcon /></Avatar></Link>
                                    <Link href="https://www.linkedin.com/in/nada-samir-441a58130/" target="_blank"><Avatar sx={{ width: "30px", height: "30px", backgroundColor: "secondary.main", color: "white" }} className={styles.nadaavatar}><FiLinkedin /></Avatar></Link>
                                    <Link href="https://github.com/Nada-orban" target="_blank"><Avatar sx={{ width: "30px", height: "30px", backgroundColor: "secondary.main", color: "white" }} className={styles.nadaavatar}><FiGithub /></Avatar></Link>
                                    <Link href="https://www.upwork.com/freelancers/~0158c861bae4be2e7b" target="_blank"><Avatar sx={{ width: "30px", height: "30px", backgroundColor: "secondary.main", color: "white" }} className={styles.nadaavatar}><SiUpwork /></Avatar></Link>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                    {/* <Grid container spacing={4} sx={{ my: "0px", padding: "10px" }}>


                <Grid xs={12} md={6}>
                    <Box display="flex" justifyContent="center" alignItems="center" gap="20px" >
                        <Link href="" ><Avatar sx={{ width: "30px", height: "30px", backgroundColor: "background.secondary", }}><FiFacebook /></Avatar></Link>
                        <Link href="" ><Avatar sx={{ width: "30px", height: "30px", backgroundColor: "background.secondary", }}><FiLinkedin /></Avatar></Link>
                        <Link href="" ><Avatar sx={{ width: "30px", height: "30px", backgroundColor: "background.secondary", }}><FiGithub /></Avatar></Link>
                    </Box>
                </Grid>
                <Grid xs={12} md={6}>
                    <Typography variant='h6' sx={{ textAlign: "center", color: "#616161", fontSize: "15px" }}>Mada with <a href='' className={styles.mylink}>Nada Samir </a> </Typography>
                </Grid>
            </Grid> */}



                </Container>

            </Box >
        </>
    )
}

export default Footer
