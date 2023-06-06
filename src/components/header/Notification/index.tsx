import { Notifications } from "@mui/icons-material";
import { Badge, IconButton, Tooltip } from "@mui/material";
import { MouseEventHandler } from "react";
import BasicMenu from "~/common/BasicMenu";
interface NotificationProps {
    iconColor: "inherit" | "primary" | "secondary" | "default";
    badgeContent?: number;
    handleOpen?: MouseEventHandler<HTMLButtonElement>;
    anchorEl?: HTMLElement | null;
    open: boolean;
    handleClose: () => void;
}

const Notification = ({
    iconColor,
    badgeContent,
    handleOpen,
    open,
    handleClose,
    anchorEl,
}: NotificationProps) => {
    const newNotify = `You have ${badgeContent} new notifications!`;
    const noNotify = `No new notifycation!`;
    const menuItems = [
        {
            id: 1,
            label: "Profile",
        },
        {
            id: 2,
            label: "Log out",
        },
    ];
    return (
        <>
            <Tooltip title={badgeContent ? newNotify : noNotify}>
                <IconButton color={iconColor} onClick={handleOpen}>
                    <Badge badgeContent={badgeContent} color="error">
                        <Notifications />
                    </Badge>
                </IconButton>
            </Tooltip>
            <BasicMenu
                open={open}
                handleClose={handleClose}
                anchorEl={anchorEl}
                menuItems={menuItems}
            ></BasicMenu>
        </>
    );
};

export default Notification;
