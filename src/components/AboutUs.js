import React from 'react'
import styles from '../css/AboutUs.module.css'
import aboutImg from '../img/aboutImage.png'
import paraImg from '../img/element.png'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

const AboutUs = () => {


    const [animationRef, inView] = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });

    const [imageRef, imageInView] = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });

    const [storyRef, StoryInView] = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });

    const [section2Ref, section2InView] = useInView({
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

    const imageVariants = {
        hidden: {
            x: -100,
            opacity: 0,
        },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                type: "spring",
                damping: 10,
                stiffness: 100
            }
        }
    };

    const storyVariants = {
        hidden: {
            x: 100,
            opacity: 0,
        },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                type: "spring",
                damping: 10,
                stiffness: 100
            }
        }
    };


    return (
        <div className={styles.aboutUs}>
            <motion.h1 ref={animationRef} initial="hidden" animate={inView ? "visible" : "hidden"} variants={animationVariants} >About Us <div></div> </motion.h1>

            <section className={styles.section1}>
                <motion.div ref={imageRef} initial="hidden" animate={imageInView ? "visible" : "hidden"} variants={imageVariants} className={styles.imageContainer}>
                    <img src={aboutImg} alt="About Us" />
                </motion.div>

                <motion.div ref={storyRef} initial="hidden" animate={StoryInView ? "visible" : "hidden"} variants={storyVariants} className={styles.content}>
                    <h2>OUR STORY</h2>
                    <p>
                        At Shoe it, we are dedicated to providing you with the finest selection of footwear that combines style, comfort, and quality. Discover the journey behind our brand and how we strive to meet your unique fashion needs.
                    </p>
                </motion.div>

            </section>
            <motion.section ref={section2Ref} initial="hidden" animate={section2InView ? "visible" : "hidden"} variants={animationVariants} className={styles.section2}>
                <div className={styles.content}>
                    <div className={styles.column}>
                        <div>
                            <h3>STYLE AND COMFORT</h3>
                            <p>
                                We believe that fashion should never come at the expense of comfort. That's why we handpick each pair of shoes in our collection, ensuring they not only look great but also provide the perfect fit and support. Explore our diverse range of footwear, from casual sneakers to elegant heels, and find the perfect pair that effortlessly combines style and comfort.
                            </p>
                        </div>
                        <div>
                            <h3>PERSONALIZED SERVICES</h3>
                            <p>
                                Our team of knowledgeable and friendly experts is here to assist you in finding your ideal pair of shoes. We understand that everyone has different preferences and needs, which is why we take the time to listen and guide you towards the perfect choice. Experience personalized service and rely on our expertise to help you make the right decision.
                            </p>
                        </div>
                    </div>
                </div>
            </motion.section>

            <section className={styles.section3}>
                <div className={styles.content}>
                    <h2>JOIN OUR COMMUNITY</h2>
                    <p>
                        We invite you to become a part of our community of satisfied customers who have found their perfect pair with us. Explore our online store and discover the latest footwear trends, from everyday essentials to statement pieces. Trust in our dedication to customer satisfaction and enjoy a seamless shopping experience from start to finish.
                    </p>
                </div>
            </section>

            <section className={styles.section4}>
                <p><span>Thank you</span> for choosing shoe it. Step into a world of fashion and comfort with us today.</p>
            </section>
        </div>
    )
}

export default AboutUs