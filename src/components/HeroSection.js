import React from 'react'
import styles from '../css/HeroSection.module.css'
import shoeImg from '../img/shoe1.png'
import buttonImg from '../img/buttonImg.png'
import waterMark from '../img/watermark.png'
import { TiSocialFacebook, TiSocialTwitter, TiSocialLinkedin } from 'react-icons/ti'
import { motion } from 'framer-motion'

const HeroSection = () => {

    const iconLineVariants = {
        initial: {
          opacity: 0,
        },
        animate: {
          opacity: 1,
        },
      };

    const iconVariants = {
        initial: {
            x: 1000,
            opacity: 0,
        },
        animate: {
            x: 0,
            opacity: 1,
        },
    };

    const buttonVariants = {
        initial:{
            x:-1000,
        },
        animate:{
            x:0,
        }
    }

    const animationVariants = {
        initial: {
            y: -100,
            opacity: 0,
            scale: 0
        },
        animate: {
            y: 0,
            opacity: 1,
            scale: 1,
            transition: {
                type: "spring",
                damping: 10,
                stiffness: 100
            }
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.leftSection}>
                <h2 className={styles.heading}>STEP INTO <span>STYLE</span> AND <span>COMFORT</span></h2>
                <p className={styles.paragraph}>Explore our inventory and find the perfect pair to elevate your style</p>

                <motion.button transition={{ delay: 0.2 }} initial="initial" animate="animate" variants={buttonVariants} className={styles.button}>Shop Now <motion.img transition={{ delay: 0.6 }} initial="initial" animate="animate" variants={buttonVariants} className={styles.buttonImg} src={buttonImg} alt="" /> </motion.button>

                <div className={styles.watermark}>
                    <img src={waterMark} alt="" />
                </div>
            </div>
            <div className={styles.rightSection}>
                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={animationVariants}
                    className="shopping-store-heading__image">

                    <img src={shoeImg} alt="Image" className={styles.image} />
                </motion.div>
            </div>

            <div className={styles.icons}>
                <section >
                    <motion.section transition={{ delay: 0 }} initial="initial" animate="animate" variants={iconVariants} > <TiSocialFacebook /> </motion.section>
                    <motion.section transition={{ delay: 0.3 }} initial="initial" animate="animate" variants={iconVariants} > <TiSocialTwitter /> </motion.section>
                    <motion.section transition={{ delay: 0.6 }} initial="initial" animate="animate" variants={iconVariants} > <TiSocialLinkedin /> </motion.section>
                </section>
                <motion.div transition={{ delay: 0.8 }} initial="initial" animate="animate" variants={iconLineVariants}></motion.div>
            </div>
        </div>
    )
}

export default HeroSection