import { BoxProps, Card, CardContent } from "@mui/material";
import React, { ReactElement, ReactNode } from "react";

interface CardProps {
    header: ReactElement<BoxProps>;
    content: ReactNode;
}

const BasicCard = ({ header, content }: CardProps) => {
    const cartStyles = {
        width: "1050px",
        position: "absolute",
        left: "50%",
        transform: "translateX(-50%)",
        borderRadius: "8px",
    };
    return (
        <Card sx={cartStyles}>
            {header}
            <CardContent>{content}</CardContent>
        </Card>
    );
};

export default BasicCard;
