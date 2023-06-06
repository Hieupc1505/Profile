import React, { MouseEventHandler, useEffect, useState } from "react";
import CommonBtn from "~/common/Button";
import Notification from "./Notification";
import { Avatar, IconButton, Tooltip, Typography, Box } from "@mui/material";
import HelpIcon from "@mui/icons-material/Help";

import { useLocation } from "react-router-dom";

const Header = () => {
    const [open, setOpen] = useState<boolean>(false);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [title, setTitle] = useState<string | null>(null);

    const handleOpen: MouseEventHandler<HTMLButtonElement> = (event) => {
        setAnchorEl(event.currentTarget);
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const location = useLocation();

    useEffect(() => {
        const parseLocation = location.pathname.replaceAll(/\W+/g, " ");
        setTitle(parseLocation);
    }, [location]);

    const headerStyles = {
        wrapper: {
            width: "100%",
            display: "flex",
            flexDirection: "column",
            backgroundColor: "#009be5",
            padding: "20px",
        },
        topRow: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "end",
            alignItems: "center",
            marginBottom: "20px",
            "*": {
                marginRight: "5px",
            },
        },
        middleRow: {
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "20px",
            marginLeft: "320px",
        },
        link: {
            fontWeight: 500,
            color: "rgba(255, 255, 255, .7)",
            "&:hover": {
                color: "#fff",
                cursor: "pointer",
            },
        },
        webButton: {
            marginRight: "5px",
            borderColor: "white",
        },
    };

    return (
        <Box sx={headerStyles.wrapper}>
            <Box sx={headerStyles.topRow}>
                <Typography sx={headerStyles.link}>Go to dos</Typography>
                <Notification
                    handleOpen={handleOpen}
                    anchorEl={anchorEl}
                    iconColor="inherit"
                    badgeContent={4}
                    open={open}
                    handleClose={handleClose}
                />
                <Avatar src="https://mui.com/static/images/avatar/1.jpg" />
            </Box>
            <Box sx={headerStyles.middleRow}>
                <Typography variant="h1" component={"h1"} color="white">
                    {title}
                </Typography>
                <Box>
                    <CommonBtn
                        sx={headerStyles.webButton}
                        variant="outlined"
                        color="inherit"
                    >
                        Web setup
                    </CommonBtn>
                    <Tooltip title="help">
                        <IconButton>
                            <HelpIcon />
                        </IconButton>
                    </Tooltip>
                </Box>
            </Box>
        </Box>
    );
};

export default Header;
