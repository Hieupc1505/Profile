import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import shopv2Img from "/Portfolio/shop.png";
import sportv2Img from "/Portfolio/sports.jpg";
import Landing1 from "/Portfolio/landing1.png";
import Page from "/Portfolio/page.png";

export const projectsData = [
    {
        image: shopv2Img,
        title: "SHOP RETAILER 🛒",
        des: `Trang web bán hàng là một nền tảng trực tuyến cho phép người dùng đặt mua hàng online tạo sự tiện nghi cho khách hàng.
         Trang web cung cấp một giao diện để tìm kiếm, so sánh và thanh toán.`,
        tools: ["NodeJS", "React"],
        links: [
            {
                name: "Code",
                icon: <GitHubIcon />,
                link: "https://github.com/Hieupc1505/clientShopRetailerv2",
            },
            {
                name: "Try Cập",
                icon: <OpenInNewIcon />,
                link: "https://shop.izsports.online/",
            },
        ],
    },
    {
        image: sportv2Img,
        title: "SPORTS ⚽",
        des: "Sports là trang web giúp những người yêu thể thao nói chung và yêu bóng đá nói riêng có thể theo dõi tỷ số, highlight trận đấu của các giải đấu hàng đầu thế giới một cách dễ dàng thuận tiện hơn.",
        tools: ["Nodejs", "React"],
        links: [
            {
                name: "Code",
                icon: <GitHubIcon />,
                link: "https://github.com/Hieupc1505/clientSport2",
            },
            {
                name: "Try Cập",
                icon: <OpenInNewIcon />,
                link: "https://v3-sports-client.vercel.app/",
            },
        ],
    },
    {
        image: Landing1,
        title: "Besnik 🏋️",
        des: "Trang web tĩnh sử dụng vitejs và material ui, có sử dụng responsive giúp tăng hiệu quả hiển thị trên các thiết bị truy cập.",
        tools: ["Nextjs", "MUI"],
        links: [
            {
                name: "Code",
                icon: <GitHubIcon />,
                link: "#",
            },
            {
                name: "Try Cập",
                icon: <OpenInNewIcon />,
                link: "https://landing-page-ten-sigma-32.vercel.app/",
            },
        ],
        typeLink: true,
    },
    {
        image: Page,
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
                name: "Try Cập",
                icon: <OpenInNewIcon />,
                link: "https://landing-page-oi6j.vercel.app/",
            },
        ],
        typeLink: true,
    },
];
