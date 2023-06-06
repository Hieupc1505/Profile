import React, { ReactNode } from "react";
import Drawer from "@mui/material/Drawer";

import Divider from "@mui/material/Divider";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import Toolbar from "@mui/material/Toolbar";
import { useNavigate } from "react-router-dom";
import { navbarStyles } from "./styles";

interface navItemType {
    id: number;
    icon: ReactNode;
    label: string;
    route: string;
}

interface navType {
    data: Array<navItemType>;
}

const NavBar = (props: navType) => {
    const drawerWidth = "240px";
    const { data } = props;
    const navigate = useNavigate();

    const drawer = (
        <nav>
            <Toolbar />
            <Divider />
            <List>
                {data.map(({ id, icon, label, route }) => (
                    <ListItem
                        key={id}
                        disablePadding
                        onClick={() => navigate(route)}
                    >
                        <ListItemButton>
                            <ListItemIcon>{icon}</ListItemIcon>
                            <ListItemText primary={label} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
        </nav>
    );

    return (
        <>
            <Drawer
                variant="permanent"
                sx={navbarStyles.drawer}
                open
                anchor="left"
            >
                {drawer}
            </Drawer>
        </>
    );
};

export default NavBar;
