import '../styles/globals.css'
import { useEffect } from "react";
import { ThemeProvider, CssBaseline } from '@mui/material';
import { ColorModeContext, useMode } from '../../public/theme'
import { useRouter } from 'next/router';
import { styled, useTheme, alpha } from '@mui/material/styles';
import Drawer1 from '../../Components/Drawer1'
import { Kanit } from 'next/font/google'


import AOS from "aos";

import "aos/dist/aos.css";

const kanit = Kanit({
  weight: '400',
  subsets: ['latin'],
});

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
  //#030218de
  // #212A3E
  //#050416de
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <main className={kanit.className}><Component {...pageProps} /></main>


        <style jsx global>{`
              ${theme.palette.mode === 'dark' ? "body{background:#FFFFFF!important} " : "body{background: #fff} "}`
        }</style>




      </ThemeProvider>
    </ColorModeContext.Provider>

  )
}
