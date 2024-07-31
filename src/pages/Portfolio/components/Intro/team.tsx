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
    Button,
} from "@mui/material";
import { themePort } from "../../theme.Portfolio";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import avatar from "/Portfolio/avatar.jpg";
import Skills from "../Skills";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
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
        height: "480px",
        width: "480px",
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
                background: `linear-gradient(to bottom, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)),url(https://zone-ui.vercel.app/assets/background/overlay_1.jpg)`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center center",
            }}
        >
            <Container maxWidth="lg">
                <CustomBoxMd id="home">
                    <GridContainer container>
                        <Grid
                            item
                            lg={6}
                            xs={12}
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            {/* <CustomAvatar src={avatar} alt="avatar" /> */}
                            <CustomAvatar
                                src={
                                    "https://zone-ui.vercel.app/assets/images/home/home_hero.png"
                                }
                                alt="avatar"
                            />
                        </Grid>
                        <GridContent
                            item
                            lg={6}
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
                                    WebMakers là một team độc lập chuyên phát
                                    triển các giải pháp web toàn diện. Với niềm
                                    đam mê và kinh nghiệm phong phú, chúng tôi
                                    luôn nỗ lực không ngừng để mang đến những
                                    sản phẩm chất lượng, đáp ứng nhu cầu và vượt
                                    qua mong đợi của khách hàng. Chúng tôi tin
                                    rằng mỗi dự án là một cơ hội để sáng tạo và
                                    cải tiến, từ đó giúp khách hàng của chúng
                                    tôi thành công hơn trên môi trường trực
                                    tuyến. 📍
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
                                <Button
                                    sx={{
                                        borderColor: "currentColor",
                                        boxShadow: "none",
                                        color: "#FFFFFF",
                                        backgroundColor: "#212B36",
                                        height: "48px",
                                        padding: "8px 22px",
                                        borderRadius: "8px",
                                        fontSize: "15px",
                                        paddingLeft: "16px",
                                        paddingRight: "16px",
                                        textTransform: "capitalize",
                                        "&:hover": {
                                            background: "#454F5B",
                                        },
                                    }}
                                    endIcon={<OpenInNewIcon />}
                                >
                                    Liên Hệ Ngay
                                </Button>
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
