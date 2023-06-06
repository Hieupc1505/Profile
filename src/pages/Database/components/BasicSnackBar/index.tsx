import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Snackbar, { SnackbarProps } from "@mui/material/Snackbar";
import MuiAlert, { AlertColor, AlertProps } from "@mui/material/Alert";
import CommonBtn from "~/common/Button";

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref
) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

type BasicSnackBarProps = SnackbarProps & {
    severity?: AlertColor;
    onClose:
        | ((event: React.SyntheticEvent<Element, Event>) => void)
        | undefined;
};

const BasicSnackBar = ({
    open,
    onClose,
    severity,
    message,
}: BasicSnackBarProps) => {
    return (
        <>
            <Snackbar open={open} autoHideDuration={6000} onClose={onClose}>
                <Alert
                    onClose={onClose}
                    severity={severity}
                    sx={{ width: "100%" }}
                >
                    {message}
                </Alert>
            </Snackbar>
        </>
    );
};

export default BasicSnackBar;
