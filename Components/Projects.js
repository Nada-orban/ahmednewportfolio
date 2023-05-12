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

function Mywork({ id, title, body, image, pdf, code, poster }) {
    const colorMode = React.useContext(ColorModeContext);
    const theme = useTheme();
    return (

        <Grid item xs={12} sm={6} md={3}>
            <Link href={`/projects/[id]`} as={`/projects/${id}`} key={id} passHref>
                <Box className={styles.projectBox}>
                    <img src={image} alt='' className={styles.boximage} />
                    <Box className={styles.boxtext}>
                        <Typography variant='subtitle1'>VIEW PROJECT</Typography>
                    </Box>

                    {/* <Typography variant='h5' sx={{ color: "secondary.main" }}>{title}</Typography>
                    <Typography variant='h6'>{body}</Typography> */}

                    {/* <Image
                        src={image}
                        width={300}
                        height={300}
                        alt="Picture of the author"
                    /> */}

                </Box>
            </Link>
        </Grid>



    )
}

export default Mywork