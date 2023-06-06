export const navbarStyles = {
    drawer: {
        width: 320,
        flexShrik: 0,
        "& .MuiDrawer-paper": {
            width: 320,
            boxSizing: "border-box",
            backgroundColor: "#101F33",
            color: "rgba(255, 255, 255, .7)",
        },
        "& .Mui-selected": {
            color: "red",
        },
        icons: {
            color: "rgba(255, 255, 255, .7) !important",
            marginLeft: "20px",
        },
        text: {
            "& span": {
                marginLeft: "-10px",
                fontWeight: "600",
                fontSize: "16px",
            },
        },
    },
};
