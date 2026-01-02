import Image from "next/image";
import LOGO from "../../../public/LOGO-FOOTER.png";
import { Inter } from "next/font/google";
import { Box, Container, Grid, Text, Stack, Group, createStyles, ActionIcon } from '@mantine/core';
import Link from "next/link";
import { 
    IconPhone, 
    IconMail, 
    IconMapPin, 
    IconBrandFacebook, 
    IconBrandTwitter, 
    IconBrandLinkedin, 
    IconBrandInstagram 
} from '@tabler/icons-react';

const inter = Inter({ subsets: ['latin'] });

const useStyles = createStyles((theme) => ({
    footer: {
        marginTop: 0,
        background: 'linear-gradient(135deg, #1A2A4B 0%, #26428B 100%)',
        paddingTop: 80,
        paddingBottom: theme.spacing.xl * 2,
        color: theme.white,
        position: 'relative',
        overflow: 'hidden',

        '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '4px',
            background: `linear-gradient(90deg, transparent, #E00C05, transparent)`,
        }
    },
    
    logoSection: {
        [theme.fn.smallerThan('sm')]: {
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginBottom: theme.spacing.xl * 2,
        },
    },

    title: {
        fontSize: '1.2rem',
        fontWeight: 700,
        marginBottom: theme.spacing.lg,
        color: theme.white,
        letterSpacing: '0.5px',
        textTransform: 'uppercase',
    },

    link: {
        display: 'block',
        color: 'rgba(255, 255, 255, 0.7)',
        fontSize: theme.fontSizes.md,
        padding: '6px 0',
        textDecoration: 'none',
        transition: 'all 0.3s ease',
        fontFamily: inter.style.fontFamily,

        '&:hover': {
            color: '#E00C05',
            transform: 'translateX(5px)',
            paddingLeft: '5px',
        },
    },

    contactItem: {
        display: 'flex',
        alignItems: 'center',
        gap: theme.spacing.md,
        color: 'rgba(255, 255, 255, 0.7)',
        fontSize: theme.fontSizes.md,
        padding: '8px 0',
        transition: 'color 0.2s ease',

        '&:hover': {
            color: theme.white,
        }
    },

    socialIcon: {
        backgroundColor: 'rgba(255, 255, 255, 0.05)',
        color: theme.white,
        transition: 'all 0.3s ease',
        border: '1px solid rgba(255, 255, 255, 0.1)',

        '&:hover': {
            backgroundColor: '#E00C05',
            transform: 'translateY(-3px)',
            borderColor: '#E00C05',
            color: 'white'
        },
    },

    afterFooter: {
        marginTop: theme.spacing.xl * 4,
        paddingTop: theme.spacing.xl,
        paddingBottom: theme.spacing.xl,
        borderTop: `1px solid rgba(255, 255, 255, 0.1)`,
    },

    copyright: {
        color: 'rgba(255, 255, 255, 0.4)',
        fontSize: theme.fontSizes.sm,
        textAlign: 'center',
        fontFamily: inter.style.fontFamily,
    }
}));

const Footer = () => {
    const { classes } = useStyles();

    const socials = [
        { icon: IconBrandFacebook, link: '#' },
        { icon: IconBrandTwitter, link: '#' },
        { icon: IconBrandLinkedin, link: '#' },
        { icon: IconBrandInstagram, link: '#' },
    ];

    return (
        <Box component="footer" className={classes.footer}>
            <Container size="xl">
                <Grid gutter={50}>
                    {/* Brand Section */}
                    <Grid.Col md={6} sm={12}>
                        <div className={classes.logoSection}>
                            <Image src={LOGO} alt="SP Solutions Point" height={60} width={60} style={{ marginBottom: 20 }} />
                            <Text className={inter.className} size="xl" weight={700} color="white" mb={15} sx={{ fontSize: '1.5rem' }}>
                                S P Solutions Point Pvt. Ltd.
                            </Text>
                            <Text size="sm" mb={25} sx={{ color: 'rgba(255, 255, 255, 0.6)', maxWidth: 350, lineHeight: 1.7 }}>
                                Delivering excellence in IT solutions, hardware infrastructure, and strategic outsourcing services for government and corporate sectors since inception.
                            </Text>
                            <Group spacing="md">
                                {socials.map((social, index) => (
                                    <ActionIcon 
                                        key={index}
                                        component="a" 
                                        href={social.link} 
                                        size="lg" 
                                        radius="md" 
                                        className={classes.socialIcon}
                                    >
                                        <social.icon size={20} stroke={1.5} />
                                    </ActionIcon>
                                ))}
                            </Group>
                        </div>
                    </Grid.Col>

                    {/* Contact Section */}
                    <Grid.Col md={6} sm={12} sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                        <Stack spacing="lg" align="flex-start">
                             <Text className={`${inter.className} ${classes.title}`} mb={0}>Contact info</Text>
                            <div className={classes.contactItem}>
                                <IconPhone size={24} stroke={1.5} color="#E00C05" />
                                <Box>
                                    <Text size="xs" color="dimmed" sx={{ textTransform: 'uppercase', fontWeight: 700, letterSpacing: '1px', color: 'rgba(255,255,255,0.4)' }}>Call Us</Text>
                                    <Text weight={500} size="lg">+91 8130494920 - 31</Text>
                                </Box>
                            </div>
                            <div className={classes.contactItem}>
                                <IconMail size={24} stroke={1.5} color="#E00C05" />
                                <Box>
                                    <Text size="xs" color="dimmed" sx={{ textTransform: 'uppercase', fontWeight: 700, letterSpacing: '1px', color: 'rgba(255,255,255,0.4)' }}>Email Us</Text>
                                    <Text weight={500} size="lg">info@solutionspoint.net</Text>
                                </Box>
                            </div>
                            <div className={classes.contactItem}>
                                <IconMapPin size={24} stroke={1.5} color="#E00C05" />
                                <Box>
                                    <Text size="xs" color="dimmed" sx={{ textTransform: 'uppercase', fontWeight: 700, letterSpacing: '1px', color: 'rgba(255,255,255,0.4)' }}>Location</Text>
                                    <Text weight={500} size="lg">U-207 3rd Floor Shakarpur Delhi-110092</Text>
                                </Box>
                            </div>
                        </Stack>
                    </Grid.Col>
                </Grid>

                <div className={classes.afterFooter}>
                    <Text className={classes.copyright}>
                        &copy; {new Date().getFullYear()} S P Solutions Point Pvt. Ltd. All rights reserved.
                    </Text>
                </div>
            </Container>
        </Box>
    );
}

export default Footer;
