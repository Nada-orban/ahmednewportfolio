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
                            data-aos-anchor-placement="top-bottom">
                            Below are some selected projects that I have worked on during my industry experience, as well as class and capstone projects. These endeavors highlight my skills and dedication in various professional contexts, showcasing the breadth of my experience and capabilities.
                        </Typography>
                        <Typography className={styles.bigfake}>WORK</Typography>
                    </Box>
                </Container>
                <Grid container sx={{ my: "80px" }} data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom" data-aos-delay="800">
                    {projectsdata.map(project => (
                        <Grid item xs={12} sm={6} lg={3} md={6}>

                            <Box className={styles.projectBox}>
                                <img src={project.image} alt='' className={styles.boximage} />
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
                                    Modal title
                                </BootstrapDialogTitle>
                                <DialogContent dividers>
                                    <Typography gutterBottom>
                                        Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                                        dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                                        consectetur ac, vestibulum at eros.
                                    </Typography>
                                    <Typography gutterBottom>
                                        Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                                        Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
                                    </Typography>
                                    <Typography gutterBottom>
                                        Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus
                                        magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec
                                        ullamcorper nulla non metus auctor fringilla.
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

            </Box>
            {/* <Box width="500px" height="200px" backgroundColor="red">
                <Typography>hi</Typography>
            </Box> */}
        </>
    )
}

export default Projects2