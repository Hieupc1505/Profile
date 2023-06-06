import React from "react";
import { Box, Container } from "@mui/system";
import houseCard from "/Besnik/houseCard3.png";
import {
    Typography,
    styled,
    Card,
    Divider,
    AvatarGroup,
    Avatar,
} from "@mui/material";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
const colors = ["#F29991", "#D93D1A", "#F2CC85", "#A6771F", "#3C8C30"];
const Details = () => {
    const getColor = () => {
        return colors[Math.floor(Math.random() * 5)];
    };

    const CustomBox = styled(Box)(({ theme }) => ({
        display: "flex",
        gap: theme.spacing(10),
        alignItems: "center",
        [theme.breakpoints.down("md")]: {
            flexDirection: "column",
            textAlign: "center",
        },
    }));
    const ImgContainer = styled(Box)(({ theme }) => ({
        width: "100%",
        // height: "460px",
        textAlign: "right",
        position: "relative",
        [theme.breakpoints.down("md")]: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 24,
        },
    }));
    const LargeText = styled(Typography)(({ theme }) => ({
        fontSize: "64px",
        color: "#000",
        fontWeight: "700",
        [theme.breakpoints.down("md")]: {
            fontSize: "32px",
        },
    }));
    const SmallText = styled(Typography)(({ theme }) => ({
        fontSize: "18px",
        color: "#788087",
        fontWeight: "500",
        [theme.breakpoints.down("md")]: {
            fontSize: "14px",
        },
    }));
    const TextFieldBox = styled(Box)(({ theme }) => ({
        marginTop: theme.spacing(7),
        display: "flex",
        justifyContent: "space-between",
        padding: theme.spacing(0, 5, 0, 5),
        [theme.breakpoints.down("md")]: {
            flexDirection: "column",
            gap: theme.spacing(5),
        },
    }));
    const Divider2 = styled("div")(({ theme }) => ({
        width: "13%",
        height: "5px",
        backgroundColor: "#000339",
        [theme.breakpoints.down("md")]: {
            marginLeft: "auto",
            marginRight: "auto",
        },
    }));

    const CustomCard = styled(Card)(({ theme }) => ({
        maxWidth: "200px",
        minHeight: "195px",
        position: "absolute",
        top: 0,
        backgroundColor: "#fff",
        boxShadow: "-19px -20px 100px rgba(0, 0, 0, 0.08)",
        borderRadius: "0px 0px 12px 12px",
        padding: "18px 24px",
        textAlign: "left",
        [theme.breakpoints.down("md")]: {
            position: "static",
        },
    }));

    return (
        <Box sx={{ py: 10 }}>
            <Container>
                <CustomBox>
                    <Box sx={{ position: "relative", minWidth: "520px" }}>
                        <ImgContainer>
                            <img
                                src={houseCard}
                                alt="house-Card"
                                style={{ maxWidth: "100%" }}
                            />
                            <CustomCard>
                                <Box
                                    sx={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                    }}
                                >
                                    <Typography
                                        variant="h5"
                                        component="h3"
                                        sx={{
                                            fontSize: "26px",
                                            fontWeight: "bold",
                                            lineHeight: "26px",
                                        }}
                                    >
                                        40,000+
                                    </Typography>
                                    <TrendingUpIcon color="primary" />
                                </Box>
                                <Typography
                                    variant="body2"
                                    sx={{
                                        color: "#A7A7A7",
                                        mt: 1,
                                    }}
                                >
                                    By avarage for 2 bedroom apments in San
                                    Francisco, CA
                                </Typography>
                                <Divider
                                    variant="middle"
                                    sx={{ height: "5px", my: 3 }}
                                />
                                <Box
                                    sx={{
                                        display: "flex",
                                        flexWrap: "wrap",
                                        "& .MuiAvatar-root": {
                                            width: "16px",
                                            height: "16px",
                                        },
                                        "& .MuiAvatarGroup-root": {
                                            mb: "19px",
                                            mr: "14px",
                                        },
                                    }}
                                >
                                    <AvatarGroup>
                                        <Avatar sx={{ bgcolor: getColor() }}>
                                            N
                                        </Avatar>
                                        <Avatar sx={{ bgcolor: getColor() }}>
                                            H
                                        </Avatar>
                                        <Avatar sx={{ bgcolor: getColor() }}>
                                            B
                                        </Avatar>
                                        <Avatar sx={{ bgcolor: getColor() }}>
                                            CH
                                        </Avatar>
                                    </AvatarGroup>
                                    <AvatarGroup>
                                        <Avatar sx={{ bgcolor: getColor() }}>
                                            N
                                        </Avatar>
                                        <Avatar sx={{ bgcolor: getColor() }}>
                                            H
                                        </Avatar>
                                    </AvatarGroup>
                                    <AvatarGroup>
                                        <Avatar sx={{ bgcolor: getColor() }}>
                                            N
                                        </Avatar>
                                        <Avatar sx={{ bgcolor: getColor() }}>
                                            H
                                        </Avatar>
                                        <Avatar sx={{ bgcolor: getColor() }}>
                                            B
                                        </Avatar>
                                        <Avatar sx={{ bgcolor: getColor() }}>
                                            CH
                                        </Avatar>
                                    </AvatarGroup>
                                    <AvatarGroup>
                                        <Avatar sx={{ bgcolor: getColor() }}>
                                            N
                                        </Avatar>
                                        <Avatar sx={{ bgcolor: getColor() }}>
                                            H
                                        </Avatar>
                                        <Avatar sx={{ bgcolor: getColor() }}>
                                            B
                                        </Avatar>
                                        <Avatar sx={{ bgcolor: getColor() }}>
                                            CH
                                        </Avatar>
                                        <Avatar sx={{ bgcolor: getColor() }}>
                                            B
                                        </Avatar>
                                        <Avatar sx={{ bgcolor: getColor() }}>
                                            CH
                                        </Avatar>
                                        <Avatar sx={{ bgcolor: getColor() }}>
                                            B
                                        </Avatar>
                                        <Avatar sx={{ bgcolor: getColor() }}>
                                            CH
                                        </Avatar>
                                    </AvatarGroup>
                                    <AvatarGroup>
                                        <Avatar sx={{ bgcolor: getColor() }}>
                                            N
                                        </Avatar>
                                    </AvatarGroup>
                                    <AvatarGroup>
                                        <Avatar sx={{ bgcolor: getColor() }}>
                                            N
                                        </Avatar>
                                        <Avatar sx={{ bgcolor: getColor() }}>
                                            H
                                        </Avatar>
                                        <Avatar sx={{ bgcolor: getColor() }}>
                                            B
                                        </Avatar>
                                        <Avatar sx={{ bgcolor: getColor() }}>
                                            CH
                                        </Avatar>
                                    </AvatarGroup>
                                    <AvatarGroup>
                                        <Avatar sx={{ bgcolor: getColor() }}>
                                            N
                                        </Avatar>
                                        <Avatar sx={{ bgcolor: getColor() }}>
                                            H
                                        </Avatar>
                                    </AvatarGroup>
                                </Box>
                            </CustomCard>
                        </ImgContainer>
                    </Box>

                    <Box>
                        <Divider2 />
                        <Typography
                            sx={{
                                fontSize: "35px",
                                color: "#000339",
                                fontWeight: "700",
                                my: 3,
                            }}
                        >
                            You've found a neightborhood you love.
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: "16px",
                                color: "#000335",
                                lineHeight: "27px",
                                my: 3,
                            }}
                        >
                            When you own a home, you commit to living in one
                            location for a period of time. We are here to ensure
                            that thí will be a memorable experience for you.
                        </Typography>
                    </Box>
                </CustomBox>
                <TextFieldBox>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                        }}
                    >
                        <LargeText>2500+</LargeText>
                        <SmallText>Homes For Sales</SmallText>
                    </Box>

                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                        }}
                    >
                        <LargeText>3000+</LargeText>
                        <SmallText>Properties Rented</SmallText>
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                        }}
                    >
                        <LargeText>3500+</LargeText>
                        <SmallText>Homes Sold</SmallText>
                    </Box>
                </TextFieldBox>
            </Container>
        </Box>
    );
};

export default Details;
