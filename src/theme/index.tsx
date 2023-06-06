import { red } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    fontSize: "0,875rem",
                    fontWeight: 600,
                    borderRadius: 8.5,
                    "&.MuiButton-contained": {
                        backgroundColor: "#009be5",
                        "&:hover": {
                            backgroundColor: "#006db3",
                        },
                    },
                    "&.Muibutton-outlined": {
                        color: "#fff",
                        borderColor: "#fff",
                        "&:hover": {
                            backgroundColor: "transparent",
                        },
                    },
                },
                // contained: {
                //     backgroundColor: "yellow",
                // },
            },
        },
        MuiSvgIcon: {
            styleOverrides: {
                root: {
                    fontsize: "1.7rem",
                },
            },
        },
    },
    // palette: {
    //     white: {
    //         main: "#fff",
    //     },
    // },
    typography: {
        h1: {
            fontSize: "1.6rem",
            fontWeight: 600,
            letterSpacing: "0.5px",
            textTransform: "capitalize",
        },
    },
});

// export default function GlobalThemeOverride() {
//   return (
//     <ThemeProvider theme={theme}>
//       <Button>font-size: 1rem</Button>
//     </ThemeProvider>
//   );
// }
