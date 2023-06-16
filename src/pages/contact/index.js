import Navbar from "../Navbar";
import Footer from "../Footer";
import { Tilt_Neon, Varela_Round } from "next/font/google";
import { motion } from "framer-motion";
import { MdLocationPin } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { BsTelephoneFill } from "react-icons/bs";
import Head from "next/head";


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

const Contact = () => {
    return (
        <>

            <Head>
                <title>S P Solutions Point Pvt. Ltd. | Contact</title>
                <meta name="description" content="sp solutions point" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.png" />

            </Head>

            <Navbar />

            <div className="contact-container">
                <motion.div
                    className={`${varelaRound.className} contact-heading`}
                    variants={divVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false }}
                >

                    <motion.p variants={childVariants} style={{ margin: 0, marginRight: 10, padding: 0 }} >Get</motion.p>
                    <motion.p variants={childVariants} style={{ margin: 0, marginRight: 10, padding: 0, color: "#E00C05" }} >In</motion.p>
                    <motion.p variants={childVariants} style={{ margin: 0, padding: 0 }} >Touch</motion.p>
                </motion.div>

                <div className="contact-child-container">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d56032.931125017734!2d77.23733495050288!3d28.628017884136387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e0!4m0!4m5!1s0x390cfcacfcc79e51%3A0x7d72281a398e0287!2sS%20P%20SOLUTIONS%20POINT%20PVT%20LTD%2C%20near%20Kotek%20Bank%2C%20Veer%20Savarkar%20Block%2C%20Block%20S1%2C%20Shakarpur%2C%20Delhi!3m2!1d28.6279488!2d77.2786205!5e0!3m2!1sen!2sin!4v1684517251172!5m2!1sen!2sin" className="contact-map" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    <div className="contact-grand-child-container">
                        <div className={tiltNeon.className} ><MdLocationPin style={{ height: 40, width: 40, color: "#26428B" }} /><span>+91 8130494920 - 31, +91 9811281443</span></div>
                        <div className={tiltNeon.className} ><MdEmail style={{ height: 38, width: 38, color: "#26428B" }} /><span>info@solutionspoint.net</span></div>
                        <div className={tiltNeon.className} ><BsTelephoneFill style={{ height: 30, width: 30, color: "#26428B" }} /><span>U-207 3rd Floor Shakarpur Delhi-110092</span></div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}


export default Contact;
