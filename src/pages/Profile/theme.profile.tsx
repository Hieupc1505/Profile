import { red } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

export const profileTheme = createTheme({
    palette: {
        primary: {
            main: "#F22F2F",
            light: "rgba(242, 47, 47, 0.1)",
            dark: "#555555",
        },
        secondary: {
            main: "#ffe8c4", //màu divider
        },
        info: {
            main: "#9C9C9C", //màu chữ xám
        },
    },

    typography: {
        caption: {
            color: "#f22f2f",
            fontSize: "18px",
            fontWeight: 600,
        },
        body1: {
            fontSize: "14px",
            color: "#666666",
            lineHeight: "25px",
        },
    },
});
