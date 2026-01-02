import Slider from "react-slick";
import Image from 'next/image';
import { Container, Title, Box, useMantineTheme } from '@mantine/core';
import { Inter } from 'next/font/google';
import { motion } from 'framer-motion';

const inter = Inter({
    subsets: ['latin'],
});


const Clients = () => {
    const theme = useMantineTheme();

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    const clients = [
        '/clients/Picture 1.jpg',
        '/clients/Picture 2.png',
        '/clients/Picture 3.png',
        '/clients/Picture 4.jpg',
        '/clients/Picture 5.jpg',
        '/clients/Picture 6.jpg',
        '/clients/Picture 7.png',
        '/clients/Picture 8.png',
        '/clients/Picture 9.jpg',
        '/clients/Picture 10.png',
        '/clients/Picture 11.jpg',
        '/clients/Picture 12.png',
        '/clients/Picture 13.png',
        '/clients/Picture 14.jpg',
        '/clients/Picture 15.jpg',
    ];

    return (
        <Box sx={{ backgroundColor: theme.white, padding: '60px 0' }}>
            <Container size="xl">
                 <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <Title order={2} align="center" mb={50} className={inter.className}>
                        Our Valuable <span style={{ color: theme.colors.brand[6] }}>Clients</span>
                    </Title>
                </motion.div>

                <Slider {...settings}>
                    {clients.map((client, index) => (
                        <div key={index} style={{ padding: '0 20px', display: 'flex', justifyContent: 'center' }}>
                             <div style={{ height: 100, width: '100%', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <Image 
                                    src={client} 
                                    alt={`Client ${index + 1}`} 
                                    fill
                                    sizes="150px"
                                    style={{ 
                                        objectFit: 'contain',
                                        // filter: 'grayscale(100%)', // Removed grayscale as user wants them to look good
                                        mixBlendMode: 'multiply', // Helps with white backgrounds
                                        transition: 'transform 0.3s ease',
                                    }}
                                    className="client-logo"
                                />
                             </div>
                        </div>
                    ))}
                </Slider>
            </Container>
        </Box>
    );
};

export default Clients;
