import { ReactNode, useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { styled, ListItemIcon, DrawerProps, Link } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { MouseEventHandler } from "react";

import HomeIcon from "@mui/icons-material/Home";
import ContactsIcon from "@mui/icons-material/Contacts";
import ArticleIcon from "@mui/icons-material/Article";
import ElevatorIcon from "@mui/icons-material/Elevator";
import { Link as LinkRoute } from "react-router-dom";

type Anchor = "top" | "left" | "bottom" | "right";
const pages = ["Home", "About", "Projects", "Contact", "MY CV"];
interface IMobileMenuProps {
    right: boolean;
}

export default function Navbar() {
    const [mobildeMenu, setMobileMenu] = useState<IMobileMenuProps>({
        right: false,
    });

    const toggleDrawer =
        (
            anchor: string,
            open: boolean
        ): MouseEventHandler<HTMLDivElement | SVGSVGElement> =>
        (event: Partial<MouseEventHandler<HTMLDivElement>>): void => {
            // console.log(event);
            setMobileMenu({ ...mobildeMenu, [anchor]: open });
        };

    const list = (anchor: string): ReactNode => (
        <Box
            component="div"
            sx={{
                width: anchor === "top" || anchor === "button" ? "auto" : 250,
            }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={() => console.log("keydown")}
        >
            {pages.map((text, index) => (
                <ListItem key={text} disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            {index === 0 && <HomeIcon />}
                            {index === 1 && <ElevatorIcon />}
                            {index === 2 && <ArticleIcon />}
                            {index === 3 && <ContactsIcon />}
                        </ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItemButton>
                </ListItem>
            ))}
        </Box>
    );

    const CustomBox = styled(Box)(({ theme }) => ({
        display: "flex",
        gap: "20px",
        [theme.breakpoints.down("md")]: {
            display: "none",
        },
    }));

    const CustomButton = styled(Button)(({ theme }) => ({
        color: theme.palette.textBold.main,
        fontWeight: 700,
        fontSize: "17px",
        backgroundColor: "#fff",
        "&:hover": {
            backgroundColor: "transparent",
            color: theme.palette.primary.main,
        },
    }));
    const CustomMenu = styled(Box)(({ theme }) => ({
        display: "none",
        cursor: "pointer",
        "&:hover": {
            color: theme.palette.primary.main,
        },
        [theme.breakpoints.down("md")]: {
            display: "block",
        },
    }));

    const CustomDrawer = styled(Drawer)<DrawerProps>(({ theme }) => ({
        [theme.breakpoints.up("lg")]: {
            display: "none",
        },
    }));
    return (
        <Box>
            <CustomBox>
                {pages.map((page, index) =>
                    index !== pages.length - 1 ? (
                        <Link
                            key={index}
                            href={`#${page.toLocaleLowerCase()}`}
                            underline="none"
                        >
                            <CustomButton>{page}</CustomButton>
                        </Link>
                    ) : (
                        <LinkRoute key={index} to={"/pages/profile"}>
                            <CustomButton>{page}</CustomButton>
                        </LinkRoute>
                    )
                )}
            </CustomBox>
            <CustomMenu>
                <MenuIcon
                    fontSize="large"
                    color="secondary"
                    onClick={toggleDrawer("right", true)}
                />
            </CustomMenu>
            <CustomDrawer
                anchor="right"
                open={mobildeMenu["right"]}
                onClose={toggleDrawer("right", false)}
            >
                {list("right")}
            </CustomDrawer>
        </Box>
    );
}
