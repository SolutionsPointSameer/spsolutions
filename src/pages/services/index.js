
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import { motion } from "framer-motion";
import { GiAutoRepair, GiBrain } from "react-icons/gi";
import { FaServer, FaMobileAlt, FaLaptopCode } from "react-icons/fa";
import { TfiWorld } from "react-icons/tfi";
import { TfiUnlock } from "react-icons/tfi";
import { AiOutlineCloudServer } from "react-icons/ai";
import { AiFillFolderOpen } from "react-icons/ai";
import { HiLightBulb } from "react-icons/hi";
import Head from "next/head";



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
        "title": "AMC, On-Site Repair & Service Level Agreements",
        "description": "Comprehensive maintenance and support services"
    },
    {
        "icon": GiBrain,
        "title": "AI Consultancy",
        "description": "Leverage cutting-edge AI solutions to transform your business"
    },
    {
        "icon": FaLaptopCode,
        "title": "Web Development & Digital Solutions",
        "description": "Modern, responsive web applications tailored to your needs"
    },

    {
        "icon": HiLightBulb,
        "title": "IT Consulting & Strategy",
        "description": "Strategic technology guidance for business growth"
    },
    {
        "icon": FaServer,
        "title": "Server & UPS Solutions",
        "description": "Reliable server infrastructure and power backup systems"
    },
    {
        "icon": TfiWorld,
        "title": "Network & Internet Solutions",
        "description": "Robust networking infrastructure for seamless connectivity"
    },
    {
        "icon": TfiUnlock,
        "title": "Security & Surveillance Solutions",
        "description": "Advanced security systems to protect your assets"
    },
    {
        "icon": AiOutlineCloudServer,
        "title": "Cloud Solutions & Virtualization",
        "description": "Scalable cloud infrastructure and virtual environments"
    },
    {
        "icon": AiFillFolderOpen,
        "title": "Data Recovery & Disaster Recovery Solutions",
        "description": "Protect and recover your critical business data"
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
                    className="services-heading"
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
                    {services_data.map((data, index) => (
                        <div key={index} className="services-grand-child-container">
                            {<data.icon style={{ height: 80, width: 80 }} className="services-grand-child-icon" />}
                            <span className="services-grand-child-title">{data.title}</span>
                            <p className="services-grand-child-description">{data.description}</p>
                        </div>
                    )
                    )}
                </div>

            </div>
            <Footer />

        </>
    )
}

export default Services;

