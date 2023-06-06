import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Slide from "@mui/material/Slide";
import { IconButton, styled, Box, Button } from "@mui/material";
import Navbar from "../NavBar";
interface Props {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window?: () => Window;
    children: React.ReactElement;
}
interface PropsHeader {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window?: () => Window;
    children?: React.ReactElement;
}

function HideOnScroll(props: Props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
    });

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}

export default function Header(props: PropsHeader) {
    const CustomAppBar = styled(AppBar)(({ theme }) => ({
        padding: theme.spacing(3, 6, 3, 6),
        backgroundColor: "#fff",
    }));

    return (
        <React.Fragment>
            <CssBaseline />
            <HideOnScroll {...props}>
                <CustomAppBar>
                    <Toolbar>
                        <Typography
                            variant="caption"
                            component="div"
                            sx={{ marginBottom: 0 }}
                        >
                            VanHieu.dev
                        </Typography>
                        <Box sx={{ flexGrow: 1 }}></Box>

                        <Navbar />
                    </Toolbar>
                </CustomAppBar>
            </HideOnScroll>
        </React.Fragment>
    );
}
