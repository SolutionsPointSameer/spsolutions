import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import { Inter } from "next/font/google";
import { motion } from "framer-motion";
import img from "../../../public/about.png";
import gemRatingImg from "../../../public/GeM Rating.jpeg";
import Image from "next/image";
import Head from "next/head";
import { FaAward, FaUsers, FaHandshake, FaLightbulb, FaShieldAlt, FaRocket } from "react-icons/fa";

const inter = Inter({
    subsets: ['latin'],
});

const divVariants = {
    hidden: {
        transition: {
            staggerChildren: .2,
            staggerDirection: -1,
        },
    },
    visible: {
        transition: {
            staggerChildren: .2,
            staggerDirection: 1,
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
            duration: .22,
            ease: "easeOut",
        },
    }
};

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
        opacity: 1, 
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
};

const coreValues = [
    {
        icon: FaAward,
        title: "Excellence",
        description: "Committed to delivering the highest quality solutions"
    },
    {
        icon: FaHandshake,
        title: "Integrity",
        description: "Building trust through transparent and ethical practices"
    },
    {
        icon: FaLightbulb,
        title: "Innovation",
        description: "Embracing cutting-edge technology and creative solutions"
    },
    {
        icon: FaUsers,
        title: "Customer Focus",
        description: "Prioritizing client satisfaction in everything we do"
    },
    {
        icon: FaShieldAlt,
        title: "Reliability",
        description: "Consistent, dependable service you can count on"
    },
    {
        icon: FaRocket,
        title: "Growth",
        description: "Continuously evolving to meet emerging challenges"
    }
];

const stats = [
    { number: "15+", label: "Years of Excellence" },
    { number: "100+", label: "Happy Clients" },
    { number: "50+", label: "Expert Team Members" }
];

const gemRatings = [
    { label: "Buyers' Feedback", score: 5.00, color: "#4CAF50" },
    { label: "Quality", score: 4.96, color: "#2196F3" },
    { label: "Delivery", score: 4.84, color: "#FF9800" }
];

// Circular Flow Diagram Component
const CircularFlowDiagram = () => {
    return (
        <div className="circular-flow-container">
            <svg width="600" height="400" viewBox="0 0 600 400" className="circular-flow-svg">
                {/* Circular path background */}
                <ellipse cx="300" cy="200" rx="200" ry="140" fill="none" stroke="#5B8DBE" strokeWidth="60" />
                
                {/* Arrow 1 - Top Right */}
                <path d="M 450 120 L 520 100 L 500 140 Z" fill="#5B8DBE" />
                <text x="540" y="110" fontSize="32" fontWeight="700" fill="white">01</text>
                
                {/* Arrow 2 - Bottom Left */}
                <path d="M 150 280 L 80 300 L 100 260 Z" fill="#3D5A80" />
                <text x="60" y="310" fontSize="32" fontWeight="700" fill="white">02</text>
                
                {/* Arrow 3 - Bottom Right */}
                <path d="M 450 280 L 520 300 L 500 260 Z" fill="#4A7BA7" />
                <text x="540" y="310" fontSize="32" fontWeight="700" fill="white">03</text>
                
                {/* Service labels */}
                {/* IT Service & Support - Top Left */}
                <rect x="20" y="30" width="200" height="50" fill="#5B8DBE" rx="5" />
                <text x="120" y="62" fontSize="18" fontWeight="600" fill="white" textAnchor="middle">
                    IT Service & Support
                </text>
                
                {/* Sale & Supply of IT Equipment - Top Right */}
                <rect x="520" y="140" width="260" height="50" fill="#3D5A80" rx="5" />
                <text x="650" y="165" fontSize="18" fontWeight="600" fill="white" textAnchor="middle">
                    Sale & Supply
                </text>
                <text x="650" y="185" fontSize="18" fontWeight="600" fill="white" textAnchor="middle">
                    of IT Equipment
                </text>
                
                {/* Manpower Services - Bottom */}
                <rect x="200" y="340" width="200" height="50" fill="#4A7BA7" rx="5" />
                <text x="300" y="372" fontSize="18" fontWeight="600" fill="white" textAnchor="middle">
                    Manpower Services
                </text>
            </svg>
        </div>
    );
};

