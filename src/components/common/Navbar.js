import Link from "next/link";
import { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Header, Container, Group, Burger, Paper, Text, Button, Box, useMantineTheme } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import LOGO from "../../../public/LOGO.png";

const HEADER_HEIGHT = 80;

const Navbar = () => {
    const [opened, { toggle, close }] = useDisclosure(false);
    const theme = useMantineTheme();

    const items = [
        { label: "Home", link: "/" },
        { label: "About", link: "/about" },
        { label: "Services", link: "/services" },
        { label: "Products", link: "/products" },
        { label: "Careers", link: "/careers" },
        { label: "Contact", link: "/contact" },
    ];

    const itemsList = items.map((item) => (
        <Link 
            key={item.label} 
            href={item.link} 
            style={{ 
                textDecoration: 'none',
                color: theme.colors.gray[7],
                fontSize: theme.fontSizes.sm,
                fontWeight: 500,
                padding: '8px 12px',
                borderRadius: theme.radius.sm,
                transition: 'background-color 0.2s ease',
            }}
            onClick={close}
        >
            <Text 
                span
                sx={(theme) => ({
                    '&:hover': {
                        backgroundColor: theme.colors.gray[0],
                        color: theme.colors.brand[6],
                    }
                })}
            >
                {item.label}
            </Text>
        </Link>
    ));

    return (
        <Header height={HEADER_HEIGHT} sx={{ borderBottom: 0 }} mb={120} fixed zIndex={100}>
            <Container size="xl" h="100%" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 10 }}>
                    <Image src={LOGO} alt="SP Solutions Point" height={46} width={46} />
                    <Text
                        size="lg" 
                        weight={700}
                        color="dark"
                        sx={{
                            '@media (max-width: 500px)': {
                                display: 'none',
                            },
                        }}
                    >
                        S P Solutions Point Pvt. Ltd.
                    </Text>
                </Link>

                <Group spacing={5} sx={{ 
                    '@media (max-width: 768px)': { display: 'none' },
                    '@media (min-width: 769px)': { display: 'flex' }
                }}>
                    {itemsList}
                </Group>

                <Burger 
                    opened={opened} 
                    onClick={toggle} 
                    sx={{ 
                        '@media (max-width: 768px)': { display: 'block' },
                        '@media (min-width: 769px)': { display: 'none' }
                    }} 
                    size="sm" 
                />

                <AnimatePresence>
                    {opened && (
                        <Paper
                            component={motion.div}
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.2 }}
                            shadow="md"
                            p="md"
                            sx={{
                                position: 'absolute',
                                top: HEADER_HEIGHT,
                                left: 0,
                                right: 0,
                                zIndex: 99,
                                borderTop: `1px solid ${theme.colors.gray[2]}`,
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '10px',
                            }}
                        >
                            {itemsList}
                        </Paper>
                    )}
                </AnimatePresence>

            </Container>
        </Header>
    );
}

export default Navbar;
