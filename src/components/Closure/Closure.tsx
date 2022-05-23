import { Box, Button, Link, Paper, Typography } from '@mui/material';
import { firstEx, secondEx, thirdEx } from './helper';

const BoxStyle = {
  p: 2,
  bgcolor: '#def3f3',
  border: '2px solid #000',
};

export const Closure = () => {
  return (
    <Box sx={{ fontFamily: 'Fira Code, monospace' }}>
      <Typography component="div" color="primary" variant="h5" align="center">
        <Box lineHeight={2} fontWeight="fontWeightBold" pb={3}>
          Closure
        </Box>
      </Typography>
      <Link href="https://learn.javascript.ru/closure" target="_blank" rel="noopener">
        link to javascript.info
      </Link>

      <Box display="flex" alignItems="center">
        <Paper sx={{ ...BoxStyle, width: '60%' }}>
          <Typography component="div">
            <pre>{firstEx}</pre>
          </Typography>
        </Paper>
        <Box px={5}>
          <Button
            variant="contained"
            onClick={() => {
              let name = 'John';
              function sayHi() {
                console.log('Hi, ' + name);
              }
              name = 'Pete';
              sayHi();
            }}
          >
            run
          </Button>
        </Box>
        <Paper sx={{ ...BoxStyle, width: '20%' }}>
          <Typography> Hi, Pete </Typography>
        </Paper>
      </Box>

      <Box display="flex" alignItems="center" pt={3}>
        <Paper sx={{ ...BoxStyle, width: '60%' }}>
          <Typography component="div">
            <pre>{secondEx}</pre>
          </Typography>
        </Paper>
        <Box px={5}>
          <Button
            variant="contained"
            onClick={() => {
              function makeWorker() {
                const name = 'Pete';
                return function () {
                  console.log('Hi, ' + name);
                };
              }
              const name = 'John';
              const work = makeWorker();
              work();
            }}
          >
            run
          </Button>
        </Box>
        <Paper sx={{ ...BoxStyle, width: '20%' }}>
          <Typography> Hi, Pete </Typography>
        </Paper>
      </Box>

      <Box display="flex" alignItems="center" pt={3}>
        <Paper sx={{ ...BoxStyle, width: '80%' }}>
          <Typography component="div">
            <pre>{thirdEx}</pre>
          </Typography>
        </Paper>
      </Box>
      {/* <Button
        variant="contained"
        onClick={() => {
          function makeWorker() {
            return function () {
              console.log('Hi, ' + name);
            };
          }
          const name = 'John';
          const work = makeWorker();
          work();
        }}
      >
        run
      </Button> */}
    </Box>
  );
};
