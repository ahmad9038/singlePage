import React, { useEffect, useReducer, useRef, useState } from 'react';
import styles from '../css/Navbar.module.css';
import { RxHamburgerMenu } from 'react-icons/rx';
import { motion } from 'framer-motion';


const Navbar = () => {
    const [menuIcon, setMenuIcon] = useState(false);
    const navbarOptionsRef = useRef();
  
    const handleClick = () => {
      setMenuIcon(!menuIcon);
    };
  
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (navbarOptionsRef.current && !navbarOptionsRef.current.contains(event.target)) {
          setMenuIcon(false);
        }
      };
  
      document.addEventListener('mousedown', handleClickOutside);
  
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, []);
  
    // Animation properties
    const animationProps = {
      initial: { opacity: 0, x: -50 },
      animate: { opacity: 1, x: 0 },
      transition: { delay: 0.2, duration: 0.5 },
    };
  
    return (
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <motion.h1 initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2, duration: 0.5 }}>
            SHOE IT
            <section className={styles.logoDot}></section>
          </motion.h1>
        </div>
        <ul className={`${styles.navbarOptions} ${menuIcon ? styles.show : styles.hide}`} ref={navbarOptionsRef}>
          <motion.li className={styles.navbarOption} {...animationProps}>
            Home
          </motion.li>
          <motion.li className={styles.navbarOption} {...animationProps} transition={{ delay: 0.3, duration: 0.5 }}>
            About Us
          </motion.li>
          <motion.li className={styles.navbarOption} {...animationProps} transition={{ delay: 0.4, duration: 0.5 }}>
            Contact Us
          </motion.li>
          <motion.button className={styles.navbarButton} {...animationProps} transition={{ delay: 0.5, duration: 0.5 }}>
            Login
          </motion.button>
        </ul>
  
        <ul className={styles.hamburger} onClick={handleClick}>
          <RxHamburgerMenu />
        </ul>
      </nav>
    );
  };
  
  export default Navbar;
  
  