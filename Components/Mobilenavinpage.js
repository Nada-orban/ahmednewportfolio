
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { AppBar, Avatar, Container } from '@mui/material';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Styles from '../src/styles/Nav.module.css'
import { Link } from 'react-scroll'
import HomeIcon from '@mui/icons-material/Home';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import robotjson from '../public/assets/backgrounds/wave.json'
import Lottie from 'lottie-react'
import { ColorModeContext } from '../public/theme'
import { styled, useTheme, alpha } from '@mui/material/styles';
import Image from 'next/image';
import logo from '../public/assets/backgrounds/logo2.png'
import { AiOutlineFilePdf } from 'react-icons/ai'
import { FiFacebook, FiLinkedin, FiGithub } from 'react-icons/fi'
import { SiUpwork } from 'react-icons'

const NavLinks = styled(Link)`
  color: white;
  &.active {
    color: #0F6973;
    
  }
  
`;

function Mobilenavinpage() {
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [navbar, setNavbar] = useState(false)
    const [hoverbutton, setHoverbutton] = useState(false)
    const [navname, setNavname] = useState(false)
    // const [close, setClose] = useState(false)

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const [open, setOpen] = useState(false);
    const colorMode = React.useContext(ColorModeContext);
    const theme = useTheme();


    //background changing function
    useEffect(() => {
        const changeBackground = () => {
            if (window.scrollY >= 80) {
                setHoverbutton(true);
                setNavname(true)
            } else {
                setHoverbutton(false);
                setNavname(false)
            }
        }
        window.addEventListener('scroll', changeBackground);


    }, [])

    return (
        <Box >

            <AppBar
                variant="permanent"
                position="fixed"
                sx={{
                    display: "flex", backgroundColor: "transparent",
                }}


            >

                <Toolbar>
                    <Box display='flex' flexGrow={1} alignItems="center" justifyContent="space-between" sx={{ px: { xs: "0px", sm: "0px", md: "40px" } }}>

                        <Typography variant="h5" noWrap sx={{ flexGrow: 1, color: "background.secondary", fontWeight: "bold", }} className={navname ? Styles.navnameactive : Styles.navname} >
                            Ahmed Adel Attia
                        </Typography>
                        <Box position="fixed" sx={{ top: "0px ", right: "20px", }} >
                            <Box onClick={handleDrawerToggle} sx={{ cursor: "pointer", position: "relative" }} className={hoverbutton ? Styles.hoverbuttonactive : Styles.hoverbutton}>
                                <Box className={mobileOpen ? Styles.activeHamburger : Styles.hamburber} position="absolute"></Box>
                                {/* <Box className={mobileOpen ? Styles.navbackgroundactive : Styles.navbackground}></Box> */}
                                <Box className={mobileOpen ? Styles.bigmenuBoxactive : Styles.bigmenuBox} backgroundColor="secondary.main" textAlign="end" BackdropProps={{ invisible: false }} sx={{ sm: "block", md: "none", lg: "none" }} >
                                    {mobileOpen && (
                                        <Box>
                                            <List  >
                                                <ListItem>
                                                    <NavLinks href="https://www.ahmedadelattia.com/#about" onClick={handleDrawerToggle} data-aos="fade-up"
                                                        data-aos-delay="200">

                                                        <Typography className={Styles.mobilenavlink} >ABOUT</Typography>
                                                    </NavLinks>
                                                </ListItem>
                                                <ListItem>
                                                    <NavLinks href="https://www.ahmedadelattia.com/#skills" onClick={handleDrawerToggle} data-aos="fade-up"
                                                        data-aos-delay="200">

                                                        <Typography className={Styles.mobilenavlink}>SKILLS</Typography>
                                                    </NavLinks>
                                                </ListItem>
                                                <ListItem>
                                                    <NavLinks href="https://www.ahmedadelattia.com/#projects" onClick={handleDrawerToggle} data-aos="fade-up"
                                                        data-aos-delay="200">

                                                        <Typography className={Styles.mobilenavlink}>PROJECTS</Typography>
                                                    </NavLinks>
                                                </ListItem>
                                                <ListItem>
                                                    <NavLinks href="https://www.ahmedadelattia.com/#papers" onClick={handleDrawerToggle} data-aos="fade-up"
                                                        data-aos-delay="200">

                                                        <Typography className={Styles.mobilenavlink}>PAPERS</Typography>
                                                    </NavLinks>
                                                </ListItem>
                                                <ListItem>
                                                    <NavLinks href="https://www.ahmedadelattia.com/#experience" onClick={handleDrawerToggle} data-aos="fade-up"
                                                        data-aos-delay="200">

                                                        <Typography className={Styles.mobilenavlink}>TIMELINE</Typography>
                                                    </NavLinks>
                                                </ListItem>
                                                <ListItem>
                                                    <NavLinks href="https://www.ahmedadelattia.com/#contact" onClick={handleDrawerToggle} data-aos="fade-up"
                                                        data-aos-delay="200">

                                                        <Typography className={Styles.mobilenavlink}>CONTACT</Typography>
                                                    </NavLinks>
                                                </ListItem>



                                            </List>
                                            <Box textAlign="start" mt="20px" paddingLeft="20px" data-aos="fade-up"
                                                data-aos-delay="200">
                                                <Typography sx={{ color: "background.secondary", fontSize: "15px" }}>Social</Typography>
                                                <Box display="flex" sx={{ justifyContent: "start", mt: { sm: "10px", xs: "10px", md: "0px", lg: "0px" }, mb: "30px" }} alignItems="center" gap="20px" >

                                                    <a href="https://www.linkedin.com/in/nada-samir-441a58130/" ><Avatar sx={{ width: "25px", height: "25px", backgroundColor: "white", color: "background.secondary" }} ><FiLinkedin /></Avatar></a>
                                                    <a href="https://github.com/Nada-orban" ><Avatar sx={{ width: "25px", height: "25px", backgroundColor: "white", color: "background.secondary" }} ><FiGithub /></Avatar></a>
                                                    {/* <a href="https://www.upwork.com/freelancers/~0158c861bae4be2e7b" ><Avatar variant="rounded" sx={{ width: "50px", height: "50px", backgroundColor: "secondary.main", color: "white" }} ><SiUpwork /></Avatar></a> */}
                                                </Box>


                                            </Box>
                                            <Box textAlign="start" mt="20px" paddingLeft="20px" data-aos="fade-up"
                                                data-aos-delay="200">
                                                <Typography sx={{ color: "background.secondary", fontSize: "15px" }}>Email</Typography>
                                                <a href="mailto:ahmadadelattia@gmail.com" className={Styles.emailstyle}>ahmadadelattia@gmail.com</a>
                                            </Box>
                                            <Box textAlign="start" mt="20px" paddingLeft="20px" data-aos="fade-up"
                                                data-aos-delay="200">
                                                <Typography sx={{ color: "background.secondary", fontSize: "15px" }}>Phone</Typography>
                                                <a href="mailto:ahmadadelattia@gmail.com" className={Styles.emailstyle}> 469-596-4371</a>
                                            </Box>
                                        </Box>
                                    )}

                                </Box>

                            </Box></Box>

                    </Box>
                </Toolbar>




            </AppBar>

        </Box>
    )
}

export default Mobilenavinpage