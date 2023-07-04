import React from 'react'
import Navbar from '../components/Navbar'
import styles from '../css/Home.module.css'
import HeroSection from '../components/HeroSection'
import AboutUs from '../components/AboutUs'
import ContactUs from '../components/ContactUs'
import paraImg from '../img/element.png'

const Home = () => {
    return (
        <div className={styles.parent}>
            
            <div className={styles.backColor}>
                <div className={styles.navbarContainer}>
                    <Navbar />
                </div>
                <div className={styles.heroSectionContainer}>
                    <HeroSection />
                </div>
            </div>
            <div className={styles.aboutUsContainer}>
                <AboutUs />
                <hr />
            </div>
            <div className={styles.contactUsContainer}>
                <ContactUs/>
            </div>
        </div>
    )
}

export default Home