// Pie Chart Component
const PieChart = ({ data, title, isPercentage = false }) => {
    const total = isPercentage 
        ? data.reduce((sum, item) => sum + item.percentage, 0)
        : data.reduce((sum, item) => sum + item.score, 0);
    let currentAngle = -90; // Start from top

    const slices = data.map((item, index) => {
        const value = isPercentage ? item.percentage : item.score;
        const percentage = isPercentage ? (value / total) * 100 : (value / total) * 100;
        const angle = (percentage / 100) * 360;
        const startAngle = currentAngle;
        const endAngle = currentAngle + angle;
        currentAngle = endAngle;

        // Calculate path for pie slice
        const startX = 150 + 120 * Math.cos((startAngle * Math.PI) / 180);
        const startY = 150 + 120 * Math.sin((startAngle * Math.PI) / 180);
        const endX = 150 + 120 * Math.cos((endAngle * Math.PI) / 180);
        const endY = 150 + 120 * Math.sin((endAngle * Math.PI) / 180);
        const largeArc = angle > 180 ? 1 : 0;

        const pathData = [
            `M 150 150`,
            `L ${startX} ${startY}`,
            `A 120 120 0 ${largeArc} 1 ${endX} ${endY}`,
            `Z`
        ].join(' ');

        return { pathData, color: item.color, percentage: percentage.toFixed(1) };
    });

    const displayValue = isPercentage 
        ? `${total}%`
        : (total / data.length).toFixed(2);

    return (
        <div className="pie-chart-container">
            <svg width="300" height="300" viewBox="0 0 300 300">
                {slices.map((slice, index) => (
                    <path
                        key={index}
                        d={slice.pathData}
                        fill={slice.color}
                        stroke="white"
                        strokeWidth="2"
                        className="pie-slice"
                    />
                ))}
                <circle cx="150" cy="150" r="60" fill="white" />
                <text x="150" y="140" textAnchor="middle" fontSize="14" fontWeight="600" fill="#26428B">
                    {title}
                </text>
                <text x="150" y="170" textAnchor="middle" fontSize="24" fontWeight="700" fill="#E00C05">
                    {displayValue}
                </text>
            </svg>
            <div className="pie-chart-legend">
                {data.map((item, index) => (
                    <div key={index} className="legend-item">
                        <div className="legend-color" style={{ backgroundColor: item.color }}></div>
                        <div className="legend-text">
                            <span className="legend-label">{item.label}</span>
                            <span className="legend-score">
                                {isPercentage ? `${item.percentage}%` : `${item.score.toFixed(2)}/5.00`}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
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
                {/* Hero Section */}
                <motion.div
                    className={`${inter.className} about-heading`}
                    variants={divVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false }}
                >
                    <motion.p variants={childVariants} style={{ margin: 0, marginRight: 10, padding: 0 }}>Who</motion.p>
                    <motion.p variants={childVariants} style={{ margin: 0, marginRight: 10, padding: 0, color: "#E00C05" }}>We</motion.p>
                    <motion.p variants={childVariants} style={{ margin: 0, padding: 0 }}>Are</motion.p>
                </motion.div>

                {/* Company Overview Section */}
                <div className="about-overview-section">
                    <motion.div 
                        className="about-image-container"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <Image src={img} alt="SP Solutions Point" className="about-img" />
                    </motion.div>

                    <motion.div 
                        className="about-content"
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <h2 className={`${inter.className} about-section-title`}>Empowering Businesses Through Technology</h2>
                        <p className={`${inter.className} about-description`}>
                            SP Solutions Point Pvt Ltd is a leading provider of comprehensive IT solutions and infrastructure services. 
                            We coordinate with government and corporate clients to assist them with their technology and outsourcing requirements.
                        </p>
                        <p className={`${inter.className} about-description`}>
                            Backed by an excellent team of dedicated, qualified technical professionals under the leadership of 
                            Mr. Sudhir Ranjan, who brings extensive expertise in the IT field, we fulfill all your computing needs 
                            with precision and excellence.
                        </p>
                        <p className={`${inter.className} about-description`}>
                            Our self-reliance and flexible approach have been instrumental in our success over the years. 
                            Every aspect of our company&apos;s functioning is geared toward total customer satisfaction.
                        </p>
                    </motion.div>
                </div>

                {/* Stats Section */}
                <motion.div 
                    className="about-stats-section"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    {stats.map((stat, index) => (
                        <div key={index} className="about-stat-card">
                            <h3 className={`${inter.className} about-stat-number`}>{stat.number}</h3>
                            <p className={`${inter.className} about-stat-label`}>{stat.label}</p>
                        </div>
                    ))}
                </motion.div>

                {/* Mission & Vision Section */}
                <div className="about-mission-section">
                    <motion.div 
                        className="about-mission-card"
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <h2 className={`${inter.className} about-section-title`}>Our Mission</h2>
                        <p className={`${inter.className} about-description`}>
                            To deliver innovative, reliable, and cost-effective IT solutions that empower businesses 
                            to achieve their goals while maintaining the highest standards of quality and customer service.
                        </p>
                    </motion.div>

                    <motion.div 
                        className="about-vision-card"
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <h2 className={`${inter.className} about-section-title`}>Our Vision</h2>
                        <p className={`${inter.className} about-description`}>
                            To be the most trusted technology partner for government and corporate organizations, 
                            recognized for excellence, innovation, and unwavering commitment to client success.
                        </p>
                    </motion.div>
                </div>

                {/* Core Values Section */}
                <motion.h2 
                    className={`${inter.className} about-values-heading`}
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    Our Core Values
                </motion.h2>

                <div className="about-values-grid">
                    {coreValues.map((value, index) => (
                        <motion.div 
                            key={index}
                            className="about-value-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                        >
                            <value.icon className="about-value-icon" />
                            <h3 className={`${inter.className} about-value-title`}>{value.title}</h3>
                            <p className={`${inter.className} about-value-description`}>{value.description}</p>
                        </motion.div>
                    ))}
                </div>


                {/* GeM Performance Section */}
                <motion.div 
                    className="about-gem-section"
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <h2 className={`${inter.className} about-section-title`}>Our GeM Performance</h2>
                    <PieChart data={gemRatings} title="Rating" isPercentage={false} />
                </motion.div>


            </div>

            <Footer />

        </>
    )
}

export default About;
