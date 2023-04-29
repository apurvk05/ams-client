import React from "react";
import { Box, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from '@mui/material';
import { tokens } from '../theme';

const ProgressCircle2 = ({ progress = "0", size = "40", color1 = "#525252", text }) => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  const angle = (progress * 360);
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const circleSize = isSmallScreen ? (parseInt(size) * 0.8).toString() : size;
  const color2 = progress < 0.6 ? "#af3f3b":(progress>=0.75?"#2e7c67":"#ffff00")
  return (

        <Box
          sx={{
            background: `radial-gradient(${colors.primary[400]} 55%, transparent 5%),
                conic-gradient(transparent 0deg ${angle}deg, ${color1} ${angle}deg 360deg),
                ${color2}`,
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
          <Typography
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              textAlign: 'left',
              lineHeight: `${size}px`,
              fontWeight: 'bold',
              color: colors.grey[100],
            }}
            variant="h2"
          >
        {(progress * 100).toFixed(2)}%
          </Typography>

        </Box>
  );
};

export default ProgressCircle2;