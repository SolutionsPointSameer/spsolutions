import { Box, Loader, createStyles, keyframes } from '@mantine/core';
import Image from 'next/image';


const pulse = keyframes({
    '0%, 100%': { opacity: 1, transform: 'scale(1)' },
    '50%': { opacity: 0.8, transform: 'scale(0.95)' },
});

const fadeIn = keyframes({
    from: { opacity: 0 },
    to: { opacity: 1 },
});

const fadeOut = keyframes({
    from: { opacity: 1 },
    to: { opacity: 0 },
});

const useStyles = createStyles((theme) => ({
    loaderContainer: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: '#ffffff',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999,
        opacity: 1,
        '&.fade-out': {
            animation: `${fadeOut} 0.5s ease-out forwards`,
        },
    },
    logoWrapper: {
        position: 'relative',
        width: 150,
        height: 60,
        marginBottom: 40,
        animation: `${pulse} 2s ease-in-out infinite`,
        [theme.fn.smallerThan('sm')]: {
            width: 120,
            height: 48,
        },
    },
    spinnerWrapper: {
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    gradientSpinner: {
        '& svg': {
            stroke: 'url(#gradient)',
        },
    },
}));

const PageLoader = ({ loading = true }) => {
    const { classes, cx } = useStyles();

    if (!loading) return null;

    return (
        <Box className={cx(classes.loaderContainer, { 'fade-out': !loading })} style={{ opacity: 1 }}>
            <svg width="0" height="0">
                <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#E00C05" />
                        <stop offset="100%" stopColor="#26428B" />
                    </linearGradient>
                </defs>
            </svg>
            
            <Box className={classes.logoWrapper}>
                <Image
                    src="/LOGO.png"
                    alt="SP Solutions Point"
                    fill
                    style={{ objectFit: 'contain' }}
                    priority
                    unoptimized
                />
            </Box>
            
            <Box className={classes.spinnerWrapper}>
                <Loader 
                    size="lg" 
                    variant="dots"
                    color="brand"
                />
            </Box>
        </Box>
    );
};

export default PageLoader;
