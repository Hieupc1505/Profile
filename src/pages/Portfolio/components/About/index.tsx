import React from "react";
import {
    Avatar,
    Box,
    Typography,
    styled,
    BoxProps,
    Container,
    TypographyProps,
} from "@mui/material";
import workIcon from "/Portfolio/work.jpg";
import rotateIcon from "/Portfolio/rotate.svg";
const About = () => {
    const CustomAboutMedia = styled(Box)(({ theme }) => ({
        position: "relative",
        width: "43%",
        height: "100%",
        [theme.breakpoints.down("md")]: {
            width: "73.5%",
            display: "flex",
            justifyContent: "center",
            marginBottom: "35px",
        },
    }));

    const CustomAboutContent = styled(Box)(({ theme }) => ({
        width: "57%",
        height: "100%",
        [theme.breakpoints.down("md")]: {
            textAlign: "center",
            width: "75%",
        },
    }));

    const BoxRotate = styled(Box)<BoxProps>(({ theme }) => ({
        position: "absolute",
        right: "16px",
        bottom: "-69px",
        width: "41.3%",
        background: "white",
        borderRadius: "50%",
        animation: "rotate 9s linear infinite",
        "@keyframes rotate": {
            to: {
                transform: "rotate(360deg)",
            },
        },
        [theme.breakpoints.down("md")]: {
            display: "none",
        },
    }));
    const BoxWrap = styled(Box)(({ theme }) => ({
        padding: "150px 40px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "655px",
        [theme.breakpoints.down("md")]: {
            flexDirection: "column",
            alignItems: "center",
            padding: "80px 0",
            height: "auto",
        },
    }));

    const CustomTypography = styled(Typography)<TypographyProps>(
        ({ theme }) => ({
            position: "absolute",
            zIndex: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            bottom: "-12px",
            right: "67px",
            fontSize: "66px",
            [theme.breakpoints.down("md")]: {
                display: "none",
                fontSize: "38px",
            },
            [theme.breakpoints.between("md", "lg")]: {
                fontSize: "38px",
            },
        })
    );

    return (
        <Container maxWidth="lg">
            <BoxWrap id="about">
                <CustomAboutMedia
                    sx={{
                        filter: `drop-shadow(0 24px 48px rgba(145 158 171 / .3))`,
                    }}
                >
                    <Avatar
                        src={
                            "https://cdn.vectorstock.com/i/1000v/52/20/teamwork-online-home-office-team-communication-vector-32375220.jpg"
                        }
                        alt="workTable"
                        sx={{
                            height: "100%",
                            width: "83%",
                            borderRadius: "17px",
                        }}
                        variant="square"
                    />
                    {/* <Avatar
                        src={workIcon}
                        alt="workTable"
                        sx={{
                            height: "100%",
                            width: "83%",
                            borderRadius: "17px",
                        }}
                        variant="square"
                    /> */}
                    <BoxRotate>
                        <Avatar
                            variant="square"
                            src={rotateIcon}
                            alt={"full-stack"}
                            sx={{
                                width: "100%",
                                height: "100%",
                            }}
                        />
                    </BoxRotate>
                    <CustomTypography>🧑‍💻</CustomTypography>
                </CustomAboutMedia>
                <CustomAboutContent>
                    <Typography variant={"title"} component="h2">
                        GIỚI THIỆU
                    </Typography>
                    <Typography variant="caption">
                        Một lập trình viên chuyên về thiết kế ứng dụng WEB trong
                        tương lai 📍
                    </Typography>
                    <Typography variant="body1" component={"blockquote"}>
                        Với tư cách là Nhà phát triển Full-Stack Web, tôi có
                        kiến thức về các công nghệ web như HTML, CSS,
                        JavaScript, React, Node.js, Express và MongoDB. Tôi có
                        khả năng thiết kế và phát triển các ứng dụng web đầy đủ
                        chức năng, từ phía front-end đến back-end, đồng thời tối
                        ưu hóa hiệu suất và đảm bảo tính bảo mật cho ứng dụng.
                        Tôi cũng có kinh nghiệm trong việc làm việc với các công
                        cụ và kỹ thuật phát triển tiên tiến như Git, Docker và
                        Redis để tạo ra các sản phẩm web chất lượng cao.
                    </Typography>
                </CustomAboutContent>
            </BoxWrap>
        </Container>
    );
};

export default About;
