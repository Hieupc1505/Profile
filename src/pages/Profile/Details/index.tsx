import React, { Fragment } from "react";

import {
    Box,
    Divider,
    List,
    ListItem,
    ListItemText,
    Typography,
    styled,
} from "@mui/material";
import { profileTheme } from "../theme.profile";
import { DetailData } from "./data.details";

interface listsProps {
    main: string;
    content?: string[];
}

interface LinkProps {
    name: string;
    link: string;
}

interface DetailDataProps {
    title: string;
    lists: listsProps[];
    links: LinkProps[];
}

// interface DetailDataProps {
//     title: string;
//     lists: ({
//         main: string;
//         contents?: undefined;
//     } | {
//         main: string;
//         contents: string[];
//     })[];
//     links: {
//         name: string;
//         link: string;
//     }[];
// }

const Details = () => {
    const CustomBox = styled(Box)(() => ({
        backgroundColor: "white",
        padding: "54px 22.5px",
    }));

    const CustomTextDark = styled(Typography)(({ theme }) => ({
        fontSize: "16px",
        color: theme.palette.primary.dark,
        fontWeight: 700,
        margin: "15px 0",
    }));

    const CustomTitle = styled(Typography)(({ theme }) => ({
        color: theme.palette.primary.main,
        fontSize: "18px",
        fontWeight: 600,
    }));

    const CustomDivider = styled(Divider)(({ theme }) => ({
        height: "2.5px",
        backgroundColor: theme.palette.primary.light,
        margin: "20px 0",
    }));

    return (
        <CustomBox>
            <Box>
                <CustomTitle>Mục tiêu nghề nghiệp</CustomTitle>
                <Typography variant="body1">
                    Học hỏi những kinh nghiệm về kỹ năng xây dụng, thiết kế và
                    lập trình web để trở thành một web developer chuyên nghiệp.
                </Typography>
            </Box>
            <CustomDivider />
            <Box>
                <CustomTitle>Học vấn</CustomTitle>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <CustomTextDark>Đại Học Công Nghiệp Hà Nội</CustomTextDark>
                    <Typography
                        variant="body2"
                        color={profileTheme.palette.info.main}
                        sx={{
                            fontStyle: "italic",
                        }}
                    >
                        9/2019 - Hiện nay
                    </Typography>
                </Box>
                <Typography variant="body1">
                    Ngành Công Nghệ Thông Tin
                </Typography>
                <CustomTextDark sx={{ fontSize: "14px", margin: "0 0" }}>
                    Sinh Viên Năm 4
                </CustomTextDark>
            </Box>
            <CustomDivider />
            <Box>
                <CustomTitle>Kinh nghiệm làm việc</CustomTitle>
                {DetailData.map(
                    ({ main, title, lists, links, timer }, index) => (
                        <Fragment key={index}>
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                }}
                            >
                                <CustomTextDark>{main}</CustomTextDark>
                                <Typography
                                    variant="body2"
                                    color={profileTheme.palette.info.main}
                                    sx={{
                                        fontStyle: "italic",
                                    }}
                                >
                                    {timer}
                                </Typography>
                            </Box>
                            <Typography variant="body2">{title}</Typography>
                            <List>
                                {lists.map((list, index) => (
                                    <ListItem key={index}>
                                        <ListItemText
                                            primary={`- ${list.main}`}
                                            secondary={
                                                list.contents && (
                                                    <React.Fragment>
                                                        {list.contents.map(
                                                            (
                                                                content,
                                                                index
                                                            ) => (
                                                                <Typography
                                                                    key={index}
                                                                    component={
                                                                        "span"
                                                                    }
                                                                >
                                                                    {content}
                                                                </Typography>
                                                            )
                                                        )}
                                                    </React.Fragment>
                                                )
                                            }
                                        />
                                    </ListItem>
                                ))}

                                <ListItem
                                    sx={{
                                        flexDirection: "column",
                                        alignItems: "flex-start",
                                    }}
                                >
                                    {links.map(({ name, link }, index) => (
                                        <ListItemText
                                            key={index}
                                            primary={
                                                <Typography component={"span"}>
                                                    {`Link ${name}:`}
                                                    <a
                                                        style={{
                                                            marginLeft: "5px",
                                                            textDecoration:
                                                                "none",
                                                            color: profileTheme
                                                                .palette.info
                                                                .main,
                                                        }}
                                                        href={link}
                                                        target="_blank"
                                                    >
                                                        {link}
                                                    </a>
                                                </Typography>
                                            }
                                        />
                                    ))}
                                </ListItem>
                            </List>
                        </Fragment>
                    )
                )}
            </Box>
        </CustomBox>
    );
};

export default Details;
