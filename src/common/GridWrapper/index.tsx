import { Grid } from "@mui/material";
import React, { ReactNode } from "react";
type CustomStyle = Record<string, any>;

interface GridWrapperProps {
    children: ReactNode;
    styles: CustomStyle;
    column?: number;
}

const GridWrapper = ({ children, styles, column = 12 }: GridWrapperProps) => {
    return (
        <Grid item xs={column} sx={styles}>
            {children}
        </Grid>
    );
};

export default GridWrapper;
