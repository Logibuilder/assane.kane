import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { useEffect } from 'react';
import '../styles/global.css';
export default function App({ Component, pageProps }) {
  useEffect(() => {
    // Charger Bootstrap JS seulement côté client
    import('bootstrap/dist/js/bootstrap.bundle.min');
    }, []);
  return <Component {...pageProps} />;
}
