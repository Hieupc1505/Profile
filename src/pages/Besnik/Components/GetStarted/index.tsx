import React from "react";
import { Button, styled, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import CustomButton from "../CustomButton";
import mobileIcon from "/Besnik/mobile.svg";
const GetStarted = () => {
    const CustomContainer = styled(Container)(({ theme }) => ({
        backgroundColor: "#17275F",
        height: "325px",
        borderRadius: "15px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        paddingLeft: "132px !important",

        [theme.breakpoints.down("md")]: {
            height: "auto",
            flexDirection: "column",
            alignItems: "flex-start",
            width: "100%",
            padding: "24px 16px 0px 24px !important",
        },
    }));
    const CustomBox = styled(Container)(({ theme }) => ({
        [theme.breakpoints.down("md")]: {
            padding: 0,
        },
    }));

    const BoxWrap = styled(Box)(({ theme }) => ({
        backgroundColor: "#fff",
        display: "flex",
        height: "416px",
        position: "relative",
        alignItems: "flex-end",
        [theme.breakpoints.down("md")]: {
            backgroundColor: "#17275F",
            flexDirection: "column",
            margin: theme.spacing(3, 3, 0, 3),
            borderRadius: "15px",
            height: "700px",
            alignItems: "center",
            justifyContent: "space-between",
            "& p": {
                width: "100%",
                textAlign: "center",
            },
        },
    }));
    const ImgCustom = styled("img")(({ theme }) => ({
        position: "absolute",
        right: "200px",
        [theme.breakpoints.down("md")]: {
            position: "static",
        },
    }));

    return (
        <CustomBox>
            <BoxWrap>
                <CustomContainer>
                    <Typography
                        sx={{
                            fontSize: "35px",
                            color: "white",
                            fontWeight: "700",
                        }}
                    >
                        Subscribe to our Newsletter!
                    </Typography>
                    <Typography
                        sx={{
                            fontSize: "20px",
                            color: "#ccc",
                            fontWeight: "500",
                            my: 2,
                        }}
                    >
                        Everything you need to know about houses!
                    </Typography>
                    <CustomButton
                        backgroundColor="#fff"
                        color="#17275F"
                        buttonText={"Get Started Now"}
                        getStartedBtn={true}
                    />
                </CustomContainer>
                <ImgCustom
                    src={mobileIcon}
                    alt="mobile"
                    style={{ maxWidth: "100%" }}
                />
            </BoxWrap>
        </CustomBox>
    );
};

export default GetStarted;
