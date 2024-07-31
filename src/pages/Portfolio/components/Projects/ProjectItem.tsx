import React from "react";
import {
    Box,
    Typography,
    styled,
    Card,
    Container,
    CardMedia,
    BoxProps,
    Link,
    CardContent,
    CardContentProps,
    CardProps,
    Button,
    ButtonProps,
    Stack,
    Paper,
    Grid,
    LinkProps,
} from "@mui/material";
import { Link as LinkRoute } from "react-router-dom";

interface ProjectItemProps {
    image: string;
    title: string;
    des: string;
    tools: Array<string>;
    links: { name: string; icon: React.ReactNode; link?: string }[];
    reverse?: boolean;
    typeLink?: boolean;
}

const ProjectItem = ({
    image,
    title,
    des,
    tools,
    links,
    reverse = false,
    typeLink = false,
}: ProjectItemProps) => {
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
        ...theme.typography.body2,
        textAlign: "center",
        color: theme.palette.textBold.main,
        padding: theme.spacing(2),
        fontWeight: 600,
    }));

    const CustomCard = styled(Card)<CardProps>(({ theme }) => ({
        padding: "20px",
        background: "#fff",
        display: "flex",
        justifyContent: "space-between",
        boxShadow: "0 0 10px rgba(0,0,0,.1)",
        alignItems: "center",
        gap: "80px",
        borderRadius: "17px",
        flexDirection: !reverse ? "row" : "row-reverse",
        [theme.breakpoints.down("md")]: {
            flexDirection: "column",
            gap: "30px",
            alignItems: "center",
        },
    }));

    const CustomWrapCardMedia = styled(Box)<BoxProps>(({ theme }) => ({
        boxShadow: "0 0 10px rgba(0,0,0,.1)",
        borderRadius: "17px",
        width: "53%",
        overflow: "hidden",
        height: "446px",
        "& .MuiCardMedia-root": {
            transform: "translateY(0%)",

            transition: "transform 10s ease-in-out 0s",
            "&:hover": {
                transform: "translateY(-83%)",
            },
        },
        [theme.breakpoints.down("md")]: {
            width: "100%",
        },
    }));

    const CustomCardContent = styled(CardContent)<CardContentProps>(
        ({ theme }) => ({
            width: "34%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            marginRight: "auto",
            [theme.breakpoints.down("md")]: {
                textAlgin: "center",
                width: "53%",
                marginRight: "initial",
            },
        })
    );

    const CustomBtn = styled(Button)<ButtonProps>(({ theme }) => ({
        color: theme.palette.textBold.main,
        background: "#fff",
        gap: "5px",
        fontSize: "17px",
        textTransform: "capitalize",
        "&:hover": {
            backgroundColor: "transparent",
            color: theme.palette.primary.main,
        },
    }));

    return (
        <CustomCard>
            <CustomWrapCardMedia>
                <Link
                    href="#"
                    underline="none"
                    sx={{ width: "100%", height: "auto" }}
                >
                    <CardMedia
                        component="img"
                        sx={{
                            width: "100%",
                        }}
                        image={image}
                        alt="Live from space album cover"
                    />
                </Link>
            </CustomWrapCardMedia>
            <CustomCardContent>
                <Typography variant="caption">{title}</Typography>
                <Typography variant="body1" sx={{ marginBottom: "10px" }}>
                    {des}
                </Typography>
                <Stack direction={"row"} spacing={2} sx={{ margin: "10px 0" }}>
                    {tools.map((item, index) => (
                        <Item key={index}>{item}</Item>
                    ))}
                </Stack>
                <Box
                    marginTop={3.5}
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "16px",
                    }}
                >
                    {links.map(({ name, icon, link }, index) =>
                        typeLink === false ? (
                            <Link
                                key={index}
                                href={link}
                                target="_blank"
                                underline="none"
                            >
                                <CustomBtn variant="text" endIcon={icon}>
                                    {name}
                                </CustomBtn>
                            </Link>
                        ) : (
                            <LinkRoute key={index} to={"/pages/besnik"}>
                                <CustomBtn variant="text" endIcon={icon}>
                                    {name}
                                </CustomBtn>
                            </LinkRoute>
                        )
                    )}
                </Box>
            </CustomCardContent>
        </CustomCard>
    );
};

export default ProjectItem;
