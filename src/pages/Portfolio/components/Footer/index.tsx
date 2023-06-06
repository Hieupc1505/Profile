import React from "react";
import {
    Container,
    Box,
    styled,
    Typography,
    ButtonGroup,
    IconButton,
    Stack,
    Link,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
const Footer = () => {
    return (
        <Box
            component={"footer"}
            sx={{ backgroundColor: "#2d2e32", padding: "50px 0" }}
        >
            <Container maxWidth="lg">
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <Typography
                        variant="caption"
                        color="white"
                        sx={{ marginBottom: 0 }}
                    >
                        Copyright © 2023. All rights are reserved
                    </Typography>

                    <Stack
                        direction={"row"}
                        spacing={3}
                        sx={{
                            fontSize: "23px",
                            color: "white",
                            "& .MuiLink-root:hover": {
                                transform: "scale(1.2)",
                                transition: "all .2s ease-in-out",
                            },
                        }}
                    >
                        <Link href="#" color="inherit">
                            <GitHubIcon />
                        </Link>
                        <Link href="#" color="inherit">
                            <LinkedInIcon />
                        </Link>
                    </Stack>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;
