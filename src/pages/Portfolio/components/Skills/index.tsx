import React from "react";
import {
    Box,
    Typography,
    styled,
    Divider,
    Stack,
    StackProps,
    Paper,
    PaperProps,
    Avatar,
    BoxProps,
    DividerProps,
    TypographyProps,
} from "@mui/material";
import { themePort } from "../../theme.Portfolio";

import { Icons } from "./data.skills";

const Skills = () => {
    const CustomStack = styled(Stack)<StackProps>(({ theme }) => ({
        gap: "28px",
        flexWrap: "wrap",
        [theme.breakpoints.down("md")]: {
            gap: "20px",
            justifyContent: "center",
        },
    }));
    const Item = styled(Paper)<PaperProps>(({ theme }) => ({
        width: "64px",
        height: "64px",
        borderRadius: "999px",
        backgroundColor: "#fff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    }));

    const BoxWrap = styled(Box)<BoxProps>(({ theme }) => ({
        display: "flex",
        gap: "24px",
        alignItems: "center",
        [theme.breakpoints.down("md")]: {
            flexDirection: "column",
            gap: "38px",
        },
        [theme.breakpoints.between("md", "lg")]: {
            flexDirection: "column",
        },
    }));

    const DividerLG = styled(Divider)<DividerProps>(({ theme }) => ({
        borderRightWidth: "2.5px",
        borderRightColor: themePort.palette.secondary.main,
        marginRight: "70px",
        height: "32px",
        alignSelf: "auto",
        [theme.breakpoints.down("lg")]: {
            display: "none",
        },
    }));

    const CustomTypgraphy = styled(Typography)<TypographyProps>(
        ({ theme }) => ({
            [theme.breakpoints.down("md")]: {
                paddingBottom: "10px",
                borderBottom: "medium solid #8e8e8e",
            },
        })
    );

    const BoxSkill = styled(Box)<BoxProps>(({ theme }) => ({
        [theme.breakpoints.down("md")]: {
            display: "flex",
            justifyContent: "center",
            marginBottom: "20px",
        },
    }));

    return (
        <BoxWrap>
            <CustomTypgraphy color={themePort.palette.textBold.main}>
                Kỹ Năng
            </CustomTypgraphy>
            <DividerLG
                variant="middle"
                orientation="vertical"
                flexItem
                textAlign="center"
            />

            <CustomStack direction={"row"}>
                {Icons.map(({ name, icon }, index) => (
                    <BoxSkill key={index}>
                        <Item>
                            <Avatar
                                variant="square"
                                src={icon}
                                alt={name}
                                sx={{
                                    width: "34px",
                                    height: "34px",
                                    "& img": {
                                        objectFit: "contain",
                                    },
                                }}
                            />
                        </Item>
                    </BoxSkill>
                ))}
            </CustomStack>
        </BoxWrap>
    );
};

export default Skills;
