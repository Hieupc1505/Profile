import { Button, ButtonProps } from "@mui/material";
import { ReactNode } from "react";

interface BtnProps extends ButtonProps {
    children: ReactNode;
}

const CommonBtn = ({
    children,
    variant,
    color,
    disabled,
    ...props
}: BtnProps) => {
    return (
        <Button {...props} variant={variant} color={color} disabled={disabled}>
            {children}
        </Button>
    );
};

export default CommonBtn;
