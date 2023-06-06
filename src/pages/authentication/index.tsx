import { IconButton, Box, Typography } from "@mui/material";
import BasicCard from "./components/BasicCard";
import SearchBar from "./components/searchBar";
import { Refresh as RefreshIcon } from "@mui/icons-material";
import CommonBtn from "~/common/Button";
import authenStyle from "./styles";
import GridWrapper from "~/common/GridWrapper";
import { useEffect, useState } from "react";
import NewUserModal from "./components/newUserModal";

export interface userProps {
    userId: string | number;
    email: string;
    phoneNumber: string;
    gender: "male" | "female";
    terms: boolean;
}
const Authentication = () => {
    const { cardStyles, gridWrapperStyles } = authenStyle;
    const [open, setOpen] = useState<boolean>(false);
    const [users, setUsers] = useState<userProps[]>([]);
    const [searchResults, setSearchResult] = useState<userProps[]>(users);

    const addUser = (data: userProps): void => {
        users.push(data);
    };

    const getHeader = () => {
        const filterData = (value: string) => {
            const lowercasedValue = value.toLowerCase().trim();
            if (lowercasedValue === "") setUsers(searchResults);
            else {
                const filter = searchResults.filter((item: any) => {
                    return Object.keys(item).some((key) => {
                        return item[key]
                            .toString()
                            .toLowerCase()
                            .includes(lowercasedValue);
                    });
                });
                setUsers(filter);
            }
        };
        const handleSearch = (value: string): void => {
            filterData(value);
        };

        const openForm = () => {
            setOpen(true);
        };

        return (
            <Box sx={cardStyles.wrapper}>
                <SearchBar
                    placeholder="Search by email address, phone number, or UID"
                    onChange={handleSearch}
                    searchBarWidth="720px"
                />
                <Box>
                    <CommonBtn
                        variant="contained"
                        onClick={openForm}
                        size="large"
                        sx={cardStyles.addUserBtn}
                    >
                        Add User
                    </CommonBtn>
                </Box>
                <IconButton>
                    <RefreshIcon />
                </IconButton>
            </Box>
        );
    };
    const getContent = () => {
        return (
            <>
                {users.length ? (
                    users.map((user, index) => (
                        <Box key={index}>
                            <Typography>{user.userId}</Typography>
                            <Typography>{user.email}</Typography>
                            <Typography>{user.phoneNumber}</Typography>
                            <Typography>{user.gender}</Typography>
                        </Box>
                    ))
                ) : (
                    <Typography
                        align="center"
                        sx={{
                            margin: "40px 16px",
                            color: "rgba(0, 0, 0, .6)",
                            fontSize: "1.3rem",
                        }}
                    >
                        No users for this project yet
                    </Typography>
                )}
            </>
        );
    };
    console.log(searchResults);
    return (
        <GridWrapper styles={gridWrapperStyles}>
            <BasicCard header={getHeader()} content={getContent()} />
            {/* <BasicModal open={open} handleClose={() => setOpen(false)} /> */}
            <NewUserModal
                open={open}
                onClose={() => setOpen(false)}
                addUser={addUser}
            />
        </GridWrapper>
    );
};

export default Authentication;
