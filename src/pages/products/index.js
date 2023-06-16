import { Tilt_Neon, Varela_Round } from "next/font/google";
import Footer from "../Footer";
import Navbar from "../Navbar";
import { motion } from "framer-motion";
import Image from "next/image";

import p1 from "/public/products/accessories.png";
import p2 from "/public/products/desktop.jpg";
import p3 from "/public/products/laptop.webp";
import p4 from "/public/products/Networking products.jpeg";
import p5 from "/public/products/printer.webp";
import p6 from "/public/products/scanner.webp";
import p7 from "/public/products/server.jpeg";
import p8 from "/public/products/softwares.png";
import p9 from "/public/products/ups.webp";
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


const Products = () => {
    return (
        <>
            <Head>
                <title>S P Solutions Point Pvt. Ltd. | Products</title>
                <meta name="description" content="sp solutions point" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.png" />

            </Head>
            <Navbar />
            <div className="products-container">
                <motion.div
                    className={`${varelaRound.className} products-heading`}
                    variants={divVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false }}
                >

                    <motion.p variants={childVariants} style={{ margin: 0, marginRight: 10, padding: 0 }} >Our</motion.p>
                    <motion.p variants={childVariants} style={{ margin: 0, marginRight: 10, padding: 0, color: "#E00C05" }} >Valuable</motion.p>
                    <motion.p variants={childVariants} style={{ margin: 0, padding: 0 }} >products</motion.p>
                </motion.div>

                <motion.p
                    className={`${tiltNeon.className} products-description`}
                    initial={{ y: 80, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 2, type: "spring" }}
                    // viewport={{ once: false }}
                    style={{ margin: 0, textAlign: 'center', width: "100%" }}
                >
                    We sell a wide variety of IT products from leading brands like HP, Epson, Samsung, Exide, Intel, Dell, Apple, Microsoft, Quick Heal, WD, Lenovo, Acer, Microtek, Brother, Cise, Adobe, D-Link, Gigabyte, Zebronics and many more. We are associates of popular brands like HP, Acer, Epson, Brother, Microtek, Epson, Uniline, Zebronics and Exide on GeM.
                </motion.p>

                <div className="products-child-container">

                    <Image src={p1} alt='' className="products-child-img" />

                    <Image src={p2} alt='' className="products-child-img" />

                    <Image src={p3} alt='' className="products-child-img" />

                    <Image src={p4} alt='' className="products-child-img" />

                    <Image src={p5} alt='' className="products-child-img" />

                    <Image src={p6} alt='' className="products-child-img" />

                    <Image src={p7} alt='' className="products-child-img" />

                    <Image src={p8} alt='' className="products-child-img" />

                    <Image src={p9} alt='' className="products-child-img" />

                </div>
            </div>
            <Footer />

        </>
    )
}

export default Products;

