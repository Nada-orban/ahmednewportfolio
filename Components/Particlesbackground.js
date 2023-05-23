import React from 'react'
import Particles from 'react-tsparticles'
import particlesConfig from './config/Particles.config'
import styles from '../src/styles/Home.module.css'

function Particlesbackground() {
    return (
        <Particles params={particlesConfig} className={styles.tsparticles}></Particles>
    )
}

export default Particlesbackground