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






const drawerWidth = 130;



export default function Home({ projects }) {
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
        {/* <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,200;0,300;0,700;1,600;1,700&display=swap" rel="stylesheet" /> */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
        <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet"></link>

      </Head>

      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <Drawer1 />

        <Box
          component="main"
          sx={{ flexGrow: 1, width: { sm: "100%" } }}
        >
          <main >
            <Landing />
            <About />
            <Skill />

            {/* //projects section */}
            <Box id='projects' py="100px">
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
                    data-aos-anchor-placement="top-bottom">Here you can see some of the projects I've done on my own time.</Typography>
                  <Typography className={styles.bigfake}>WORK</Typography>
                </Box>
              </Container>
              <Grid container sx={{ my: "80px" }} data-aos="fade-up"
                data-aos-anchor-placement="top-bottom" data-aos-delay="800">
                {projects.map(project => (
                  <Projects key={project.id} {...project} />

                ))}
              </Grid>
              {/* <Box display='flex' justifyContent="center" flexDirection="column" textAlign="center" marginTop="10px">
                  <Typography variant='h4'>To see more of my projects...</Typography>
                  <button className={styles.normalButton}><a href='https://github.com/AhmedFakhry47' target="_blank">Visit My GitHub<GitHubIcon /></a></button>
                </Box> */}
            </Box>
            <Papers />
            <Experience2 />
            <Contact />
            <Footer />

          </main>


        </Box>
      </Box>












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
