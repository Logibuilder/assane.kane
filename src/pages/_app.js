// src/pages/_app.js
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/global.css';
import { ThemeProvider } from '../contexts/ThemeContext';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;