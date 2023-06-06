import React from "react";
import {
    Box,
    Typography,
    styled,
    Container,
    Grid,
    GridProps,
    Avatar,
    AvatarProps,
    Link,
} from "@mui/material";
import { themePort } from "../../theme.Portfolio";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import avatar from "/Portfolio/avatar.jpg";
import Skills from "../Skills";
const Intro = () => {
    const { palette } = themePort;
    const CustomTitle = styled("h1")(({ theme }) => ({
        fontSize: "55px",
        fontWeight: 700,
        color: palette.textBold.main,
        marginBottom: 0,
        [theme.breakpoints.between("md", "lg")]: {
            width: "70%",
            textAlign: "center",
        },
    }));

    const CustomAvatar = styled(Avatar)<AvatarProps>(({ theme }) => ({
        height: "344px",
        width: "344px",
        borderRadius: "60% 40% 30% 70%/60% 30% 70% 40%",
        border: "3px solid #2d2e32",
        animation: "morph 8s ease-in-out infinite",
        position: "relative",
        transition: "all 1s ease-in-out",

        "& img": {
            scale: "1.25",
        },
        "@keyframes morph": {
            "0%": {
                bordeRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
            },
            "50%": {
                borderRadius: "30% 60% 70% 40% / 50% 60% 30% 60%",
            },

            "100%": {
                borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
            },
        },
    }));

    const CustomBoxMd = styled(Box)(({ theme }) => ({
        [theme.breakpoints.down("md")]: {
            padding: "144px 80px 100px",
        },
    }));

    const CustomBoxContent = styled(Box)(({ theme }) => ({
        display: "flex",
        alignItems: "flex-start",
        flexDirection: "column",
        gap: "20px",
        [theme.breakpoints.down("lg")]: {
            justifyContent: "center",
            alignItems: "center",
        },
    }));

    const GridContainer = styled(Grid)<GridProps>(({ theme }) => ({
        position: "relative",
        flexDirection: "row-reverse",
        height: "100vh",
        alignItems: "stretch",
        [theme.breakpoints.down("md")]: {
            height: "auto",
        },
        [theme.breakpoints.between("md", "lg")]: {
            display: "block",
            padding: "175px 60px",
            height: "auto",
        },
    }));

    const GridContent = styled(Grid)<GridProps>(({ theme }) => ({
        [theme.breakpoints.down("md")]: {
            alignItems: "flex-start",
            textAlign: "center",
            marginBottom: "40px",
        },
    }));

    const GridSkills = styled(Grid)<GridProps>(({ theme }) => ({
        position: "absolute",
        bottom: "50px",
        left: 0,
        [theme.breakpoints.down("lg")]: {
            position: "initial",
            paddingTop: "24px",
        },
    }));

    const CustomIntro = styled(Typography)(({ theme }) => ({
        width: "80%",
        [theme.breakpoints.down("lg")]: {
            textAlign: "center",
            width: "auto",
        },
    }));

    return (
        <Box
            sx={{
                minHeight: "100vh",
                backgroundColor: "#e6e6e6b8",
                // marginTop: "24px",
            }}
        >
            <Container maxWidth="lg">
                <CustomBoxMd id="home">
                    <GridContainer container>
                        <Grid
                            item
                            lg={5}
                            xs={12}
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <CustomAvatar src={avatar} alt="avatar" />
                        </Grid>
                        <GridContent
                            item
                            lg={7}
                            xs={12}
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <CustomBoxContent>
                                <CustomTitle>
                                    Full-Stack WEB DEVELOPER 👋
                                </CustomTitle>
                                <CustomIntro>
                                    Xin chào, tôi là Văn Hiệu. Một Full-Stack
                                    Web Developer trong tương lai, rất vui vì
                                    bạn đã ghé thăm. 📍
                                </CustomIntro>
                                <Box color={themePort.palette.textBold.main}>
                                    <Link
                                        href="#"
                                        underline="none"
                                        color={"#2d2e32"}
                                    >
                                        <InstagramIcon
                                            sx={{ marginRight: "10px" }}
                                            fontSize="large"
                                        />
                                    </Link>
                                    <Link
                                        href="https://github.com/Hieupc1505"
                                        underline="none"
                                        color={"#2d2e32"}
                                    >
                                        <GitHubIcon fontSize="large" />
                                    </Link>
                                </Box>
                            </CustomBoxContent>
                        </GridContent>

                        <GridSkills item xs={12}>
                            <Skills />
                        </GridSkills>
                    </GridContainer>
                </CustomBoxMd>
            </Container>
        </Box>
    );
};

export default Intro;
