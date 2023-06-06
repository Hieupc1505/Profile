import NavBar from "~components/NavBar";
import { mainNavbarItem } from "./const/navbar.const";
import { Grid } from "@mui/material";
import Header from "~components/header";
import { Outlet } from "react-router-dom";
const Home = () => {
    return (
        <Grid container>
            <Header />
            <NavBar data={mainNavbarItem} />
            <Outlet />
        </Grid>
    );
};

export default Home;
