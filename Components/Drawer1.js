import * as React from 'react';
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
import robotjson from '../public/assets/backgrounds/112425-ai-cpu-circuit-board-loading-animation.json'
import Lottie from 'lottie-react'


const drawerWidth = 130;

function ResponsiveDrawer({ children }) {
    // const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <Box sx={{
            backgroundColor: "background.secondary", height: "100vh",
        }}>
            <Toolbar />
            <Box><Lottie animationData={robotjson} /></Box>


            <Divider sx={{ mt: "30vh" }} />
            <List sx={{ textAlign: "center", margin: "auto", }}>
                {/* <ListItem>
                    <Link to="home" spy={true} smooth={true} offset={-50} duration={500}>
                        <ListItemButton >
                            <HomeIcon sx={{ color: "secondary.main", width: "50px" }} />
                            <ListItemText primary="Home" />
                        </ListItemButton>
                    </Link>
                </ListItem> */}
                <ListItem>
                    <Link to="about" spy={true} smooth={true} offset={-50} duration={500} >
                        <ListItemButton >
                            <Typography variant="h6">About</Typography>
                            {/* <ListItemText primary="About" /> */}
                        </ListItemButton>
                    </Link>
                </ListItem>
                <Divider />
                <ListItem>
                    <Link to="skills" spy={true} smooth={true} offset={-50} duration={500}>
                        <ListItemButton >
                            <Typography variant="h6">Skills</Typography>
                        </ListItemButton>
                    </Link>
                </ListItem>
                <Divider />
                <ListItem>
                    <Link to="projects" spy={true} smooth={true} offset={-50} duration={500}>
                        <ListItemButton >
                            <Typography variant="h6">Projects</Typography>
                            {/* <ListItemText primary="Projects" /> */}
                        </ListItemButton>
                    </Link>
                </ListItem>
                <Divider />
                <ListItem>
                    <Link to="contact" spy={true} smooth={true} offset={-50} duration={500}>
                        <ListItemButton >
                            <Typography variant="h6">Contact</Typography>

                        </ListItemButton>
                    </Link>
                </ListItem>
                <Divider />
            </List>
            {/* <Box gap="0px" mt="100px" sx={{ display: { xs: 'none', sm: 'flex' } }}>

                <a href='https://github.com/Nada-orban' data-aos="fade-left" target="_blank">
                    <Avatar className={Styles.icon}><GitHubIcon sx={{ color: "white" }} /></Avatar>
                </a>
                <a href='https://www.linkedin.com/in/nada-samir-441a58130/' data-aos="fade-left" data-aos-delay="200" target="_blank">
                    <Avatar className={Styles.icon} >
                        <LinkedInIcon sx={{ color: "white" }} /></Avatar>
                </a>

                <a href='mailto:nadasamir9334@gmail.com' data-aos="fade-left" data-aos-delay="800" target="_blank">
                    <Avatar className={Styles.icon} ><EmailIcon sx={{ color: "white" }} /></Avatar>
                </a>

            </Box> */}


        </Box >
    );
    const drawer1 = (
        <div>
            <Toolbar />
            <Divider sx={{ mt: 15 }} />
            <List sx={{ textAlign: "center", margin: "auto", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                {/* <ListItem>
                    <Link to="home" spy={true} smooth={true} offset={-50} duration={500}>
                        <ListItemButton >
                            <HomeIcon sx={{ color: "secondary.main", width: "50px" }} />
                            <ListItemText primary="Home" />
                        </ListItemButton>
                    </Link>
                </ListItem> */}
                <ListItem>
                    <Link to="about" spy={true} smooth={true} offset={-50} duration={500} >
                        <ListItemButton >
                            {/* <Typography variant="h3">About</Typography> */}

                            <ListItemText primary="About" />
                        </ListItemButton>
                    </Link>
                </ListItem>
                <ListItem>
                    <Link to="skills" spy={true} smooth={true} offset={-50} duration={500}>
                        <ListItemButton >

                            <ListItemText primary="Skills" />
                        </ListItemButton>
                    </Link>
                </ListItem>
                <ListItem>
                    <Link to="projects" spy={true} smooth={true} offset={-50} duration={500}>
                        <ListItemButton >

                            <ListItemText primary="Projects" />
                        </ListItemButton>
                    </Link>
                </ListItem>
                <ListItem>
                    <Link to="contact" spy={true} smooth={true} offset={-50} duration={500}>
                        <ListItemButton >

                            <ListItemText primary="Contact" />
                        </ListItemButton>
                    </Link>
                </ListItem>
            </List>



        </div>
    );


    // const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{

                    width: { sm: `${drawerWidth}px)` },
                    ml: { md: `${drawerWidth}px` },
                    display: { md: "none" }
                }}
            >
                <Toolbar>

                    <Typography variant="h6" noWrap sx={{ flexGrow: 1 }} component="div">
                        Responsive drawer
                    </Typography>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="end"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { md: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    // container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { sm: 'block', md: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer1}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', md: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, textAlign: "center", borderRightStyle: "none" },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>

            <Box
                component="main"
                sx={{ flexGrow: 1, width: { sm: ` ${drawerWidth}px)` } }}
            >


                <Toolbar />
                <main >{children}</main>


            </Box>
        </Box>
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