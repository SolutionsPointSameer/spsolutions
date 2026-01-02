import Head from 'next/head';
import Navbar from '@/components/common/Navbar';
import Hero from '@/components/home/Hero';
import Features from '@/components/home/Features';
import Clients from '@/components/home/Clients';
import Footer from '@/components/common/Footer';
import { Box } from '@mantine/core';

const App = () => {
  return (
    <>
      <Head>
        <title>S P Solutions Point Pvt. Ltd.</title>
        <meta name="description" content="SP Solutions Point - Your Partner in Technology Excellence" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navbar />
        
        <Box component="main" sx={{ flex: 1 }}>
            <Hero />
            <Features />
            <Clients />
        </Box>

        <Footer />
      </Box>
    </>
  )
}

export default App;
