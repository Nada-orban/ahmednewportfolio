import '../styles/globals.css'
import { useEffect } from "react";
import { ThemeProvider, CssBaseline } from '@mui/material';
import { ColorModeContext, useMode } from '../../public/theme'
import { useRouter } from 'next/router';
import { styled, useTheme, alpha } from '@mui/material/styles';
import Drawer1 from '../../Components/Drawer1'

import AOS from "aos";

import "aos/dist/aos.css";


export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
      delay: 400,
      duration: 1000,
    });
  }, []);
  const [theme, colorMode] = useMode();
  const router = useRouter();
  const { Path } = router;

  // #212A3E
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Drawer1>
          <Component {...pageProps} />
          <style jsx global>{`
              ${theme.palette.mode === 'dark' ? "body{background:#09090b} " : "body{background: #fff} "}`
          }</style>
        </Drawer1>



      </ThemeProvider>
    </ColorModeContext.Provider>

  )
}
