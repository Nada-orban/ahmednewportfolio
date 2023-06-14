import Head from 'next/head'
import React from 'react'
import { Box, Tabs, Tab, Typography, LinkTab, Grid, Button, Container, Avatar, Toolbar, Paper } from '@mui/material'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import CssBaseline from '@mui/material/CssBaseline';
import Landing from '../../Components/Landing'
import Drawer1 from '../../Components/Drawer1'
import About from '../../Components/About'
import Experience2 from '../../Components/Experience2'
import Projects from '../../Components/Projects'
import { projectsdata } from '../../data'
import { ColorModeContext } from '../../public/theme'
import { styled, useTheme, alpha } from '@mui/material/styles';
import Skill from '../../Components/Skill'
import Contact from '../../Components/Contact'
import Papers from '../../Components/Papers'
import Footer from '../../Components/Footer'
import Timelinewebsite from '../../Components/Timelinewebsite'
import Projects2 from '../../Components/Projects2'
import Nav from '../../Components/Nav'
import Timeline2 from '../../Components/Timeline2'
import { Timeline } from '@mui/lab'
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import PropTypes from 'prop-types';
import GitHubIcon from '@mui/icons-material/GitHub';
// import imagebg from '../../public/assets/backgrounds/profile.jpg'






const drawerWidth = 130;
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));
function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: 'red',
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};



export default function Home({ photo }) {
  const colorMode = React.useContext(ColorModeContext);
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Head>
        <title>Ahmed Adel Attia</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <meta property="og:title" content="Code Venkey Samples" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://kvkirthy.github.io/code-samples/assets/dino.png" />
        <meta property="og:url" content="https://kvkirthy.github.io/code-sample/" /> */}
        <meta
          property="og:description"
          content="Hurray!! Yes Social Media Preview is Working"
        />


        <meta property="og:image" content={`../../public/profile.jpg`} />
        <link rel="icon" href="/logo.png" />
        <link rel="icon" href="%PUBLIC_URL%/logonada.png" />
        {/* <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,200;0,300;0,700;1,600;1,700&display=swap" rel="stylesheet" /> */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
        <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet"></link>

      </Head>
      {/* 
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <Drawer1 />

        <Box
          component="main"
          sx={{ flexGrow: 1, width: { sm: "100%" } }}
        > */}
      <main >
        <Nav />
        <Landing />
        <About />
        <Skill />
        <Papers />
        <Timeline2 />
        <Projects2 />

        {/* //projects section */}
        {/* <Box id='projects' py="100px">
          <Container maxWidth="xlg" >
            <Box sx={{ px: { sm: "10px", md: "40px" } }} position="relative">
              <Box display="flex" gap="20px">
                <div className={styles.titlesection}>
                  <h1>
                    <span class={styles.a} data-aos="zoom-in" data-aos-delay="50">P</span>
                    <span class={styles.a} data-aos="zoom-in" data-aos-delay="100">r</span>
                    <span class={styles.a} data-aos="zoom-in" data-aos-delay="200">o</span>
                    <span class={styles.a} data-aos="zoom-in" data-aos-delay="300">j</span>
                    <span class={styles.a} data-aos="zoom-in" data-aos-delay="400">e</span>
                    <span class={styles.a} data-aos="zoom-in" data-aos-delay="500">c</span>
                    <span class={styles.a} data-aos="zoom-in" data-aos-delay="600">t</span>
                    <span class={styles.a} data-aos="zoom-in" data-aos-delay="700">s</span>

                  </h1>
                </div>

              </Box>
              <Typography variant='h5' data-aos="fade-up"
                data-aos-anchor-placement="top-bottom">
                Below are some selected projects that I have worked on during my industry experience, as well as class and capstone projects. These endeavors highlight my skills and dedication in various professional contexts, showcasing the breadth of my experience and capabilities.
              </Typography>
              <Typography className={styles.bigfake}>WORK</Typography>
            </Box>
          </Container>
          <Grid container sx={{ my: "80px" }} data-aos="fade-up"
            data-aos-anchor-placement="top-bottom" data-aos-delay="800">
            {projects.map(project => (
              // <Projects key={project.id} {...project} />
              <Grid item xs={12} sm={6} lg={3} md={6}>

                <Box className={styles.projectBox}>
                  <img src={project.image} alt='' className={styles.boximage} />
                  <Box className={styles.boxtext} onClick={handleClickOpen}>
                    <Typography variant='subtitle1'>VIEW PROJECT</Typography>

                  </Box>
                  <Typography >{project.title}</Typography>
                </Box>
                <BootstrapDialog
                  onClose={handleClose}
                  aria-labelledby="customized-dialog-title"
                  open={open}
                >
                  <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
                    {project.title}
                  </BootstrapDialogTitle>
                  <DialogContent dividers>
                    <Typography gutterBottom>
                      {project.body}
                    </Typography>

                  </DialogContent>
                  <DialogActions>
                    <button autoFocus onClick={handleClose}>
                      Save changes
                    </button>
                  </DialogActions>
                </BootstrapDialog>

              </Grid>

            ))}
          </Grid>
          <Box display='flex' justifyContent="center" flexDirection="column" textAlign="center" marginTop="10px">
            <Typography variant='h4'>To see more of my projects...</Typography>
            <button className={styles.normalButton}><a href='https://github.com/AhmedFakhry47' target="_blank">Visit My GitHub<GitHubIcon /></a></button>
          </Box>
        </Box> */}

        {/* <Timelinewebsite /> */}
        <Contact />
        <Footer />

      </main>


      {/* </Box>
      </Box> */}












    </>
  )
}

export const getStaticProps = async () => {
  // const res = await fetch("data.projects?_limit=2");
  // const data = await res.json();

  return {
    props: {
      projects: projectsdata,
    }
  }
}
