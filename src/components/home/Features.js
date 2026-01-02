import { Container, SimpleGrid, Card, Text, Title, createStyles, ThemeIcon } from '@mantine/core';
import { IconCpu, IconMapPin, IconUsers } from '@tabler/icons-react';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

const useStyles = createStyles((theme) => ({
  section: {
    paddingTop: 80, // Increased padding to separate from hero without white gap (8 * 20px)
    paddingBottom: 80, // 4 * 20px
    backgroundColor: theme.colors.gray[0],
    position: 'relative',
  },
  card: {
    border: 'none',
    backgroundColor: 'transparent',
    textAlign: 'center',
    transition: 'transform 0.2s',
    '&:hover': {
        transform: 'translateY(-5px)',
    }
  },
  iconWrapper: {
    backgroundColor: theme.white,
    padding: 15,
    borderRadius: '50%',
    boxShadow: theme.shadows.sm,
    marginBottom: theme.spacing.md,
    display: 'inline-block',
  },
  title: {
    fontSize: 22,
    fontWeight: 700,
    marginBottom: theme.spacing.xs,
    color: theme.colors.dark[6],
  },
  description: {
    color: theme.colors.gray[6],
    lineHeight: 1.6,
  }
}));

const features = [
  {
    icon: IconCpu,
    title: 'Comprehensive Solutions',
    description: 'From advanced hardware systems to bespoke software integrations, we provide end-to-end technology solutions tailored to your enterprise needs.'
  },
  {
    icon: IconUsers,
    title: 'Expert Coordination',
    description: 'Trusted by government and corporate clients, we excel in managing complex outsourcing requirements with precision and reliability.'
  },
  {
    icon: IconMapPin,
    title: 'Pan-India Presence',
    description: 'Delivering excellence across the nation. Our logistics and support networks ensure your operations are powered by the best technology in India.'
  },
];

const Features = () => {
  const { classes, theme } = useStyles();

  return (
    <div className={classes.section}>
      <Container size="xl">
        <SimpleGrid cols={3} spacing={50} breakpoints={[{ maxWidth: 'md', cols: 1 }]}>
          {features.map((feature, index) => (
            <div key={index} className={classes.card}>
                <div className={classes.iconWrapper}>
                    <ThemeIcon variant="gradient" gradient={{ from: 'brand', to: 'red' }} size={50} radius="xl">
                        <feature.icon size={26} stroke={1.5} />
                    </ThemeIcon>
                </div>
              <Text className={`${classes.title} ${inter.className}`}>
                {feature.title}
              </Text>
              <Text className={`${classes.description} ${inter.className}`}>
                {feature.description}
              </Text>
            </div>
          ))}
        </SimpleGrid>
      </Container>
    </div>
  );
};

export default Features;
