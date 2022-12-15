import Router, { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function MyApp({ Component, pageProps }) {
  const { isLoading } = useLoading();
  return <>{isLoading ? <p>Loading...</p> : <Component {...pageProps} />}</>;
}

const useLoading = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const routeEventStart = () => {
    setIsLoading(true);
  };

  const routeEventEnd = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    router.events.on('routeChangeStart', routeEventStart);
    router.events.on('routeChangeComplete', routeEventEnd);

    return () => {
      console.log('trace 5');
      router.events.off('routeChangeStart', routeEventStart);
      router.events.off('routeChangeComplete', routeEventEnd);
    };
  }, []);

  return { isLoading };
};
