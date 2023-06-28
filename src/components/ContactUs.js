import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import { RiTwitterFill, RiLinkedinFill, RiFacebookFill } from 'react-icons/ri';
import styles from '../css/ContactUs.module.css';
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

const ContactPage = () => {

    const [animationRef, inView] = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });

    const [contactRef, contactRefInView] = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });

    const [mapSectionRef, mapSectionRefInView] = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });

    const animationVariants = {
        hidden: {
            opacity: 0,
            y: 50,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1, // Animation duration
            },
        },
    };

    return (
        <div className={styles.contactPage}>
            <motion.h1 ref={animationRef} initial="hidden" animate={inView ? "visible" : "hidden"} variants={animationVariants} className={styles.heading}>Contact Us <div></div> </motion.h1>

            <motion.div ref={mapSectionRef} initial="hidden" animate={mapSectionRefInView ? "visible" : "hidden"} variants={animationVariants} className={styles.contactContainer}>
                <div className={styles.mapContainer}>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3035.0424461682465!2d-73.98666138457888!3d40.74844014252648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2594ce1b4d91f%3A0x2b2c063ebf44a1a4!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1620898595994!5m2!1sen!2sus"
                        width="100%"
                        height='100%'
                        frameBorder="0"
                        style={{ border: 0 }}
                        allowFullScreen
                        aria-hidden="false"
                        tabIndex="0"
                    ></iframe>
                </div>
                <div className={styles.contactForm}>
                    <div className={styles.formRow}>
                        <div className={styles.formColumn}>
                            <label htmlFor="firstName">First Name:</label>
                            <input type="text" id="firstName" />
                        </div>
                        <div className={styles.formColumn}>
                            <label htmlFor="lastName">Last Name:</label>
                            <input type="text" id="lastName" />
                        </div>
                    </div>
                    <div className={styles.formRow}>
                        <div className={styles.formColumn}>
                            <label htmlFor="email">Email:</label>
                            <input type="email" id="email" />
                        </div>
                        <div className={styles.formColumn}>
                            <label htmlFor="phone">Phone:</label>
                            <input type="tel" id="phone" />
                        </div>
                    </div>
                    <div className={styles.messageRow}>
                        <label htmlFor="message">Message:</label>
                        <textarea id="message" rows="4"></textarea>
                    </div>
                    <button className={styles.submitButton}>Submit</button>
                </div>

            </motion.div>
            <div className={styles.contactInfo}>
                <motion.h3 ref={contactRef} initial="hidden" animate={contactRefInView ? "visible" : "hidden"} variants={animationVariants} >CONTACT INFORMATION</motion.h3>
                <div className={styles.info}>
                    <div className={styles.infoRow}>
                        <FaMapMarkerAlt />
                        <p>123 Street, City, Country</p>
                    </div>
                    <div className={styles.infoRow}>
                        <FaPhone />
                        <p>+1 234 567 890</p>
                    </div>
                    <div className={styles.infoRow}>
                        <FaEnvelope />
                        <p>example@example.com</p>
                    </div>
                </div>
                <div className={styles.socialIcons}>
                    <RiTwitterFill />
                    <RiLinkedinFill />
                    <RiFacebookFill />
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
