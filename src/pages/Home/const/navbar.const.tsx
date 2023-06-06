import {
    People as PeopleIcon,
    Image as ImageIcon,
    Public as PublicIcon,
    Dns as DnsIcon,
} from "@mui/icons-material";
import SettingsInputCompositeIcon from "@mui/icons-material/SettingsInputComposite";
import SettingsEthernetIcon from "@mui/icons-material/SettingsEthernet";

export const mainNavbarItem = [
    {
        id: 0,
        icon: <PeopleIcon />,
        label: "Authentication",
        route: "authentication",
    },
    {
        id: 1,
        icon: <DnsIcon />,
        label: "Database",
        route: "database",
    },
    {
        id: 2,
        icon: <ImageIcon />,
        label: "Storage",
        route: "storage",
    },
    {
        id: 3,
        icon: <PublicIcon />,
        label: "Hosting",
        route: "hosting",
    },
    {
        id: 4,
        icon: <SettingsInputCompositeIcon />,
        label: "Functions",
        route: "function",
    },
    {
        id: 5,
        icon: <SettingsEthernetIcon />,
        label: "Machain Learning",
        route: "machine-learning",
    },
];
