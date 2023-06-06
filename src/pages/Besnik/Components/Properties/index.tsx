import React from "react";
import { Box, Typography, styled, Container } from "@mui/material";
import { properties } from "./properties";
import House from "../House";
const Properties = () => {
    const PropertiesBox = styled(Box)(({ theme }) => ({
        display: "flex",
        justifyContent: "space-between",
        marginTop: theme.spacing(5),
        [theme.breakpoints.down("sm")]: {
            flexDirection: "column",
            alignItems: "center",
        },
        [theme.breakpoints.down("md")]: {
            gap: theme.spacing(2),
        },
    }));

    const PropertiesTextBox = styled(Box)(({ theme }) => ({
        [theme.breakpoints.down("md")]: {
            textAlign: "center",
        },
    }));

    return (
        <Box
            sx={{
                mt: 5,
                backgroundColor: "#F5FAFE",
                py: 10,
            }}
        >
            <Container>
                <PropertiesTextBox>
                    <Typography
                        sx={{
                            color: "#000339",
                            fontSize: "35px",
                            fontWeight: "bold",
                        }}
                    >
                        Feature Properties
                    </Typography>
                    <Typography
                        sx={{ color: "#5A6473", fontSize: "16px", mt: 1 }}
                    >
                        Everything you need to know when looking for a new home!
                    </Typography>
                </PropertiesTextBox>
                <PropertiesBox>
                    {properties.map((property) => (
                        <House
                            key={property.id}
                            img={property.img}
                            price={property.price}
                            address={property.address}
                            bedrooms={property.bedrooms}
                            bathrooms={property.bathroom}
                            space={property.space}
                        />
                    ))}
                </PropertiesBox>
            </Container>
        </Box>
    );
};

export default Properties;
