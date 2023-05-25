import React, { useState } from 'react';
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


const drawerWidth = 130;
const NavLinks = styled(Link)`
  color: white;
  &.active {
    color: #F7AE9D;
    
  }
  
`;

function ResponsiveDrawer() {
    // const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const [open, setOpen] = useState(false);
    const colorMode = React.useContext(ColorModeContext);
    const theme = useTheme();



    const drawer = (
        <Box sx={{
            backgroundColor: "background.secondary", height: "100vh", boxShadow: "10px 0 5px -2px #888"
        }}>
            <Toolbar />
            <Box sx={{ mb: "50%" }}>
                <Image
                    src={logo}
                    width={100}
                    // height={500}
                    alt="Picture of the author"
                />
                {/* <Lottie animationData={robotjson} /> */}
            </Box>


            <Divider />
            <List sx={{ textAlign: "center", margin: "auto", }}>

                <ListItem>
                    <NavLinks to="about" spy={true} smooth={true} offset={-50} duration={500} className={Styles.navlink}  >
                        <ListItemButton >
                            <Typography variant="h6">About</Typography>
                            {/* <ListItemText primary="About" /> */}
                        </ListItemButton>
                    </NavLinks>
                </ListItem>
                <Divider />
                <ListItem>
                    <NavLinks to="skills" spy={true} smooth={true} offset={-50} duration={500} className={Styles.navlink} >
                        <ListItemButton >
                            <Typography variant="h6">Skills</Typography>
                        </ListItemButton>
                    </NavLinks>
                </ListItem>
                <Divider />
                <ListItem>
                    <NavLinks to="projects" spy={true} smooth={true} offset={-50} duration={500} className={Styles.navlink} >
                        <ListItemButton >
                            <Typography variant="h6">Projects</Typography>
                            {/* <ListItemText primary="Projects" /> */}
                        </ListItemButton>
                    </NavLinks>
                </ListItem>
                <Divider />
                <ListItem>
                    <NavLinks to="papers" spy={true} smooth={true} offset={-50} duration={500} className={Styles.navlink} >
                        <ListItemButton >
                            <Typography variant="h6">Papers</Typography>
                            {/* <ListItemText primary="Projects" /> */}
                        </ListItemButton>
                    </NavLinks>
                </ListItem>
                <Divider />
                <ListItem>
                    <NavLinks to="experience" spy={true} smooth={true} offset={-50} duration={500} className={Styles.navlink} >
                        <ListItemButton >
                            <Typography variant="h6">Timeline</Typography>
                            {/* <ListItemText primary="Projects" /> */}
                        </ListItemButton>
                    </NavLinks>
                </ListItem>
                <Divider />

                <ListItem>
                    <NavLinks to="contact" spy={true} smooth={true} offset={-50} duration={500} className={Styles.navlink} >
                        <ListItemButton >
                            <Typography variant="h6">Contact</Typography>

                        </ListItemButton>
                    </NavLinks>
                </ListItem>
                <Divider />
            </List>
            <Box gap="10px" mt="0px" sx={{ display: "flex", justifyContent: "center" }}>

                <a href='https://github.com/ahmedadelattia' data-aos="fade-left" target="_blank">
                    <GitHubIcon sx={{ color: "neutral.lightgray" }} className={Styles.smallicon} />
                </a>
                <a href='www.linkedin.com/in/ahmedadelattia' data-aos="fade-left" data-aos-delay="200" target="_blank">

                    <LinkedInIcon sx={{ color: "neutral.lightgray" }} className={Styles.smallicon} />
                </a>

                <a href='mailto:ahmadadelattia@gmail.com' data-aos="fade-left" data-aos-delay="800" target="_blank">
                    <EmailIcon sx={{ color: "neutral.lightgray" }} className={Styles.smallicon} />
                </a>

            </Box>


        </Box >
    );


    // const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box >

            <AppBar
                position="fixed"
                sx={{
                    display: { md: "none", sm: "flex" }, backgroundColor: "background.secondary"
                }}
            >
                <Toolbar>

                    <Typography variant="h6" noWrap sx={{ flexGrow: 1, color: "#FAF3E8" }} component="div">
                        Ahmed Adel Attia
                    </Typography>
                    <Box onClick={handleDrawerToggle} sx={{ cursor: "pointer" }}>
                        <Box className={mobileOpen ? Styles.activeHamburger : Styles.hamburber}></Box>
                    </Box>
                </Toolbar>

                <Box className={mobileOpen ? Styles.menuBoxactive : Styles.menuBox} backgroundColor="background.secondary" textAlign="end" mt="55px" BackdropProps={{ invisible: false }} >
                    {mobileOpen && (<List  >
                        <ListItem>
                            <NavLinks to="about" spy={true} smooth={true} offset={-50} duration={500} >
                                <ListItemText primary="ABOUT" />
                            </NavLinks>
                        </ListItem>
                        <ListItem>
                            <NavLinks to="skills" spy={true} smooth={true} offset={-50} duration={500} >
                                <ListItemText primary="SKILLS" />
                            </NavLinks>
                        </ListItem>
                        <ListItem>
                            <NavLinks to="projects" spy={true} smooth={true} offset={-50} duration={500}>
                                <ListItemText primary="PROJECTS" />
                            </NavLinks>
                        </ListItem>
                        <ListItem>
                            <NavLinks to="papers" spy={true} smooth={true} offset={-50} duration={500}>
                                <ListItemText primary="PAPERS" />
                            </NavLinks>
                        </ListItem>
                        <ListItem>
                            <NavLinks to="experience" spy={true} smooth={true} offset={-50} duration={500} >
                                <ListItemText primary="TIMELINE" />
                            </NavLinks>
                        </ListItem>
                        <ListItem>
                            <NavLinks to="contact" spy={true} smooth={true} offset={-50} duration={500}>
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


            </AppBar>
            <Box
                component="nav"
                sx={{ width: { md: drawerWidth }, }}
                aria-label="mailbox folders"
            >

                <Drawer
                    variant="permanent"
                    sx={{
                        display: { md: 'block', sm: 'none', xs: "none" },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, textAlign: "center", borderRightStyle: "none" },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>


        </Box >
    );
}

// ResponsiveDrawer.propTypes = {
//     /**
//      * Injected by the documentation to work in an iframe.
//      * You won't need it on your project.
//      */
//     window: PropTypes.func,
// };

export default ResponsiveDrawer;