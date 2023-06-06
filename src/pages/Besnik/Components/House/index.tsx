import React, { FC } from "react";
import { Box, styled, Typography } from "@mui/material";
import bedIcon from "/Besnik/bed.svg";
import bothIcon from "/Besnik/both.svg";
import spaceIcon from "/Besnik/space.svg";
interface HouseProps {
    img: string;
    price: number | string;
    address: string;
    bedrooms: number;
    bathrooms: number;
    space: number;
}

const House: FC<HouseProps> = ({
    img,
    price,
    address,
    bedrooms,
    bathrooms,
    space,
}) => {
    const HouseBox = styled(Box)(({ theme }) => ({
        maxWidth: "350",
        backgroundColor: "#fff",
        margin: theme.spacing(0, 2, 0, 2),
        [theme.breakpoints.down("md")]: {
            margin: theme.spacing(2, 0, 2, 0),
        },
    }));
    const InfoBox = styled(Box)(({ theme }) => ({
        display: "flex",
        alignItems: "center",
        gap: theme.spacing(1),
    }));
    const ImgContainer = styled(Box)(({ theme }) => ({
        width: "100%",
    }));

    return (
        <HouseBox>
            <ImgContainer>
                <img
                    src={img}
                    alt={"housePhoto"}
                    style={{ maxWidth: "100%" }}
                />
            </ImgContainer>
            <Box sx={{ padding: "1rem" }}>
                <Typography variant="body2" sx={{ fontWeight: "700" }}>
                    ${price}
                </Typography>
                <Typography variant="body2" sx={{ my: 2 }}>
                    {address}
                </Typography>

                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                    }}
                >
                    <InfoBox>
                        <img src={bedIcon} alt="bedIcon" />
                        <Typography variant="body2">{bedrooms} Beds</Typography>
                    </InfoBox>
                    <InfoBox>
                        <img src={bothIcon} alt="bedIcon" />

                        <Typography variant="body2">
                            {bathrooms} Boths
                        </Typography>
                    </InfoBox>
                    <InfoBox>
                        <img src={spaceIcon} alt="bedIcon" />

                        <Typography variant="body2">{space} sqft</Typography>
                    </InfoBox>
                </Box>
            </Box>
        </HouseBox>
    );
};

export default House;
