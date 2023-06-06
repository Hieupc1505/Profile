import { createTheme } from "@mui/material";

export const themePort = createTheme({
    typography: {
        fontFamily: ["Poppins", "sans-serif"].join(","),
        body1: {
            color: "#767676",
            fontWeight: 500,
            fontSize: "17px",
            lineHeight: 1.5,
        },
        caption: {
            display: "block",
            color: "#2d2e32",
            fontSize: "25px",
            lineHeight: 1.4,
            fontWeight: 700,
            marginBottom: "20px",
        },
        title: {
            display: "block",
            fontSize: "17px",
            color: "#147efb",
            fontWeight: 700,
            textTransform: "uppercase",
            marginBottom: "10px",
        },
    },
    palette: {
        primary: {
            main: "#147efb",
        },
        secondary: {
            main: "#8e8e8e", //mau nền của intro
        },
        textBold: {
            main: "#2d2e32",
        },
        introBg: {
            main: "#f9f9f9",
        },
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: `
                @font-face {
                    font-family: 'Poppins';
                    font-style: normal;
                    font-display: swap;
                    font-weight: 400;
                }
            `,
        },
    },
});

declare module "@mui/material/styles" {
    interface Palette {
        textBold: Palette["info"];
        introBg: Palette["info"];
    }

    // allow configuration using `createTheme`
    interface PaletteOptions {
        textBold?: PaletteOptions["info"];
        introBg?: PaletteOptions["info"];
    }
}

// @babel-ignore-comment-in-output Update the Button's color prop options
declare module "@mui/material/Button" {
    interface ButtonPropsColorOverrides {
        textBold: true;
        introBg: true;
    }
}

declare module "@mui/material/styles" {
    interface TypographyVariants {
        title: React.CSSProperties;
    }

    // allow configuration using `createTheme`
    interface TypographyVariantsOptions {
        title?: React.CSSProperties;
    }
}

// Update the Typography's variant prop options
declare module "@mui/material/Typography" {
    interface TypographyPropsVariantOverrides {
        title: true;
    }
}
