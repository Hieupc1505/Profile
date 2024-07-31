import { Container, Stack, Box, Grid } from "@mui/material";
import React from "react";
import ServiceItem from "./ServiceItem";
const Services = () => {
    const context = {
        design: ["Phát triển web ", "Tối ưu hóa SEO", "Bảo trì và hỗ trợ"],
        dev: ["Thiết kế database", "Tích hợp backend, API", "Nâng cấp định kỳ"],
        sup: ["Tư vấn tận tình", "Đảm bảo chất lượng", "Dịch vụ 24/7"],
    };
    return (
        <Box pt={"64px"} pb={"80px"}>
            <Container maxWidth="lg">
                <Grid container>
                    <Grid item lg={4}>
                        <ServiceItem
                            title="Thiết kế"
                            color="109 209 177"
                            data={context["design"]}
                        />
                    </Grid>
                    <Grid item lg={4}>
                        <ServiceItem
                            title="Phát triển"
                            color="229 158 171"
                            data={context["dev"]}
                        />
                    </Grid>
                    <Grid item lg={4}>
                        <ServiceItem
                            title="Hỗ trợ"
                            color="157 34 155"
                            data={context["sup"]}
                        />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Services;
