import React from "react";
import { profileTheme } from "./theme.profile";
import { ThemeProvider } from "@emotion/react";
import { Typography, Grid, Container } from "@mui/material";
import Details from "./Details";
import Info from "./Info";
// import { theme } from "~/theme";

const Profile = () => {
    return (
        <ThemeProvider theme={profileTheme}>
            {/* <Typography variant="body1">Hello world</Typography>
            <Typography variant="caption">Thông tin liên hệ</Typography> */}
            <Container maxWidth={"lg"}>
                <Grid container>
                    <Grid item xs={4} sx={{ height: "100vh" }}>
                        <Info />
                    </Grid>
                    <Grid item xs={8}>
                        <Details />
                    </Grid>
                </Grid>
            </Container>
        </ThemeProvider>
    );
};

export default Profile;
