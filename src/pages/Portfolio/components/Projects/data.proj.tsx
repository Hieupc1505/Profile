import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import shopv2Img from "/Portfolio/shopv2.jpg";
import sportv2Img from "/Portfolio/sports.jpg";
import besnikImg from "/Portfolio/besnik.jpg";
import { Link } from "react-router-dom";
import { Link as LinkUI } from "@mui/material";

export const projectsData = [
    {
        image: shopv2Img,
        title: "SHOP RETAILER 🛒",
        des: `Trang web bán hàng là một nền tảng trực tuyến cho phép người dùng đặt mua hàng online tạo sự tiện nghi cho khách hàng.
         Trang web cung cấp một giao diện để tìm kiếm, so sánh và thanh toán.`,
        tools: ["React", "SCSS"],
        links: [
            {
                name: "Code",
                icon: <GitHubIcon />,
                link: "https://github.com/Hieupc1505/clientShopRetailerv2",
            },
            {
                name: "Live Demo",
                icon: <OpenInNewIcon />,
                link: "https://client-shop-retailerv2.vercel.app/",
            },
        ],
    },
    {
        image: sportv2Img,
        title: "SPORTS ⚽",
        des: "Sports là trang web giúp những người yêu thể thao nói chung và yêu bóng đá nói riêng có thể theo dõi tỷ số, highlight trận đấu của các giải đấu hàng đầu thế giới một cách dễ dàng thuận tiện hơn.",
        tools: ["React", "SCSS"],
        links: [
            {
                name: "Code",
                icon: <GitHubIcon />,
                link: "https://github.com/Hieupc1505/clientSport2",
            },
            {
                name: "Live Demo",
                icon: <OpenInNewIcon />,
                link: "https://league88.netlify.app/",
            },
        ],
    },
    {
        image: besnikImg,
        title: "Besnik 🏋️",
        des: "Trang web tĩnh sử dụng vitejs và material ui, có sử dụng responsive giúp tăng hiệu quả hiển thị trên các thiết bị truy cập.",
        tools: ["ViteJs", "MUI"],
        links: [
            {
                name: "Code",
                icon: <GitHubIcon />,
                link: "#",
            },
            {
                name: "Live Demo",
                icon: <OpenInNewIcon />,
                link: "/pages/besnik",
            },
        ],
        typeLink: true,
    },
];
