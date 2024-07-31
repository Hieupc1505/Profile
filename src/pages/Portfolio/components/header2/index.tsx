"use client";
import { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";

import Container from "@mui/material/Container";

import Button from "@mui/material/Button";

import { Stack, styled } from "@mui/material";
import SegmentIcon from "@mui/icons-material/Segment";
import LogoIcon from "./logo";

import SettingsIcon from "@mui/icons-material/Settings";
// import theme from "@/app/theme";

function ResponsiveAppBar() {
    const IconButtonStyled = styled(IconButton)(({ theme }) => ({
        display: "none",
        padding: "8px",
        margin: "6px -8px 0",
        [theme.breakpoints.down("md")]: {
            display: "block",
            marginRight: "8px",
        },
    }));

    const StackSt = styled("nav")(({ theme }) => ({
        display: "flex",
        flexDirection: "column",
        marginRight: "20px",
        marginLeft: "auto",
        [theme.breakpoints.down("md")]: {
            display: "none",
            backgroundColor: "red",
        },
    }));

    const BoxUl = styled(Box)(({ theme }) => ({
        listStyle: "none",
        display: "flex",
        flexDirection: "row",
        gap: "40px",
        height: "100%",
        WebkitBoxAlign: "center",
        alignItems: "center",
    }));
    const Item = styled(Box)(({ theme }) => ({
        display: ["inline-flex", "inline-flex"],
        WebkitBoxAlign: "center",
        alignItems: "center",
        WebkitBoxPack: "center",
        justifyContent: "center",

        boxSizing: "border-box",
        WebkitTapHighlightColor: "transparent",
        backgroundColor: "transparent",
        cursor: "pointer",
        userSelect: "none",
        verticalAlign: "middle",
        appearance: "none",

        fontFamily:
            '"Public Sans Variable", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
        fontWeight: 500,
        fontSize: "0.875rem",
        lineHeight: 1.57143,
        height: "100%",
        outline: "0px",
        borderWidth: "0px",
        borderStyle: "initial",
        borderColor: "initial",
        borderImage: "initial",
        margin: "0px",
        borderRadius: "0px",
        padding: "0px",
        textDecoration: "none",
        transition: "200ms cubic-bezier(0.4, 0, 0.2, 1)",
        color: theme.palette.text.secondary,
        position: "relative",
        "&:hover::before": {
            display: "block",

            width: "6px",
            height: "6px",
            left: "-12px",
            opacity: 1,
            content: '""',
            borderRadius: "50%",
            position: "absolute",
            backgroundColor: theme.palette.text.disabled,
        },
        "&.active": {
            display: "inline-flex",
            WebkitBoxAlign: "center",
            alignItems: "center",
            WebkitBoxPack: "center",
            justifyContent: "center",
            position: "relative",
            boxSizing: "border-box",
            WebkitTapHighlightColor: "transparent",
            backgroundColor: "transparent",
            cursor: "pointer",
            userSelect: "none",
            verticalAlign: "middle",
            appearance: "none",
            fontFamily:
                '"Public Sans Variable", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
            fontWeight: 600,
            fontSize: "0.875rem",
            lineHeight: 1.57143,
            height: "100%",
            color: "#00A76F",
            outline: "0px",
            borderWidth: "0px",
            borderStyle: "initial",
            borderColor: "initial",
            borderImage: "initial",
            margin: "0px",
            borderRadius: "0px",
            padding: "0px",
            textDecoration: "none",
            transition: "200ms cubic-bezier(0.4, 0, 0.2, 1)",
        },
        "&.active::before": {
            display: "block",

            width: "6px",
            height: "6px",
            left: "-12px",
            opacity: 1,
            content: '""',
            borderRadius: "50%",
            position: "absolute",
            backgroundColor: theme.palette.primary.main,
        },
    }));

    const ButtonSignIn = styled(Button)(({ theme }) => ({
        alignItems: "center",

        position: "relative",
        boxSizing: "border-box",

        backgroundColor: "transparent",
        cursor: "pointer",

        fontWeight: 700,
        fontSize: "0.875rem",
        lineHeight: 1.71429,
        textTransform: "unset",
        minWidth: "64px",

        boxShadow: "none",
        outline: "0px",
        margin: "0px",
        textDecoration: "none",
        padding: "5px 12px",
        borderRadius: theme.shape.borderRadius,
        transition:
            "background-color 250ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1), border-color 250ms cubic-bezier(0.4, 0, 0.2, 1), color 250ms cubic-bezier(0.4, 0, 0.2, 1)",
        borderWidth: "1px",
        borderStyle: "solid",
        borderImage: "initial",
        borderColor: "rgb(145,158,171)",
        color: "#1C252E",
    }));

    const BoxPuchase = styled(Button)(({ theme }) => ({
        position: "relative",

        color: theme.palette.common.white,
        backgroundColor: "#1C252E",

        padding: "6px 12px",
        borderRadius: theme.shape.borderRadius,
        transition:
            "background-color 250ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1), border-color 250ms cubic-bezier(0.4, 0, 0.2, 1), color 250ms cubic-bezier(0.4, 0, 0.2, 1)",
        fontWeight: 700,
        fontSize: "0.875rem",
        lineHeight: 1.71429,
        textTransform: "unset",
        minWidth: "64px",
    }));

    const BoxRight = styled(Box)(({ theme }) => ({
        [theme.breakpoints.down("md")]: {
            marginLeft: "auto",
            "& .puchase": { display: "none" },
        },
    }));

    return (
        <AppBar
            position="sticky"
            sx={{
                height: "72px",
                backgroundColor: "transparent",
            }}
        >
            <Container
                maxWidth="xl"
                sx={{
                    position: "relative",
                    background: "rgba( 255, 255, 255 , 0.8)",
                }}
            >
                <Toolbar
                    disableGutters
                    sx={{
                        height: "72px",
                        backdropFilter: "blur(6px)",
                        backgroundColor: "transparent",
                        transition:
                            "height 200ms cubic-bezier(0.4, 0, 0.2, 1), background-color 200ms cubic-bezier(0.4, 0, 0.2, 1)",
                    }}
                >
                    <IconButtonStyled>
                        <SegmentIcon />
                    </IconButtonStyled>
                    <LogoIcon
                        sx={{
                            width: "40px",
                            height: "40px",
                        }}
                    />

                    <StackSt>
                        <BoxUl component={"ul"}>
                            <Item component={"li"} className="active">
                                Home
                            </Item>
                            <Item component={"li"}>Component</Item>
                            <Item component={"li"}>Page</Item>
                            <Item component={"li"}>Docs</Item>
                        </BoxUl>
                    </StackSt>

                    <BoxRight
                        sx={{
                            display: "flex",
                            gap: "12px",
                            alignItems: "center",
                        }}
                    >
                        <IconButton>
                            <SettingsIcon className="rotating-element" />
                        </IconButton>
                        <ButtonSignIn
                            className="signin"
                            variant="outlined"
                            href="#"
                        >
                            SignIn
                        </ButtonSignIn>
                        <BoxPuchase
                            className="puchase"
                            variant="contained"
                            href="#"
                        >
                            Purchase
                        </BoxPuchase>
                    </BoxRight>
                </Toolbar>
                <Box
                    sx={{
                        left: "0px",
                        right: "0px",
                        bottom: "0px",
                        height: "24px",
                        zIndex: -1,
                        opacity: 0.48,
                        borderRadius: "50%",
                        position: "absolute",
                        width: "calc(100% - 48px)",
                        boxShadow: "rgba(145, 158, 171, 0.16) 0px 8px 16px 0px",
                    }}
                ></Box>
            </Container>
        </AppBar>
    );
}
export default ResponsiveAppBar;
