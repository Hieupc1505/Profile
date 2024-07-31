import { Box, rgbToHex, Stack, Typography } from "@mui/material";
import React from "react";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
const ServiceItem = ({
    title,
    color,
    data,
}: {
    title: string;
    color: string;
    data: string[];
}) => {
    return (
        <Box
            sx={{
                // padding: "64px 64px",
                background: "white",
                display: "flex",
                justifyContent: "center",
            }}
        >
            <Stack
                direction={"column"}
                gap={"16px"}
                sx={{
                    padding: "42px 42px",
                    borderRadius: "24px",
                    background: "white",

                    filter: `drop-shadow(0 22px 24px rgba(${color} / .4))`,
                    width: `64%`,
                    transform: `rotate(3deg)`,
                }}
            >
                <Stack direction={"column"}>
                    <Typography variant="h5" sx={{ fontWeight: 600 }}>
                        {title}
                    </Typography>
                    <Box>
                        <Box
                            sx={{
                                width: "32px",
                                height: "6px",
                                opacity: 0.24,
                                borderRadius: "8px",
                                backgroundColor: `rgb(${color})`,
                            }}
                        ></Box>
                    </Box>
                </Stack>

                <Stack direction={"column"} gap={"33px"}>
                    {data.map((item) => (
                        <Typography>{item}</Typography>
                    ))}
                </Stack>
            </Stack>
        </Box>
    );
};

export default ServiceItem;
