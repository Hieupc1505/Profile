import React from "react";
import GridWrapper from "~/common/GridWrapper";
import BasicSnackBar from "./components/BasicSnackBar";
import CommonBtn from "~/common/Button";
const Database = () => {
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (
        event?: React.SyntheticEvent | Event,
        reason?: string
    ) => {
        if (reason === "clickaway") {
            return;
        }

        setOpen(false);
    };

    return (
        <GridWrapper styles={{ marginLeft: "320px" }}>
            This is Database page.
            <CommonBtn variant="outlined" onClick={handleClick}>
                Open success snackbar
            </CommonBtn>
            <BasicSnackBar
                open={open}
                onClose={handleClose}
                severity="error"
                message="Have an error to resolve it!"
                autoHideDuration={2500}
            />
        </GridWrapper>
    );
};

export default Database;
