import React from "react";
import { Box, Container, styled, Typography, Paper } from "@mui/material";
import logoImg from "/Besnik/Logo.svg";
import logosImg from "/Besnik/logos.svg";
import starsImg from "/Besnik/Stars.svg";
import list1 from "/Besnik/list1.svg";
import list2 from "/Besnik/list2.svg";
import list3 from "/Besnik/list3.svg";
import list4 from "/Besnik/list4.svg";
import list5 from "/Besnik/list5.svg";
import { theme } from "~/theme";

const Companies = () => {
    const CustomContainer = styled(Container)(({ theme }) => ({
        display: "flex",
        justifyContent: "space-between",
        [theme.breakpoints.down("md")]: {
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            marginBottom: theme.spacing(4),
        },
    }));
    const CustomBox = styled(Box)(({ theme }) => ({
        [theme.breakpoints.down("md")]: {
            marginBottom: theme.spacing(4),
        },
    }));

    const CustomContainerLogo = styled(Container)(({ theme }) => ({
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: ".5rem",
        marginBottom: theme.spacing(20),
        marginTop: theme.spacing(8.5),
        [theme.breakpoints.down("md")]: {
            flexDirection: "column",
            marginBottom: theme.spacing(15),
        },
    }));

    const CustomPaper = styled(Paper)(({ theme }) => ({
        padding: "0 41px",
        height: "94px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#FFFFFF",
        borderRadius: "12px",
        "&:hover": {
            boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
            transition: "linear .5s",
        },
    }));

    return (
        <Box sx={{ mt: 10 }}>
            <CustomContainer>
                <CustomBox>
                    <img
                        src={logoImg}
                        alt={"logo"}
                        style={{ maxWidth: "100%" }}
                    />
                    <Typography
                        variant="body2"
                        sx={{
                            color: "#7D8589",
                            fontSize: "16px",
                            fontWeight: "bold",
                            mt: 2,
                        }}
                    >
                        More than 45,000 trust Besnik
                    </Typography>
                </CustomBox>
                <Box>
                    <img src={starsImg} alt="rating" />
                    <Typography
                        variant="body2"
                        sx={{
                            fontSize: "16px",
                            color: "#7D8589",
                            fontWeight: "bold",
                            mt: 2,
                        }}
                    >
                        5-Star Rating (2k+ Reviews)
                    </Typography>
                </Box>
            </CustomContainer>
            <CustomContainerLogo>
                <CustomPaper elevation={0}>
                    <img src={list1} alt="logo" />
                </CustomPaper>
                <CustomPaper elevation={0}>
                    <img src={list2} alt="logo" />
                </CustomPaper>
                <CustomPaper elevation={0}>
                    <img src={list3} alt="logo" />
                </CustomPaper>
                <CustomPaper elevation={0}>
                    <img src={list4} alt="logo" />
                </CustomPaper>
                <CustomPaper elevation={0}>
                    <img src={list5} alt="logo" />
                </CustomPaper>
            </CustomContainerLogo>
        </Box>
    );
};

export default Companies;
