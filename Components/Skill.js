import { Grid, Box, Typography, Container, Divider } from '@mui/material'
import React from 'react'
import styles from '../src/styles/Home.module.css'
import { ColorModeContext } from '../public/theme'
import { styled, useTheme, alpha } from '@mui/material/styles';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import ShareIcon from '@mui/icons-material/Share';
import ComputerIcon from '@mui/icons-material/Computer';

function Skill() {
    const colorMode = React.useContext(ColorModeContext);
    const theme = useTheme();
    return (
        <Box id="about" py="100px"  >
            <Container maxWidth="xlg" >
                <Box sx={{ px: { sm: "10px", md: "40px" } }}>
                    <Box display="flex" gap="20px">
                        <div className={styles.titlesection}>
                            <h1>
                                <span class={styles.a} >S</span>
                                <span class={styles.a} >k</span>
                                <span class={styles.a} >i</span>
                                <span class={styles.a} >l</span>
                                <span class={styles.a} >l</span>
                                <span class={styles.a} >s</span>


                            </h1>
                        </div>

                    </Box>
                    <Typography variant='h6'>Below are some of my skills, and I'm always looking to learn more.</Typography>
                    <Grid container spacing={2} sx={{ my: "50px", }}>
                        <Grid item xs={12} sm={6} md={4} sx={{ display: "flex", justifyContent: "center", flexDirection: "column", mt: "30px" }}>
                            <Box sx={{ display: "flex", justifyContent: "center", flexDirection: "column", mt: "30px", backgroundColor: "#03021863", padding: " 10px 5px" }}>
                                <CodeIcon sx={{ padding: "20px", textAlign: "center", color: "primary.main", width: "120px", height: "120px", overflow: "hidden", mx: "auto" }} />
                                <Typography variant='h4' sx={{ textAlign: "center", my: 2, fontWeight: "bold" }}>Programming Languages</Typography>
                                <Typography variant='h6' sx={{ textAlign: "center" }}>Python,C/C++
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} sx={{ display: "flex", justifyContent: "center", flexDirection: "column", mt: "30px" }}>
                            <Box sx={{ display: "flex", justifyContent: "center", flexDirection: "column", mt: "30px", backgroundColor: "#03021863", padding: " 10px 5px" }}>
                                <ShareIcon sx={{ padding: "20px", textAlign: "center", color: "primary.main", width: "120px", height: "120px", overflow: "hidden", mx: "auto" }} />
                                <Typography variant='h4' sx={{ textAlign: "center", my: 2, fontWeight: "bold" }}>Deep Learning Frameworks</Typography>
                                <Typography variant='h6' sx={{ textAlign: "center" }}>Tensorflow, Keras, Pytorch
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} sx={{ display: "flex", justifyContent: "center", flexDirection: "column", mt: "30px" }}>
                            <Box sx={{ display: "flex", justifyContent: "center", flexDirection: "column", mt: "30px", backgroundColor: "#03021863", padding: " 10px 5px" }}>
                                <StorageIcon sx={{ padding: "20px", textAlign: "center", color: "primary.main", width: "120px", height: "120px", overflow: "hidden", mx: "auto" }} />
                                <Typography variant='h4' sx={{ textAlign: "center", my: "35px", fontWeight: "bold" }}>Databases</Typography>
                                <Typography variant='h6' sx={{ textAlign: "center" }}> SQL database,MongoDB
                                </Typography>
                            </Box>
                        </Grid>

                        {/* <Grid item xs={12} sm={6} md={6} sx={{ display: "flex", justifyContent: "center", flexDirection: "column", mt: "30px" }}>
                        <ComputerIcon sx={{ padding: "20px", textAlign: "center", border: "2px solid white", borderRadius: "50%", backgroundColor: "white", color: "secondary.main", width: "120px", height: "120px", overflow: "hidden", mx: "auto" }} />
                        <Typography variant='h4' sx={{ textAlign: "center", my: 2, fontWeight: "bold" }}>Others</Typography>
                        <Typography variant='h6' sx={{ textAlign: "center" }}> Linux,Git,OOP Fundamentals,Matlab
                        </Typography>
                    </Grid> */}

                    </Grid>
                </Box>



            </Container >
        </Box>


    )
}

export default Skill