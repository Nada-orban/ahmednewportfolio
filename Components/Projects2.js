import { Grid, Box, Typography, Container } from '@mui/material'
import React from 'react'
import styles from '../src/styles/Home.module.css'
import { ColorModeContext } from '../public/theme'
import { styled, useTheme, alpha } from '@mui/material/styles';
import GitHubIcon from '@mui/icons-material/GitHub';
import Link from 'next/link'
import Image from 'next/image'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { TypeSpecimen } from '@mui/icons-material';
import { projectsdata } from '../data'
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import PropTypes from 'prop-types';



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

function Projects2() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };


    const colorMode = React.useContext(ColorModeContext);
    const theme = useTheme();
    return (
        <>
            <Box id='projects' py="100px" >
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
                    {/* {projectsdata.map(project => (
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

                    ))} */}
                    <Grid item xs={12} sm={6} lg={3} md={6}>

                        <Box className={styles.projectBox}>
                            <img src="" alt='' className={styles.boximage} />
                            <Box className={styles.boxtext} onClick={handleClickOpen}>
                                <Typography variant='subtitle1'>VIEW PROJECT</Typography>

                            </Box>

                        </Box>
                        <BootstrapDialog
                            onClose={handleClose}
                            aria-labelledby="customized-dialog-title"
                            open={open}
                        >
                            <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
                                Efficient Speech Enhancement GANs
                            </BootstrapDialogTitle>
                            <DialogContent dividers>
                                <Typography gutterBottom>
                                    During my tenure at Omnispeech, I contributed to the development of efficient speech enhancement models. My work involved scaling down large Speech Enhancement GANs to sub-1 Million parameter models, ensuring excellent clarity and noise cancellation in real-time applications.
                                </Typography>

                            </DialogContent>
                            {/* <DialogActions>
                                    <button autoFocus onClick={handleClose}>
                                        Save changes
                                    </button>
                                </DialogActions> */}
                        </BootstrapDialog>

                    </Grid>
                    <Grid item xs={12} sm={6} lg={3} md={6}>

                        <Box className={styles.projectBox}>
                            <img src="" alt='' className={styles.boximage} />
                            <Box className={styles.boxtext} onClick={handleClickOpen}>
                                <Typography variant='subtitle1'>VIEW PROJECT</Typography>

                            </Box>

                        </Box>
                        <BootstrapDialog
                            onClose={handleClose}
                            aria-labelledby="customized-dialog-title"
                            open={open}
                        >
                            <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
                                Optimizing Tensorflow dataset pipeline for large audio dataset
                            </BootstrapDialogTitle>
                            <DialogContent dividers>
                                <Typography gutterBottom>
                                    At Omnispeech, I optimized the audio data loading pipeline for deep learning experiments using Tensorflow. By achieving near-optimal ~100% GPU utilization, the pipeline significantly enhanced the efficiency of training small and medium-sized models.
                                </Typography>

                            </DialogContent>
                            {/* <DialogActions>
                                    <button autoFocus onClick={handleClose}>
                                        Save changes
                                    </button>
                                </DialogActions> */}
                        </BootstrapDialog>

                    </Grid>
                    <Grid item xs={12} sm={6} lg={3} md={6}>

                        <Box className={styles.projectBox}>
                            <img src="" alt='' className={styles.boximage} />
                            <Box className={styles.boxtext} onClick={handleClickOpen}>
                                <Typography variant='subtitle1'>VIEW PROJECT</Typography>

                            </Box>

                        </Box>
                        <BootstrapDialog
                            onClose={handleClose}
                            aria-labelledby="customized-dialog-title"
                            open={open}
                        >
                            <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
                                VR Hostage Rescue Video Game Open source
                            </BootstrapDialogTitle>
                            <DialogContent dividers>
                                <Typography gutterBottom>
                                    I created an immersive Virtual Reality video game using Unity for the PC and Oculus platforms. This thrilling game puts players in the midst of hostage rescue missions, delivering an interactive and captivating experience
                                </Typography>

                            </DialogContent>
                            {/* <DialogActions>
                                    <button autoFocus onClick={handleClose}>
                                        Save changes
                                    </button>
                                </DialogActions> */}
                        </BootstrapDialog>

                    </Grid>
                    <Grid item xs={12} sm={6} lg={3} md={6}>

                        <Box className={styles.projectBox}>
                            <img src="" alt='' className={styles.boximage} />
                            <Box className={styles.boxtext} onClick={handleClickOpen}>
                                <Typography variant='subtitle1'>VIEW PROJECT</Typography>

                            </Box>

                        </Box>
                        <BootstrapDialog
                            onClose={handleClose}
                            aria-labelledby="customized-dialog-title"
                            open={open}
                        >
                            <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
                                You Only Look Faster
                            </BootstrapDialogTitle>
                            <DialogContent dividers>
                                <Typography gutterBottom>
                                    As part of my Bachelor's degree capstone project, I developed a modified version of YOLOv2, called 'You Only Look Faster.' This lightweight object detection model is designed for efficient performance and accuracy.
                                </Typography>

                            </DialogContent>
                            {/* <DialogActions>
                                    <button autoFocus onClick={handleClose}>
                                        Save changes
                                    </button>
                                </DialogActions> */}
                        </BootstrapDialog>

                    </Grid>
                </Grid>

            </Box>
            {/* <Box width="500px" height="200px" backgroundColor="red">
                <Typography>hi</Typography>
            </Box> */}
        </>
    )
}

export default Projects2