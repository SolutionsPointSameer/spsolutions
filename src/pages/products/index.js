
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import { motion } from "framer-motion";
import Image from "next/image";

import computersLaptops from "../../../public/products/computers_laptops.png";
import accessories from "../../../public/products/computer_accessories.png";
import networking from "../../../public/products/networking_products.png";
import printerscanners from "../../../public/products/printers_scanners.png";
import servers from "../../../public/products/servers.png";
import software from "../../../public/products/software_solutions.png";
import ups from "../../../public/products/ups_systems.png";
import Head from "next/head";



const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
        opacity: 1, 
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
};

const products = [
    { id: 1, name: "Computers & Laptops", category: "Computing", image: computersLaptops },
    { id: 2, name: "Computer Accessories", category: "Accessories", image: accessories },
    { id: 3, name: "Networking Products", category: "Networking", image: networking },
    { id: 4, name: "Printers & Scanners", category: "Printing & Imaging", image: printerscanners },
    { id: 5, name: "Servers", category: "Computing", image: servers },
    { id: 6, name: "Software Solutions", category: "Software", image: software },
    { id: 7, name: "UPS Systems", category: "Power Solutions", image: ups }
];

const ProductCard = ({ product, index }) => {
    return (
        <motion.div
            className="product-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
        >
            <div className="product-image-wrapper">
                <Image src={product.image} alt={product.name} className="product-image" />
            </div>
            <div className="product-info">
                <span className="product-category">{product.category}</span>
                <h3 className="product-name">{product.name}</h3>
            </div>
        </motion.div>
    );
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
                {/* Hero Section */}
                <motion.div
                    className="products-hero"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="products-heading">
                        Our <span className="highlight">Products</span>
                    </h1>
                    <p className="products-description">
                        We offer a comprehensive range of IT products from industry-leading brands including HP, Epson, Samsung, Exide, Intel, Dell, Apple, Microsoft, Quick Heal, WD, Lenovo, Acer, Microtek, Brother, Cise, Adobe, D-Link, Gigabyte, and Zebronics. As authorized associates of HP, Acer, Epson, Brother, Microtek, Uniline, Zebronics, and Exide on GeM, we ensure quality and reliability.
                    </p>
                </motion.div>

                {/* Products Grid */}
                <div className="products-grid">
                    {products.map((product, index) => (
                        <ProductCard key={product.id} product={product} index={index} />
                    ))}
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Products;

