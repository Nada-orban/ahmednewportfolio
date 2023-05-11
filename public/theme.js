import { createContext, useState, useMemo } from "react";
import { createTheme } from '@mui/material/styles';
import { lightGreen, green, brown, grey, lime, red, blue } from '@mui/material/colors';
import { fontSize } from "@mui/system";

export const themeSettongs = (mode) => {
    return {
        palette: {
            mode: mode,
            ...(mode === "light" ? {
                primary: {
                    main: grey[800],
                },
                secondary: {
                    // main: red[400],
                    main: "#dc965a"
                },
                neutral: {
                    greenlight: green[300],
                    greendark: green[700],
                    green: green[400],
                    red: red[500],
                    blue: blue[900],
                    white: "#fff",
                    skill: "black"
                },
                background: {
                    main: "#fff",
                    secondary: "#fff5ec"
                    // main: "rgb(52, 71, 103)",
                },
                text: {
                    primary: 'black',
                    secondary: grey[500],
                },


            } : {
                primary: {
                    main: grey[800],
                },
                secondary: {
                    // main: red[400],
                    main: "#5bc0be"
                },
                neutral: {
                    lightgray: "#F1F6F9",
                    gray: "#9BA4B5"
                },
                background: {
                    main: "#212121",
                    // secondary: "#05141E"
                    secondary: "#0f172a"
                    // secondary: "#394867"
                }, text: {
                    primary: "white",
                    secondary: grey[500],
                },

            }),

        },
        typography: {
            fontFamily: ['Josefin Sans', 'sans - serif'].join(", "),
            fontSize: 13,

        },

    }
};


export const ColorModeContext = createContext({
    toggleColorMode: () => { }
});

export const useMode = () => {
    const [mode, setMode] = useState("dark");
    const colorMode = useMemo(() => ({
        toggleColorMode: () => {
            setMode((prev) => (prev === "dark" ? "light" : "dark"))
        }
    }), []);
    const theme = useMemo(() => createTheme(themeSettongs(mode)), [mode]);
    return [theme, colorMode];
};