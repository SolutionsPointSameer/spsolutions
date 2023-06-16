import { Tilt_Neon, Varela_Round } from "next/font/google";
import Footer from "../Footer";
import Navbar from "../Navbar";
import { motion } from "framer-motion";
import { GiAutoRepair } from "react-icons/gi";
import { FaServer } from "react-icons/fa";
import { TfiWorld } from "react-icons/tfi";
import { TfiUnlock } from "react-icons/tfi";
import { AiOutlineCloudServer } from "react-icons/ai";
import { AiFillFolderOpen } from "react-icons/ai";
import Head from "next/head";
// import Image from "next/image";


const tiltNeon = Tilt_Neon({
    weight: '400',
    subsets: [],
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

const services_data = [
    {
        "icon": GiAutoRepair,
        "title": "AMC, On-SIte Repair & Service Level Agreements"
    },
    {
        "icon": FaServer,
        "title": "Server, UPS Solutions"
    },
    {
        "icon": TfiWorld,
        "title": "Network & Internet Solutions"
    },
    {
        "icon": TfiUnlock,
        "title": "Security & Surveillance Solutions"
    },
    {
        "icon": AiOutlineCloudServer,
        "title": "Cloud Solutions & Virtualization"
    },
    {
        "icon": AiFillFolderOpen,
        "title": "Data Recovery & Disaster Recovery Solutions"
    },
];


const Services = () => {
    return (
        <>
            <Head>
                <title>S P Solutions Point Pvt. Ltd. | Services</title>
                <meta name="description" content="sp solutions point" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.png" />

            </Head>
            <Navbar />
            <div className="services-container">
                <motion.div
                    className={`${varelaRound.className} services-heading`}
                    variants={divVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false }}
                >

                    <motion.p variants={childVariants} style={{ margin: 0, marginRight: 10, padding: 0 }} >What</motion.p>
                    <motion.p variants={childVariants} style={{ margin: 0, marginRight: 10, padding: 0, color: "#E00C05" }} >We</motion.p>
                    <motion.p variants={childVariants} style={{ margin: 0, padding: 0 }} >Offer</motion.p>
                </motion.div>

                <div className="services-child-container">
                    {services_data.map((data) => (
                        <>
                            <div className="services-grand-child-container">
                                {<data.icon style={{ height: 80, width: 80 }} className="services-grand-child-icon" />}
                                <span className={`${tiltNeon.className} services-grand-child-title`}>{data.title}</span>
                            </div>
                        </>
                    )
                    )}
                </div>

            </div>
            <Footer />

        </>
    )
}

export default Services;

