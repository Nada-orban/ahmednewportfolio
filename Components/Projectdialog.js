import React from 'react'
import Link from 'next/link'
import { projectsdata } from '../data'
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import { Box, Tabs, Tab, Typography, LinkTab, Grid, Button, Container, Paper, List, ListItem, ListItemText, ListItemIcon, Avatar, Divider, } from '@mui/material'
import styles from '../src/styles/Home.module.css'
import { ColorModeContext } from '../public/theme'
import { styled, useTheme, alpha } from '@mui/material/styles';
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




export const getStaticProps = async ({ params }) => {
    const projectsfilter = projectsdata.filter(p => p.id.toString() === params.id);

    return {
        props: {
            project: projectsfilter[0],
        },
    }
}
export const getStaticPaths = async () => {
    const paths = projectsdata.map(project => ({
        params: { id: project.id.toString() }
    }))
    return { paths, fallback: false };
}

function Projectdialog({ project }) {
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
    )
}

export default Projectdialog