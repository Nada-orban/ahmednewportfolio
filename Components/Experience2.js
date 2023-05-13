
import { Grid, Box, Typography, Container, Divider } from '@mui/material'
import React from 'react'
import styles from '../src/styles/Home.module.css'
import Image from 'next/image'
import googlephoto from '../public/assets/timeline/Google__G__Logo.svg.webp'
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Check from '@mui/icons-material/Check';
import SettingsIcon from '@mui/icons-material/Settings';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import VideoLabelIcon from '@mui/icons-material/VideoLabel';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import Timelinemobileview from './Timelinemobileview'



const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
        top: 80,
        left: 'calc(-50% + 90px)',
        right: 'calc(50% + 90px)',

    },
    [`&.${stepConnectorClasses.active}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            backgroundImage:
                'linear-gradient( 95deg,#FFC517 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
        },
    },
    [`&.${stepConnectorClasses.completed}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            backgroundImage:
                'linear-gradient( 95deg,#FFC517 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
        },
    },
    [`& .${stepConnectorClasses.line}`]: {
        height: 3,
        border: 0,
        backgroundColor:
            theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
        borderRadius: 1,
    },
}));

const ColorlibStepIconRoot = styled('div')(({ theme, ownerState }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? "transparent" : '#ccc',
    zIndex: 1,
    color: '#fff',
    width: 150,
    height: 150,
    display: 'flex',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    border: "4px solid gray",
    // ...(ownerState.active && {
    //     backgroundImage:
    //         'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
    //     boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
    // }),
    // ...(ownerState.completed && {
    //     backgroundImage:
    //         'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
    // }),
}));

function ColorlibStepIcon(props) {
    const { active, completed, className } = props;

    const icons = {
        1: <SettingsIcon />,
        2: <GroupAddIcon />,
        3: <VideoLabelIcon />,
        4: <VideoLabelIcon />,
    };

    return (
        <ColorlibStepIconRoot ownerState={{ completed, active }} className={className}>
            {icons[String(props.icon)]}
        </ColorlibStepIconRoot>
    );
}

ColorlibStepIcon.propTypes = {
    /**
     * Whether this step is active.
     * @default false
     */
    active: PropTypes.bool,
    className: PropTypes.string,
    /**
     * Mark the step as completed. Is passed to child components.
     * @default false
     */
    completed: PropTypes.bool,
    /**
     * The label displayed in the step icon.
     */
    icon: PropTypes.node,
};




function Experience2(props) {


    return (
        <Box id="experience" py="100px" >
            <Container maxWidth="xlg" >
                <Box sx={{ px: { sm: "10px", md: "40px" } }}>
                    <Box display="flex" gap="20px">
                        <div className={styles.titlesection}>
                            <h1>
                                <span class={styles.a} >T</span>
                                <span class={styles.a} >i</span>
                                <span class={styles.a} >m</span>
                                <span class={styles.a} >e</span>
                                <span class={styles.a} >l</span>
                                <span class={styles.a} >i</span>
                                <span class={styles.a} >n</span>
                                <span class={styles.a} >e</span>

                            </h1>
                        </div>

                    </Box>


                    {/* big view */}

                    <Box sx={{ display: { xs: "none", sm: "none", md: "block" } }}>
                        <Stepper alternativeLabel activeStep={3} connector={<ColorlibConnector />}>
                            <Step >
                                <StepLabel StepIconComponent={ColorlibStepIcon}> <Box textAlign="start"><Typography variant='subtitle1' sx={{ color: "text.secondary" }}>Nov 2022 ‐ Now</Typography>
                                    <Typography variant='h5' sx={{ fontWeight: "bold" }}>Machine Learning  Developer</Typography>
                                    <Typography variant="h4" component="span" sx={{ color: "secondary.main", fontWeight: "bold" }}>
                                        OpenAI
                                    </Typography>
                                    <Typography variant='h6' sx={{ fontWeight: "bold" }}>US - Remote</Typography>
                                    <Typography variant='h6'>
                                        <ul>
                                            <li>Working on the tether project.</li>
                                            <li>Helping reinforcement learning models to <br /> fine‐tune and enhance chatgpt performance.</li>
                                        </ul></Typography></Box></StepLabel>
                            </Step>
                            <Step >
                                <StepLabel StepIconComponent={ColorlibStepIcon}> <Box textAlign="start" s><Typography variant='subtitle1' sx={{ color: "text.secondary" }}>Nov 2022 ‐ Now</Typography>
                                    <Typography variant='h5' sx={{ fontWeight: "bold" }}>Machine Learning  Developer</Typography>
                                    <Typography variant="h4" component="span" sx={{ color: "secondary.main", fontWeight: "bold" }}>
                                        OpenAI
                                    </Typography>
                                    <Typography variant='h6' sx={{ fontWeight: "bold" }}>US - Remote</Typography>
                                    <Typography variant='h6'>
                                        <ul>
                                            <li>Working on the tether project.</li>
                                            <li>Helping reinforcement learning models to <br /> fine‐tune and enhance chatgpt performance.</li>
                                        </ul></Typography></Box></StepLabel>
                            </Step>
                            <Step >
                                <StepLabel StepIconComponent={ColorlibStepIcon}> <Box ><Typography variant='subtitle1' sx={{ color: "text.secondary" }}>Nov 2022 ‐ Now</Typography>
                                    <Typography variant='h5' sx={{ fontWeight: "bold" }}>Machine Learning  Developer</Typography>
                                    <Typography variant="h4" component="span" sx={{ color: "secondary.main", fontWeight: "bold" }}>
                                        OpenAI
                                    </Typography>
                                    <Typography variant='h6' sx={{ fontWeight: "bold" }}>US - Remote</Typography>
                                    <Typography variant='h6'>
                                        <ul>
                                            <li>Working on the tether project.</li>
                                            <li>Helping reinforcement learning models to <br /> fine‐tune and enhance chatgpt performance.</li>
                                        </ul></Typography></Box></StepLabel>
                            </Step>
                            <Step >
                                <StepLabel StepIconComponent={ColorlibStepIcon}> <Box ><Typography variant='subtitle1' sx={{ color: "text.secondary" }}>Nov 2022 ‐ Now</Typography>
                                    <Typography variant='h5' sx={{ fontWeight: "bold" }}>Machine Learning  Developer</Typography>
                                    <Typography variant="h4" component="span" sx={{ color: "secondary.main", fontWeight: "bold" }}>
                                        OpenAI
                                    </Typography>
                                    <Typography variant='h6' sx={{ fontWeight: "bold" }}>US - Remote</Typography>
                                    <Typography variant='h6'>
                                        <ul>
                                            <li>Working on the tether project.</li>
                                            <li>Helping reinforcement learning models to <br /> fine‐tune and enhance chatgpt performance.</li>
                                        </ul></Typography></Box></StepLabel>
                            </Step>

                        </Stepper>
                    </Box>


                    {/* mobile view */}
                    <Timelinemobileview />


                </Box>
            </Container>
        </Box>
    )
}

export default Experience2