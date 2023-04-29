import React from "react";
import { Box, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from '@mui/material';
import { tokens } from '../theme';
const ProgressCircle = ({ progress = "0.70", size = "40", color1 = "#141b2d", color2 = "#3da58a", index }) => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    const angle = progress * 360;
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const circleSize = isSmallScreen ? (parseInt(size) * 0.8).toString() : size;

    const cardColors = ['#28a745', '#DC3545', '#17A2B8', '#6C757D'];
    
    return (
        <Box
            sx={{
                background: `radial-gradient(${cardColors[index%4]} 55%, transparent 5%),
                conic-gradient(transparent 0deg ${angle}deg, ${color1} ${angle}deg 360deg),
                #fff`,
                borderRadius: "50%",
                width: `${circleSize}px`,
                height: `${circleSize}px`,

                position: 'relative', // position the text absolutely relative to the parent Box component
                top: '50%', // set top to 50% to center the text vertically
                left: '50%', // set left to 50% to center the text horizontally
                transform: 'translate(-50%, -50%)',
            }}
            justifyContent="center"
        >
        </Box>
    );
};

export default ProgressCircle;