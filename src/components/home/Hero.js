
import { motion } from 'framer-motion';
import { Title, Text, Container, Button, Stack, Group, useMantineTheme, Box, Overlay, createStyles } from '@mantine/core';
import Slider from "react-slick";
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import GetStartedModal from '@/components/common/GetStartedModal';


const useStyles = createStyles((theme) => ({
    heroWrapper: {
        position: 'relative',
        height: '600px', // Fixed height for hero
        overflow: 'hidden',
        marginTop: -20, // Negative margin to pull it up if needed, or adjust parent
        width: '100vw',
        marginLeft: 'calc(-50vw + 50%)', // Break out of container
        marginRight: 'calc(-50vw + 50%)',
        [theme.fn.smallerThan('sm')]: {
            height: '500px',
        },
    },
    slide: {
        position: 'relative',
        height: '600px',
        width: '100%',
        [theme.fn.smallerThan('sm')]: {
            height: '500px',
        },
    },
    image: {
        objectFit: 'cover',
        objectPosition: 'center',
        zIndex: 0,
    },
    contentOverlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 2,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'rgba(0, 0, 0, 0.4)', // Dark overlay for text readability
    },
    heroTitle: {
        color: theme.white,
        fontSize: 68,
        fontWeight: 900,
        lineHeight: 1.1,
        textAlign: 'center',
        textShadow: '0 2px 10px rgba(0,0,0,0.3)',
        [theme.fn.smallerThan('md')]: {
            fontSize: 50,
        },
        [theme.fn.smallerThan('sm')]: {
            fontSize: 36,
        },
    },
    heroSubtitle: {
        color: theme.colors.gray[2],
        fontSize: 20,
        maxWidth: 800,
        textAlign: 'center',
        marginTop: theme.spacing.xl,
        textShadow: '0 1px 5px rgba(0,0,0,0.3)',
        [theme.fn.smallerThan('sm')]: {
            fontSize: 16,
            padding: '0 20px',
        },
    },
    carouselDots: {
        bottom: '30px !important',
        '& li button:before': {
            fontSize: '12px',
            color: 'white',
            opacity: 0.5,
        },
        '& li.slick-active button:before': {
            opacity: 1,
            color: 'white',
        },
    }
}));

const Hero = () => {
    const { classes, theme } = useStyles();
    const [modalOpened, setModalOpened] = useState(false);
    
    // Using paths relative to public folder
    const slides = [
        "/slides/hero-red-2.png", // Server room red
        "/slides/hero-red-1-v3.png", // High-Tech Hardware
        "/slides/hero-red-3.png", // Corporate meeting with red accents
    ];

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
        fade: true, // Smooth fade transition
        dotsClass: `slick-dots ${classes.carouselDots}`,
    };

    return (
        <Box className={classes.heroWrapper}>
            <Slider {...sliderSettings}>
                {slides.map((src, index) => (
                    <div key={index} className={classes.slide}>
                        <Image 
                            src={src} 
                            alt={`Solutions Point Hero ${index + 1}`} 
                            fill
                            className={classes.image}
                            priority={index === 0}
                        />
                         {/* We can put the content here if we want it to be static, or outside. 
                             Creating a static overlay over the slider effectively. */}
                    </div>
                ))}
            </Slider>

            <div className={classes.contentOverlay}>
                <Container size="xl">
                    <Stack align="center" spacing={30}>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            <Title className={classes.heroTitle}>
                                Empowering Your <Text span inherit>Digital Future</Text>
                            </Title>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        >
                            <Text className={classes.heroSubtitle}>
                                Delivering comprehensive IT solutions and hardware systems to government and corporate enterprises across the nation.
                            </Text>
                        </motion.div>
                        
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                        >
                            <Group spacing="lg">
                                <Button 
                                    size="xl" 
                                    radius="xl" 
                                    color="brand"

                                    onClick={() => setModalOpened(true)}
                                    sx={{ 
                                        padding: '0 40px', 
                                        boxShadow: '0 4px 14px rgba(0,0,0,0.2)',
                                        '&:hover': { transform: 'translateY(-2px)', boxShadow: '0 6px 20px rgba(0,0,0,0.3)' },
                                        transition: 'all 0.2s'
                                    }}
                                >
                                    Get Started
                                </Button>
                                <Button 
                                    component={Link}
                                    href="/services"
                                    variant="outline" 
                                    size="xl" 
                                    radius="xl" 
 
                                    sx={{ 
                                        color: 'white', 
                                        borderColor: 'rgba(255,255,255,0.5)', 
                                        borderWidth: 2,
                                        '&:hover': { backgroundColor: 'rgba(255,255,255,0.1)', borderColor: 'white' }
                                    }}
                                >
                                    Our Services
                                </Button>
                            </Group>
                        </motion.div>
                    </Stack>
                </Container>
            </div>
            
            <GetStartedModal 
                opened={modalOpened} 
                onClose={() => setModalOpened(false)} 
            />
        </Box>
    );
}

export default Hero;
