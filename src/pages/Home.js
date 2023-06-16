import Image from 'next/image';
import Slider from "react-slick";
import { Quicksand, Tilt_Neon, Varela_Round } from 'next/font/google';
import { motion } from 'framer-motion';
import { flushSync } from 'react-dom';

import s1 from "/public/slides/s1.png";
import s2 from "/public/slides/s2.png";
import s3 from "/public/slides/s3.png";

import c1 from "/public/clients/Picture 1.jpg";
import c2 from "/public/clients/Picture 2.png";
import c3 from "/public/clients/Picture 3.png";
import c4 from "/public/clients/Picture 4.jpg";
import c5 from "/public/clients/Picture 5.jpg";
import c6 from "/public/clients/Picture 6.jpg";
import c7 from "/public/clients/Picture 7.png";
import c8 from "/public/clients/Picture 8.png";
import c9 from "/public/clients/Picture 9.jpg";
import c10 from "/public/clients/Picture 10.png";
import c11 from "/public/clients/Picture 11.jpg";
import c12 from "/public/clients/Picture 12.png";
import c13 from "/public/clients/Picture 13.png";
import c14 from "/public/clients/Picture 14.jpg";
import c15 from "/public/clients/Picture 15.jpg";


const tiltNeon = Tilt_Neon({
    weight: '400',
    subsets: [],
});

const quicksand = Quicksand({
    weight: '600',
    subsets: ['latin'],
});

const varelaRound = Varela_Round({
    weight: '400',
    subsets: ['latin'],
});

const divVariants = {
    hidden: {
        transition: {
            staggerChildren: .2, // delay between animating children
            staggerDirection: -1, // animating children in reverse order
        },
    },
    visible: {
        transition: {
            staggerChildren: .2,
            staggerDirection: 1, // animating children in normal order,
            type: "spring"
        },
    },
};

const childVariants = {
    hidden: {
        opacity: 0,
        y: 50,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: .22, // duration of the animation
            ease: "easeOut", // easing function
        },
    }
};


const Home = () => {

    const homeSettings = {
        dots: true,
        lazyLoad: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 2000,
    };

    const clientsSettings = {
        dots: false,
        lazyLoad: true,
        infinite: true,
        speed: 280,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1150,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 920,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <>
            <div className='home-container' id='home'>
                <div className='home-slider-container'>
                    <Slider {...homeSettings}>
                        <div>
                            <Image src={s2} alt='' className='home-carousel-img' />
                        </div>
                        <div>
                            <Image src={s1} alt='' className='home-carousel-img' />
                        </div>
                        <div>
                            <Image src={s3} alt='' className='home-carousel-img' />
                        </div>
                    </Slider>
                </div>
                <div className='home-intro-container'>
                    <motion.div
                        className={quicksand.className}
                        variants={divVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false }}
                    >

                        <motion.p variants={childVariants} style={{ margin: 0, marginRight: 10, padding: 0 }} >S P</motion.p>
                        <motion.p variants={childVariants} style={{ margin: 0, marginRight: 10, padding: 0 }} >Solutions</motion.p>
                        <motion.p variants={childVariants} style={{ margin: 0, marginRight: 10, padding: 0, color: "#E00C05" }} >Point</motion.p>
                        <motion.p variants={childVariants} style={{ margin: 0, marginRight: 10, padding: 0, color: "#E00C05" }} >Pvt.</motion.p>
                        <motion.p variants={childVariants} style={{ margin: 0, padding: 0, color: "#E00C05" }} >Ltd.</motion.p>
                    </motion.div>

                    <motion.p
                        className={tiltNeon.className}
                        initial={{ y: 80, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 2, type: "spring" }}
                        // viewport={{ once: false }}
                        style={{ margin: 0, padding: 0, textAlign: 'center', width: "100%" }}
                    >
                        We coordinate with government and corporate clients to assist them with their outsourcing requirements. We offer the industry&apos;s most complete selections of products, systems, software and services to provide customers comprehensive solutions in Information Technology and System-Hardware. We offer a wide range of technology solutions to help businesses improve their operations and stay competitive in today&apos;s fast-paced digital landscape. Our experienced professionals work closely with clients to understand their specific needs and develop customized solutions to meet their goals. Our company strives to provide exceptional customer service and support to ensure the success of its clients.
                    </motion.p>
                </div>
                {/* <div className='home-services-container'>
                    <motion.div
                        className={varelaRound.className}
                        variants={divVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false }}
                    >

                        <motion.p variants={childVariants} style={{ margin: 0, marginRight: 10, padding: 0 }} >Our</motion.p>
                        <motion.p variants={childVariants} style={{ margin: 0, padding: 0, color: "#E00C05" }} >Services</motion.p>
                    </motion.div>
                </div> */}
                <div className='home-clients-container'>
                    <div
                        style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" }}
                    >
                        <motion.div
                            className={`${varelaRound.className} home-clients-heading`}
                            variants={divVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false }}
                        >

                            <motion.p variants={childVariants} style={{ margin: 0, marginRight: 10, padding: 0 }} >Our</motion.p>
                            <motion.p variants={childVariants} style={{ margin: 0, marginRight: 10, padding: 0 }} >Valuable</motion.p>
                            <motion.p variants={childVariants} style={{ margin: 0, padding: 0, color: "#E00C05" }} >Clients</motion.p>
                        </motion.div>
                    </div>

                    <div className='home-clients-slider-container'>
                        <Slider {...clientsSettings}>
                            <div>
                                <Image src={c1} alt='' className='home-clients-img' />
                            </div>
                            <div>
                                <Image src={c2} alt='' className='home-clients-img' />
                            </div>
                            <div>
                                <Image src={c3} alt='' className='home-clients-img' />
                            </div>
                            <div>
                                <Image src={c4} alt='' className='home-clients-img' />
                            </div>
                            <div>
                                <Image src={c5} alt='' className='home-clients-img' />
                            </div>
                            <div>
                                <Image src={c6} alt='' className='home-clients-img' />
                            </div>
                            <div>
                                <Image src={c7} alt='' className='home-clients-img' />
                            </div>
                            <div>
                                <Image src={c8} alt='' className='home-clients-img' />
                            </div>
                            <div>
                                <Image src={c9} alt='' className='home-clients-img' />
                            </div>
                            <div>
                                <Image src={c10} alt='' className='home-clients-img' />
                            </div>
                            <div>
                                <Image src={c11} alt='' className='home-clients-img' />
                            </div>
                            <div>
                                <Image src={c12} alt='' className='home-clients-img' />
                            </div>
                            <div>
                                <Image src={c13} alt='' className='home-clients-img' />
                            </div>
                            <div>
                                <Image src={c14} alt='' className='home-clients-img' />
                            </div>
                            <div>
                                <Image src={c15} alt='' className='home-clients-img' />
                            </div>

                        </Slider>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;

