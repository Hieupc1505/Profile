import React, { ChangeEvent, ChangeEventHandler } from "react";
import { Input, Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

interface SearchBarProps {
    placeholder: string;
    onChange: (value: string) => void;
    searchBarWidth?: string;
}

const SearchBar = ({
    placeholder,
    onChange,
    searchBarWidth,
}: SearchBarProps) => {
    return (
        <Box
            sx={{
                minWidth: searchBarWidth,
                display: "flex",
                alignItems: "center",
                flexGrow: 1,
                "& .MuiSvgIcon-root": {
                    paddingRight: "5px",
                },
            }}
        >
            <SearchIcon />
            <Input
                sx={{ flexShrink: 1, width: "50%" }}
                placeholder={placeholder}
                onChange={(event) => onChange(event.target.value)}
            ></Input>
        </Box>
    );
};

export default SearchBar;
