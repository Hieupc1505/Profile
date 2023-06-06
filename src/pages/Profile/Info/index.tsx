import React from "react";
import {
    Box,
    Typography,
    styled,
    Avatar,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Divider,
} from "@mui/material";
import avatar from "/Portfolio/avatarv2.png";
import { dataInfo } from "./data.info";

const Info = () => {
    const CustomBox = styled(Box)(({ theme }) => ({
        backgroundColor: theme.palette.primary.light,
        padding: "36px 22px",
    }));

    const CustomName = styled(Typography)(({ theme }) => ({
        color: theme.palette.primary.main,
        fontSize: "30px",
        textAlign: "center",
        fontWeight: "400",
    }));

    const CustomTitle = styled(Typography)(({ theme }) => ({
        color: theme.palette.primary.main,
        fontSize: "18px",
        fontWeight: 600,
    }));

    return (
        <CustomBox>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "16px",
                    mt: "20px",
                }}
            >
                <CustomName>Hoàng Văn Hiệu</CustomName>
                <Typography variant="body1">WEB DEVELOPER</Typography>
                <Avatar
                    src={avatar}
                    alt="Avatar"
                    sx={{ width: 146, height: 146 }}
                />
            </Box>
            <List
                sx={{
                    width: "100%",
                    backgroundColor: "transparent",
                    mt: "20px",
                    "& li": {
                        backgroundColor: "inherit",
                        padding: "4px 16px",
                    },
                    "&MuiListItemIcon-root": {
                        color: "primary",
                    },
                }}
            >
                <ListItem>
                    <ListItemText
                        primary={<CustomTitle>Thông tin liên hệ</CustomTitle>}
                    />
                </ListItem>
                {dataInfo.map(({ icon, text }, index) => (
                    <ListItem key={index}>
                        <ListItemIcon sx={{ minWidth: "40px" }}>
                            {icon}
                        </ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>

            <Divider sx={{ height: "3px", bgcolor: "#ffae305e" }} />

            <List
                sx={{
                    width: "100%",
                    backgroundColor: "transparent",
                    mt: "16px",
                    "& .MuiListItem-root": {
                        backgroundColor: "inherit",
                        padding: "4px 16px",
                    },

                    "& .MuiListItemText-root": {
                        fontSize: "1rem",
                        // padding: "0 16px",
                    },
                    "&MuiListItemIcon-root": {
                        color: "primary",
                    },
                }}
                subheader={<CustomTitle>Các kỹ năng</CustomTitle>}
            >
                <ListItem>
                    <ListItemText
                        primary={
                            <Typography sx={{ fontWeight: 700, mb: "10px" }}>
                                Font-End
                            </Typography>
                        }
                        secondary={
                            <React.Fragment>
                                <Typography
                                    sx={{ display: "block" }}
                                    component="span"
                                >
                                    - HTML/CSS/SCSS, Javascript, Regex,PhotoShop
                                </Typography>
                                <Typography
                                    sx={{ display: "block" }}
                                    component="span"
                                >
                                    - ReactJs, Redux, Zustand,Bootstrap, JQuery,
                                    MUI, Tailwind
                                </Typography>
                            </React.Fragment>
                        }
                    />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary={
                            <Typography sx={{ fontWeight: 700, mb: "10px" }}>
                                Back-End
                            </Typography>
                        }
                        secondary={
                            <React.Fragment>
                                <Typography
                                    component={"span"}
                                    sx={{ display: "block" }}
                                >
                                    - Nodejs, Redis, MongoDB, Docker, Git
                                </Typography>
                                <Typography component={"span"}>
                                    - Javascript
                                </Typography>
                            </React.Fragment>
                        }
                    />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary={
                            <Typography
                                component={"span"}
                                sx={{
                                    fontWeight: 700,
                                    mb: "10px",
                                    display: "block",
                                }}
                            >
                                Tiếng Anh
                            </Typography>
                        }
                        secondary={
                            <React.Fragment>
                                <Typography component={"span"}>
                                    - Có khả năng đọc hiểu tài liệu và giao tiếp
                                    cơ bản bằng tiếng Anh.
                                </Typography>
                            </React.Fragment>
                        }
                    />
                </ListItem>
            </List>
            <Divider sx={{ height: "3px", bgcolor: "#ffae305e" }} />

            <List
                sx={{
                    width: "100%",
                    backgroundColor: "transparent",
                    mt: "20px",
                    "& li": {
                        backgroundColor: "inherit",
                        padding: "4px 16px",
                    },
                }}
                subheader={<CustomTitle>Sở thích</CustomTitle>}
            >
                <ListItem>
                    <ListItemText
                        primary={
                            <Typography
                                component={"span"}
                                sx={{ fontWeight: 700, mb: "10px" }}
                            >
                                Thể Thao
                            </Typography>
                        }
                        secondary={
                            <React.Fragment>
                                <Typography component="span">
                                    - Thích chơi các môn thể thao như bóng đá,
                                    bóng chuyền, cầu lông, bóng bàn, bơi.
                                </Typography>
                            </React.Fragment>
                        }
                    />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary={
                            <Typography sx={{ fontWeight: 700, mb: "10px" }}>
                                Đọc sách
                            </Typography>
                        }
                        secondary={
                            <React.Fragment>
                                <Typography component="span">
                                    - Đọc để nâng cao hiểu biết, hoàn thiện các
                                    kỹ năng còn yếu, để ngẫm và để làm
                                </Typography>
                            </React.Fragment>
                        }
                    />
                </ListItem>
            </List>
        </CustomBox>
    );
};

export default Info;
