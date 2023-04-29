import { Box, Typography, useTheme } from "@mui/material";
import ProgressCircle from "./ProgressCircle";
import { tokens } from "../theme";
import { fontWeight } from "@mui/system";

const StatBox = ({ title, subtitle, progress, increase, icon, index }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box minWidth="200px" maxWidth="200px" m="auto" p="auto">
      <Box display="flex" justifyContent="space-between" >
          {icon}
          <Typography
            variant="h6"
            fontWeight="bold"
            sx={{ color: colors.grey[900], lineHeight: 1, overflow: 'hidden', textOverflow: 'ellipsis' }}
            width="70%"
          >
            {title}
          </Typography>
        <Box>
          <ProgressCircle progress={progress} index={index} />
        </Box>
      </Box>
      <Box display="flex" justifyContent="space-between" mt="2px" >
      <Box display="block" >

      <Typography variant="p" sx={{ color: colors.grey[900], fontWeight: 550, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }} >
          {subtitle[0]}<br />
        </Typography>
        <Typography variant="p" sx={{ color: colors.grey[900], fontWeight: 550, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }} >
          {subtitle[1]}
        </Typography>
      </Box>
      <Box>

      <Typography
        variant="p"
        fontStyle="italic"
        sx={{ color: colors.grey[900], whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}
      >
          {increase}%
        </Typography>
      </Box>
      </Box>
    </Box>
  );
};

export default StatBox;
