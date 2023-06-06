export default {
    gridWrapperStyles: {
        marginLeft: "320px",
        backgroundColor: "#eaeff1",
        padding: "48px 32px",
        minHeight: "calc(100vh - 166px)",
        position: "relative",
        display: { xs: 12 },
    },
    cardStyles: {
        wrapper: {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            paddingLeft: "20px",
            paddingRight: "20px",
            height: "65px",
            backgroundColor: "#f5f5f5",
            borderBottom: "1px solid rgba(0, 0, 0, .12)",
        },
        addUserBtn: {
            fontSize: "1.05rem",
            marginRight: "8px",
        },
    },
    inputFields: {
        display: "flex",
        flexDirection: "column",
        marginTop: "20px",
        marginBottom: "15px",
        ".MuiFormControl-root": {
            marginBottom: "24px",
        },
        ".MuiFormHelperText-root": {
            color: "red",
        },
    },
};
