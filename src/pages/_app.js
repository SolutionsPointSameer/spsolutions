import '@/styles/globals.css';
import '@/styles/navbar.css';
import '@/styles/home.css';
import '@/styles/footer.css';
import '@/styles/about.css';
import '@/styles/services.css';
import '@/styles/clients.css';
import '@/styles/careers.css';
import '@/styles/products.css';
import '@/styles/contact.css';

import { MantineProvider } from '@mantine/core';
import { theme } from '../theme';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import PageLoader from '@/components/common/PageLoader';

export default function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Hide loader after initial page load
    const handleInitialLoad = () => {
      setLoading(false);
    };

    // Set a timeout to ensure smooth initial load
    const timer = setTimeout(handleInitialLoad, 1000);

    // Router event handlers for page transitions
    const handleRouteChangeStart = () => setLoading(true);
    const handleRouteChangeComplete = () => setLoading(false);
    const handleRouteChangeError = () => setLoading(false);

    router.events.on('routeChangeStart', handleRouteChangeStart);
    router.events.on('routeChangeComplete', handleRouteChangeComplete);
    router.events.on('routeChangeError', handleRouteChangeError);

    return () => {
      clearTimeout(timer);
      router.events.off('routeChangeStart', handleRouteChangeStart);
      router.events.off('routeChangeComplete', handleRouteChangeComplete);
      router.events.off('routeChangeError', handleRouteChangeError);
    };
  }, [router]);

  return (
    <MantineProvider theme={theme} withGlobalStyles withNormalizeCSS>
      <PageLoader loading={loading} />
      <Component {...pageProps} />
    </MantineProvider>
  );
}
