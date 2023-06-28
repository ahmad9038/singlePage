import React from 'react';
import { TiSocialFacebook } from 'react-icons/ti';
import { TiSocialInstagram } from 'react-icons/ti';
import { TiSocialTwitter } from 'react-icons/ti';
import { TiSocialYoutube } from 'react-icons/ti';
import styles from '../css/Footer.module.css';

const Footer = () => {
    return (
        <>
            <div className={styles.footerParent}>
                <footer>
                    <div className={styles.footerContainer}>

                        <div className={styles.footerColumn}>
                            <h4 className={styles.footerHeading}>About Us</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non mauris luctus, bibendum eros eget, eleifend quam.</p>
                        </div>

                        <div className={styles.footerColumn}>
                            <h4 className={styles.footerHeading}>Contact Us</h4>
                            <p>123 Main St. New York, NY 10001</p>
                            <p>Email: info@example.com</p>
                            <p>Phone: 555-555-5555</p>
                        </div>

                        <div className={styles.footerColumn}>
                            <h4 className={styles.footerHeading}>Follow Us On</h4>
                            <ul className={styles.socialMediaIcons}>
                                <li><TiSocialFacebook /></li>
                                <li><TiSocialInstagram /></li>
                                <li><TiSocialTwitter /></li>
                                <li><TiSocialYoutube /></li>
                            </ul>
                        </div>

                        

                        <div className={styles.footerColumn}>
                            <h4 className={styles.footerHeading}>Subscribe</h4>
                            <p>Sign up to receive updates and special offers:</p>
                            <form action="#" method="POST">
                                <input type="email" name="email" className={styles.emailInput} placeholder="Enter your Message here" />
                                <button type="submit" className={styles.submitButton}>Send</button>
                            </form>
                        </div>

                    </div>
                    <hr className={styles.divider} />
                    <p className={styles.footerText}>&copy; 2023 Profolio by M_ahmadShahzad.</p>
                </footer>
            </div>
        </>
    );
}

export default Footer;
