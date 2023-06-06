import { MouseEvent } from "react";
import { Menu, MenuItem } from "@mui/material";

interface MenuItem {
    label: string | number;
    id: string | number;
}

interface MenuBasic {
    open: boolean;
    handleClose: () => void;
    anchorEl?: null | HTMLElement;
    handleClick?: (e: MouseEvent<HTMLButtonElement>) => void;
    menuItems: MenuItem[];
}

const BasicMenu = ({
    open,
    handleClose,
    anchorEl,
    handleClick,
    menuItems,
}: MenuBasic) => {
    return (
        <div>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    "aria-labelledby": "basic-button",
                }}
            >
                {menuItems.map(({ label, id }) => (
                    <MenuItem key={id} onClick={handleClose}>
                        {label}
                    </MenuItem>
                ))}
            </Menu>
        </div>
    );
};

export default BasicMenu;
