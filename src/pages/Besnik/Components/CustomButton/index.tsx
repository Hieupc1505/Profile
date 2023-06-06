import { Button, styled, ButtonProps } from "@mui/material";
import { ThemedProps } from "@mui/material";
import React from "react";

interface CustombuttonProps {
    backgroundColor: string;
    color: string;
    buttonText: string | number;
    heroBtn?: boolean;
    getStartedBtn?: boolean;
    guideBtn?: boolean;
}

const CustomButton = ({
    backgroundColor,
    color,
    buttonText,
    heroBtn = false,
    guideBtn,
    getStartedBtn = false,
}: CustombuttonProps) => {
    const CustomBtn = styled(Button)(({ theme }) => ({
        backgroundColor: backgroundColor,
        color: color,
        fontWeight: "700",
        fontSize: "14px",
        cursor: "pointer",
        padding: ".5rem 1.25rem",
        borderRadius: "7px",
        textTransform: "none",
        display: "block",
        border: "2px solid transparent",
        "&:hover": {
            backgroundColor: color,
            color: backgroundColor,
            borderColor: backgroundColor,
        },
        [theme.breakpoints.down("md")]: {
            margin:
                (heroBtn || getStartedBtn) &&
                theme.spacing(0, "auto", 3, "auto"),
            width: (heroBtn || getStartedBtn) && "90%",
        },
        [theme.breakpoints.down("sm")]: {
            marginTop: guideBtn && theme.spacing(3),
            width: guideBtn || "90%",
        },
    }));

    return <CustomBtn>{buttonText}</CustomBtn>;
};

export default CustomButton;
