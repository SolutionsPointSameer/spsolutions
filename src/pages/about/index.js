import Navbar from "../Navbar";
import Footer from "../Footer";
import { Tilt_Neon, Varela_Round } from "next/font/google";
import { motion } from "framer-motion";
import img from "/public/about.png";
import gemRatingImg from "/public/GeM Rating.jpeg";
import Image from "next/image";
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


const About = () => {
    return (
        <>

            <Head>
                <title>S P Solutions Point Pvt. Ltd. | About</title>
                <meta name="description" content="sp solutions point" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.png" />

            </Head>

            <Navbar />

            <div className="about-container">
                <motion.div
                    className={`${varelaRound.className} about-heading`}
                    variants={divVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false }}
                >

                    <motion.p variants={childVariants} style={{ margin: 0, marginRight: 10, padding: 0 }} >Who</motion.p>
                    <motion.p variants={childVariants} style={{ margin: 0, marginRight: 10, padding: 0, color: "#E00C05" }} >We</motion.p>
                    <motion.p variants={childVariants} style={{ margin: 0, padding: 0 }} >Are</motion.p>
                </motion.div>

                <div className="about-child-container">
                    <Image src={img} alt="" className="about-img" />

                    <motion.p
                        className={`${tiltNeon.className} about-description`}
                        initial={{ y: 80, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 2, type: "spring" }}
                        // viewport={{ once: false }}
                        style={{ margin: 0, padding: 0, height: "100%" }}
                    >
                        SP Solutions Point Pvt Ltd coordinates
                        with government and corporate clients
                        to assist them with their outsourcing
                        requirements. The company backed up
                        by an excellent team of dedicated
                        qualified technical, energetic
                        professionals under the leadership of Mr.
                        Sudhir Ranjan who has plenty of
                        expertise in the field of IT, thereby
                        fulfilling all your computing needs.
                        Self-reliance with a flexible approach
                        has played a vital role in our success
                        over the years—every aspect of the
                        Company&apos;s functioning points toward
                        total customer satisfaction.
                    </motion.p>
                </div>

                <Image src={gemRatingImg} alt="" className="about-gem-rating-img" />

            </div>

            <Footer />

        </>
    )
}

export default About;
