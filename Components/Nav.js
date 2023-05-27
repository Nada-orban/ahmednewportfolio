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


const NavLinks = styled(Link)`
  color: white;
  &.active {
    color: #F7AE9D;
    
  }
  
`;

function Nav() {
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [navbar, setNavbar] = useState(false)

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
        <Box>

            <AppBar
                variant="permanent"
                position="fixed"
                sx={{
                    display: "flex", backgroundColor: "background.secondary",
                }}
                className={navbar ? Styles.Appbaractive : Styles.Appbar}

            >
                <Container maxWidth="xlg">
                    <Toolbar>
                        <Box display='flex' flexGrow={1} alignItems="center" justifyContent="space-between" sx={{ px: { sm: "10px", md: "40px" } }}>

                            <Typography variant="h5" noWrap sx={{ flexGrow: 1, color: "text.primary", fontWeight: "bold", fontStyle: "italic" }} >
                                Ahmed Adel Attia
                            </Typography>
                            <Box onClick={handleDrawerToggle} sx={{ display: { md: "none", sm: "flex" }, cursor: "pointer" }}>
                                <Box className={mobileOpen ? Styles.activeHamburger : Styles.hamburber}></Box>
                            </Box>
                            <Box sx={{ display: { xs: "none", sm: 'none', md: 'block', } }}>
                                <List sx={{ display: "flex" }}>
                                    <ListItem>
                                        <NavLinks to="about" spy={true} smooth={true} offset={-50} duration={500} className={Styles.navlink}  >
                                            <ListItemButton >
                                                <Typography variant="h6">About</Typography>
                                                {/* <ListItemText primary="About" /> */}
                                            </ListItemButton>
                                        </NavLinks>
                                    </ListItem>

                                    <ListItem>
                                        <NavLinks to="skills" spy={true} smooth={true} offset={-50} duration={500} className={Styles.navlink} >
                                            <ListItemButton >
                                                <Typography variant="h6">Skills</Typography>
                                            </ListItemButton>
                                        </NavLinks>
                                    </ListItem>

                                    <ListItem>
                                        <NavLinks to="projects" spy={true} smooth={true} offset={-50} duration={500} className={Styles.navlink}  >
                                            <ListItemButton >
                                                <Typography variant="h6">Projects</Typography>
                                                {/* <ListItemText primary="Projects" /> */}
                                            </ListItemButton>
                                        </NavLinks>
                                    </ListItem>

                                    <ListItem>
                                        <NavLinks to="papers" spy={true} smooth={true} offset={-50} duration={500} className={Styles.navlink} >
                                            <ListItemButton >
                                                <Typography variant="h6">Papers</Typography>
                                                {/* <ListItemText primary="Projects" /> */}
                                            </ListItemButton>
                                        </NavLinks>
                                    </ListItem>

                                    <ListItem>
                                        <NavLinks to="experience" spy={true} smooth={true} offset={-50} duration={500} className={Styles.navlink} >
                                            <ListItemButton >
                                                <Typography variant="h6">Timeline</Typography>
                                                {/* <ListItemText primary="Projects" /> */}
                                            </ListItemButton>
                                        </NavLinks>
                                    </ListItem>


                                    <ListItem>
                                        <NavLinks to="contact" spy={true} smooth={true} offset={-50} duration={500} className={Styles.navlink} >
                                            <ListItemButton >
                                                <Typography variant="h6">Contact</Typography>

                                            </ListItemButton>
                                        </NavLinks>
                                    </ListItem>

                                    {/* <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
                                {theme.palette.mode === 'dark' ? <LightModeIcon sx={{ color: "secondary.main" }} /> : <NightlightRoundIcon sx={{ color: "white" }} />}
                            </IconButton> */}
                                </List>
                            </Box>
                        </Box>
                    </Toolbar>

                    <Box className={mobileOpen ? Styles.menuBoxactive : Styles.menuBox} backgroundColor="background.secondary" textAlign="end" mt="55px" BackdropProps={{ invisible: false }} >
                        {mobileOpen && (<List  >
                            <ListItem>
                                <NavLinks to="about" spy={true} smooth={true} offset={-50} duration={500} className={Styles.navlink} >
                                    <ListItemText primary="ABOUT" />
                                </NavLinks>
                            </ListItem>
                            <ListItem>
                                <NavLinks to="skills" spy={true} smooth={true} offset={-50} duration={500} className={Styles.navlink} >
                                    <ListItemText primary="SKILLS" />
                                </NavLinks>
                            </ListItem>
                            <ListItem>
                                <NavLinks to="projects" spy={true} smooth={true} offset={-50} duration={500} className={Styles.navlink} >
                                    <ListItemText primary="PROJECTS" />
                                </NavLinks>
                            </ListItem>
                            <ListItem>
                                <NavLinks to="papers" spy={true} smooth={true} offset={-50} duration={500} className={Styles.navlink} >
                                    <ListItemText primary="PAPERS" />
                                </NavLinks>
                            </ListItem>
                            <ListItem>
                                <NavLinks to="experience" spy={true} smooth={true} offset={-50} duration={500} className={Styles.navlink} >
                                    <ListItemText primary="TIMELINE" />
                                </NavLinks>
                            </ListItem>
                            <ListItem>
                                <NavLinks to="contact" spy={true} smooth={true} offset={-50} duration={500} className={Styles.navlink} >
                                    <ListItemText primary="CONTACT" />
                                </NavLinks>
                            </ListItem>
                            {/* <ListItem>
                            < AiOutlineFilePdf style={{ color: "white", marginRight: "5px" }} />
                            <a href="https://drive.google.com/file/d/104BElFusWYq6HvrSFBAB7fCKLfOo-3zg/view" target="_blank">
                                <ListItemText primary="RESUME" />
                            </a>
                        </ListItem> */}


                        </List>
                        )}

                    </Box>
                </Container>
            </AppBar>

        </Box>
    )
}

export default Nav