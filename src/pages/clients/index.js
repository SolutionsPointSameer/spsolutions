import { Inter } from "next/font/google";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import { motion } from "framer-motion";
import Image from "next/image";

import c1 from "../../../public/clients/Picture 1.jpg";
import c2 from "../../../public/clients/Picture 2.png";
import c3 from "../../../public/clients/Picture 3.png";
import c4 from "../../../public/clients/Picture 4.jpg";
import c5 from "../../../public/clients/Picture 5.jpg";
import c6 from "../../../public/clients/Picture 6.jpg";
import c7 from "../../../public/clients/Picture 7.png";
import c8 from "../../../public/clients/Picture 8.png";
import c9 from "../../../public/clients/Picture 9.jpg";
import c10 from "../../../public/clients/Picture 10.png";
import c11 from "../../../public/clients/Picture 11.jpg";
import c12 from "../../../public/clients/Picture 12.png";
import c13 from "../../../public/clients/Picture 13.png";
import c14 from "../../../public/clients/Picture 14.jpg";
import c15 from "../../../public/clients/Picture 15.jpg";
import Head from "next/head";

const inter = Inter({
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


const Clients = () => {
    return (
        <>

            <Head>
                <title>S P Solutions Point Pvt. Ltd. | Clients</title>
                <meta name="description" content="sp solutions point" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.png" />

            </Head>

            <Navbar />
            <div className="clients-container">
                <motion.div
                    className={`${inter.className} clients-heading`}
                    variants={divVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false }}
                >

                    <motion.p variants={childVariants} style={{ margin: 0, marginRight: 10, padding: 0 }} >Our</motion.p>
                    <motion.p variants={childVariants} style={{ margin: 0, marginRight: 10, padding: 0, color: "#E00C05" }} >Valuable</motion.p>
                    <motion.p variants={childVariants} style={{ margin: 0, padding: 0 }} >Clients</motion.p>
                </motion.div>

                <div className="clients-child-container">

                    <Image src={c1} alt='' className="clients-child-img" />

                    <Image src={c2} alt='' className="clients-child-img" />

                    <Image src={c3} alt='' className="clients-child-img" />

                    <Image src={c4} alt='' className="clients-child-img" />

                    <Image src={c5} alt='' className="clients-child-img" />

                    <Image src={c6} alt='' className="clients-child-img" />

                    <Image src={c7} alt='' className="clients-child-img" />

                    <Image src={c8} alt='' className="clients-child-img" />

                    <Image src={c9} alt='' className="clients-child-img" />

                    <Image src={c10} alt='' className="clients-child-img" />

                    <Image src={c11} alt='' className="clients-child-img" />

                    <Image src={c12} alt='' className="clients-child-img" />

                    <Image src={c13} alt='' className="clients-child-img" />

                    <Image src={c14} alt='' className="clients-child-img" />

                    <Image src={c15} alt='' className="clients-child-img" />

                </div>
            </div>
            <Footer />

        </>
    )
}

export default Clients;

