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
import { SiUpwork } from 'react-icons/si'
import Mobilenav from './Mobilenav';


const NavLinks = styled(Link)`
  color: #0F6973;
  &.active {
    color: #F7AE9D;
    
  }
  
`;

function Nav() {
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [navbar, setNavbar] = useState(false)
    const [hoverbutton, setHoverbutton] = useState(false)
    const [navname, setNavname] = useState(false)

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
                setNavbar(true);

            } else {
                setNavbar(false);

            }
        }
        window.addEventListener('scroll', changeBackground);


    }, [])

    return (
        <>
            <Box sx={{ display: { xs: "none", sm: "none", md: "block" } }}>

                <AppBar
                    variant="permanent"
                    position="fixed"
                    sx={{
                        display: "flex", backgroundColor: "background.secondary",
                    }}
                    className={navbar ? Styles.Appbaractive : Styles.Appbar}

                >
                    <Container maxWidth="xlg">
                        <Toolbar >
                            <Box display='flex' flexGrow={1} alignItems="center" justifyContent="space-between" sx={{ px: { sm: "10px", md: "20px" } }}>

                                <Typography variant="h5" noWrap sx={{ flexGrow: 1, color: "text.primary", fontWeight: "bold", }} >
                                    Ahmed Adel Attia
                                </Typography>
                                <Box onClick={handleDrawerToggle} sx={{ display: { md: "none", sm: "flex" }, cursor: "pointer", position: "relative" }} className={hoverbutton ? Styles.hoverbuttonactive : Styles.hoverbutton}>
                                    <Box className={mobileOpen ? Styles.activeHamburger : Styles.hamburber} position="absolute"></Box>
                                </Box>
                                <Box sx={{ display: { xs: "none", sm: 'none', md: 'block', } }}>
                                    <List sx={{ display: "flex" }}>
                                        <ListItem>
                                            <NavLinks to="about" spy={true} smooth={true} offset={-50} duration={500} className={Styles.navlink}  >

                                                <Typography variant="h6">About</Typography>
                                                {/* <ListItemText primary="About" /> */}

                                            </NavLinks>
                                        </ListItem>

                                        <ListItem>
                                            <NavLinks to="skills" spy={true} smooth={true} offset={-50} duration={500} className={Styles.navlink} >

                                                <Typography variant="h6">Skills</Typography>
                                                {/* <ListItemText primary="Skills" /> */}


                                            </NavLinks>
                                        </ListItem>

                                        <ListItem>
                                            <NavLinks to="projects" spy={true} smooth={true} offset={-50} duration={500} className={Styles.navlink}  >

                                                <Typography variant="h6">Projects</Typography>
                                                {/* <ListItemText primary="Projects" /> */}

                                            </NavLinks>
                                        </ListItem>

                                        <ListItem>
                                            <NavLinks to="papers" spy={true} smooth={true} offset={-50} duration={500} className={Styles.navlink} >

                                                <Typography variant="h6">Papers</Typography>
                                                {/* <ListItemText primary="Papers" /> */}

                                            </NavLinks>
                                        </ListItem>

                                        <ListItem>
                                            <NavLinks to="experience" spy={true} smooth={true} offset={-50} duration={500} className={Styles.navlink} >

                                                <Typography variant="h6">Experience</Typography>
                                                {/* <ListItemText primary="Timeline" /> */}

                                            </NavLinks>
                                        </ListItem>


                                        <ListItem>
                                            <NavLinks to="contact" spy={true} smooth={true} offset={-50} duration={500} className={Styles.navlink} >

                                                <Typography variant="h6">Contact</Typography>
                                                {/* <ListItemText primary="Contact" /> */}



                                            </NavLinks>
                                        </ListItem>

                                        {/* <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
                                {theme.palette.mode === 'dark' ? <LightModeIcon sx={{ color: "secondary.main" }} /> : <NightlightRoundIcon sx={{ color: "white" }} />}
                            </IconButton> */}
                                    </List>
                                </Box>
                            </Box>
                        </Toolbar>
                        <Mobilenav />

                        {/* <Box className={mobileOpen ? Styles.bigmenuBoxactive : Styles.bigmenuBox} backgroundColor="background.secondary" textAlign="end" mt="4px" BackdropProps={{ invisible: false }} sx={{ sm: "block", md: "none", lg: "none" }} >
                        {mobileOpen && (
                            <Box>
                                <List  >
                                    <ListItem>
                                        <NavLinks to="about" spy={true} smooth={true} offset={-50} duration={500} className={Styles.mobilenavlink}  >

                                            <Typography className={Styles.mobilenavlink}>ABOUT</Typography>
                                        </NavLinks>
                                    </ListItem>
                                    <ListItem>
                                        <NavLinks to="skills" spy={true} smooth={true} offset={-50} duration={500} >

                                            <Typography className={Styles.mobilenavlink}>SKILLS</Typography>
                                        </NavLinks>
                                    </ListItem>
                                    <ListItem>
                                        <NavLinks to="projects" spy={true} smooth={true} offset={-50} duration={500}  >

                                            <Typography className={Styles.mobilenavlink}>PROJECTS</Typography>
                                        </NavLinks>
                                    </ListItem>
                                    <ListItem>
                                        <NavLinks to="papers" spy={true} smooth={true} offset={-50} duration={500}  >

                                            <Typography className={Styles.mobilenavlink}>PAPERS</Typography>
                                        </NavLinks>
                                    </ListItem>
                                    <ListItem>
                                        <NavLinks to="experience" spy={true} smooth={true} offset={-50} duration={500}   >

                                            <Typography className={Styles.mobilenavlink}>TIMELINE</Typography>
                                        </NavLinks>
                                    </ListItem>
                                    <ListItem>
                                        <NavLinks to="contact" spy={true} smooth={true} offset={-50} duration={500}  >

                                            <Typography className={Styles.mobilenavlink}>CONTACT</Typography>
                                        </NavLinks>
                                    </ListItem>



                                </List>
                                <Box textAlign="start" mt="20px" paddingLeft="20px">
                                    <Typography variant='h5'>Social</Typography>
                                    <Box display="flex" sx={{ justifyContent: "start", mt: { sm: "10px", xs: "10px", md: "0px", lg: "0px" }, mb: "30px" }} alignItems="center" gap="20px" >

                                        <a href="https://www.linkedin.com/in/nada-samir-441a58130/" ><Avatar variant="rounded" sx={{ width: "40px", height: "40px", backgroundColor: "secondary.main", color: "white" }} ><FiLinkedin /></Avatar></a>
                                        <a href="https://github.com/Nada-orban" ><Avatar variant="rounded" sx={{ width: "40px", height: "40px", backgroundColor: "secondary.main", color: "white" }} ><FiGithub /></Avatar></a>

                                    </Box>


                                </Box>
                                <Box textAlign="start" mt="20px" paddingLeft="20px">
                                    <Typography variant='h5'>Email</Typography>
                                    <a href="mailto:ahmadadelattia@gmail.com" className={Styles.emailstyle}>ahmadadelattia@gmail.com</a>
                                </Box>
                            </Box>
                        )}

                    </Box> */}
                    </Container>
                </AppBar>

            </Box>
            <Mobilenav />
        </>

    )
}

export default Nav