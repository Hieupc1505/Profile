import React from "react";
import {
    Typography,
    Stack,
    styled,
    Container,
    Box,
    Avatar,
    Paper,
    ListItemText,
} from "@mui/material";
import AttachEmailIcon from "@mui/icons-material/AttachEmail";
import MapIcon from "@mui/icons-material/Map";
import { themePort } from "../../theme.Portfolio";
const Contact = () => {
    const CustomPaper = styled(Paper)(({ theme }) => ({
        width: "78px",
        height: "78px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "999px",
    }));

    const BoxWrap = styled(Box)(({ theme }) => ({
        padding: "110px 0",
        [theme.breakpoints.down("md")]: {
            textAlign: "center",
        },
    }));

    const BoxItem = styled(Box)(({ theme }) => ({
        display: "flex",
        gap: "15px",
        alignItems: "center",
        justifyContent: "center",
        [theme.breakpoints.down("md")]: {
            flexDirection: "column",
        },
    }));

    const CustomStack = styled(Stack)(({ theme }) => ({
        flexDirection: "row",
        gap: "80px",
        [theme.breakpoints.down("md")]: {
            flexDirection: "column",
            gap: "30px",
        },
    }));

    return (
        <Container maxWidth="lg">
            <BoxWrap id="contact">
                <Typography variant="title">LIÊN HỆ</Typography>
                <Typography variant="caption">
                    Đừng ngại, tôi đang chờ bạn! 👇
                </Typography>
                <CustomStack>
                    <BoxItem>
                        <CustomPaper>
                            <MapIcon
                                sx={{
                                    color: themePort.palette.primary.main,
                                    fontSize: "34px",
                                }}
                            />
                        </CustomPaper>
                        <ListItemText
                            primary={
                                <Typography
                                    sx={{
                                        fontSize: "17px",
                                        color: themePort.palette.textBold.main,
                                        fontWeight: 700,
                                    }}
                                >
                                    Địa Chỉ
                                </Typography>
                            }
                            secondary="Bắc Từ Liêm, Hà Nội"
                        />
                    </BoxItem>
                    <BoxItem>
                        <CustomPaper elevation={1}>
                            <AttachEmailIcon
                                sx={{
                                    color: themePort.palette.primary.main,
                                    fontSize: "34px",
                                }}
                            />
                        </CustomPaper>
                        <ListItemText
                            primary={
                                <Typography
                                    sx={{
                                        fontSize: "17px",
                                        color: themePort.palette.textBold.main,
                                        fontWeight: 700,
                                    }}
                                >
                                    Mail
                                </Typography>
                            }
                            secondary={
                                <Typography component={"span"} variant="body1">
                                    vanhieu88.webdev@outlook.com
                                </Typography>
                            }
                        />
                    </BoxItem>
                </CustomStack>
            </BoxWrap>
        </Container>
    );
};

export default Contact;
