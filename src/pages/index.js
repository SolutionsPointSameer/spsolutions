import Head from 'next/head';
import Navbar from './Navbar';
import Home from './Home';
import Footer from './Footer';


// import { Inter } from 'next/font/google';

// const inter = Inter({ subsets: ['latin'] })

const App = () => {
  return (
    <>
      <Head>
        <title>S P Solutions Point Pvt. Ltd.</title>
        <meta name="description" content="sp solutions point" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />

      </Head>

      <Navbar />

      <Home />
      
      <Footer />

    </>
  )
}

export default App;
