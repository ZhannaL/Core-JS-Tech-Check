import { Box, Typography } from '@mui/material';
import { useState, useEffect } from 'react';

export const Timer = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <Box sx={{ fontFamily: 'Fira Code, monospace' }}>
      <Typography component="div" color="primary" variant="h5" align="center">
        <Box lineHeight={2} fontWeight="fontWeightBold" pb={3}>
          Timer
        </Box>
      </Typography>
      <Box display="flex" alignItems="center">
        <Typography variant="h6">
          <pre> Timer: {seconds} </pre>
        </Typography>
      </Box>
    </Box>
  );
};

export default Timer;
