import React, { useState, MouseEventHandler, ReactNode } from "react";
import imgLogo from "/Besnik/Logo.svg";
import { Container } from "@mui/system";
import {
    Box,
    Typography,
    Drawer,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    styled,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import FeaturedPlayListIcon from "@mui/icons-material/FeaturedPlayList";
import {
    MiscellaneousServices as MiscellaneousServicesIcon,
    ListAlt as ListAltIcon,
    Home as HomeIcon,
    Contacts as ContactsIcon,
} from "@mui/icons-material";
import CustomButton from "../CustomButton";

interface IMobileMenuProps {
    left: boolean;
}

interface NavBarProps {
    data: string[];
}

const Navbar = ({ data }: NavBarProps) => {
    const [mobildeMenu, setMobileMenu] = useState<IMobileMenuProps>({
        left: false,
    });

    const toggleDrawer =
        (
            anchor: string,
            open: boolean
        ): MouseEventHandler<HTMLDivElement | SVGSVGElement> =>
        (event: Partial<MouseEventHandler<HTMLDivElement>>): void => {
            console.log(event);
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
            {["Home", "Features", "Services", "Listed", "Contact"].map(
                (text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {index === 0 && <HomeIcon />}
                                {index === 1 && <FeaturedPlayListIcon />}
                                {index === 2 && <MiscellaneousServicesIcon />}
                                {index === 3 && <ListAltIcon />}
                                {index === 4 && <ContactsIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                )
            )}
        </Box>
    );

    const NavLink = styled(Typography)(({ theme }) => ({
        fontSize: "14px",
        color: "#4F5361",
        fontWeight: "bold",
        cursor: "pointer",
        "&:hover": {
            color: "#fff",
        },
    }));
    const NavbarLinkBox = styled(Box)(({ theme }) => ({
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: theme.spacing(3),
        [theme.breakpoints.down("md")]: {
            display: "none",
        },
    }));
    const CustomMenuIcon = styled(MenuIcon)(({ theme }) => ({
        cursor: "pointer",
        display: "none",
        mr: theme.spacing(2),
        [theme.breakpoints.down("md")]: {
            display: "block",
        },
    }));
    const NavbarContainer = styled(Container)(({ theme }) => ({
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: theme.spacing(5),
        [theme.breakpoints.down("md")]: {
            padding: theme.spacing(2),
        },
    }));
    const NavbarLogo = styled("img")(({ theme }) => ({
        cursor: "pointer",
        [theme.breakpoints.down("md")]: {
            display: "none",
        },
    }));

    return (
        <NavbarContainer>
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "2.5rem",
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                    }}
                >
                    <CustomMenuIcon onClick={toggleDrawer("left", true)} />
                    <Drawer
                        anchor="left"
                        open={mobildeMenu["left"]}
                        onClose={toggleDrawer("left", false)}
                    >
                        {list("left")}
                    </Drawer>
                    <NavbarLogo src={imgLogo} alt="logo" />
                </Box>
                <NavbarLinkBox>
                    {data.map((navbarItem, index) => (
                        <NavLink key={index} variant="body2">
                            {navbarItem}
                        </NavLink>
                    ))}
                </NavbarLinkBox>
            </Box>
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "1rem",
                }}
            >
                <NavLink variant="body2">Sign Up</NavLink>
                <CustomButton
                    backgroundColor="#0F1B4C"
                    color="#fff"
                    buttonText="Register"
                />
            </Box>
        </NavbarContainer>
    );
};

export default Navbar;
