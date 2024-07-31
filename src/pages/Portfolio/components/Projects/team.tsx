import React from "react";
import { Box, Typography, Container, Grid, styled } from "@mui/material";
import ProjectItem from "./ProjectItem";
import { projectsData } from "./data.proj";

const Projects = () => {
    const BoxWrap = styled(Box)(({ theme }) => ({
        [theme.breakpoints.down("md")]: {
            padding: "80px 40px",
        },
    }));

    return (
        <BoxWrap
            sx={{
                minHeight: "100vh",
                backgroundColor: "#e6e6e6b8",
                marginTop: "24px",
                padding: "150px 0",
            }}
        >
            <Container maxWidth="lg">
                <Typography id="projects" variant="title" component={"h3"}>
                    SẢN PHẨM
                </Typography>
                <Typography
                    color={"text.primary"}
                    variant="caption"
                    sx={{ marginBottom: "60px" }}
                >
                    Dự Án Nổi Bật 🧩
                </Typography>
                <Grid container spacing={"50px"}>
                    {projectsData.map((item, index) => (
                        <Grid key={index} item xs={12}>
                            <ProjectItem
                                {...item}
                                reverse={index % 2 !== 0 ? true : false}
                            />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </BoxWrap>
    );
};

export default Projects;
