import { Box, Button, Paper, Typography } from '@mui/material';

const BoxStyle = {
  p: 2,
  bgcolor: '#def3f3',
  border: '2px solid #000',
};

const fn1 = () => {
  console.log('start');
  setTimeout(() => console.log('timeout'), 0);
  Promise.resolve().then(() => console.log('promise'));
  console.log('end');
};

const fn2 = () => {
  console.log('start');
  setTimeout(() => console.log('timeout'), 0);
  new Promise((resolutionFunc, rejectionFunc) => {
    console.log('promise');
    resolutionFunc('res');
  }).then(() => console.log('promiseThen'));
  console.log('end');
};

const fn3 = () => {
  console.log('start');
  setTimeout(() => console.log('timeout'), 0);
  new Promise((resolutionFunc, rejectionFunc) => {
    console.log('promise');
  }).then(() => console.log('promiseThen'));
  console.log('end');
};

const fn4 = () => {
  console.log(1);
  setTimeout(() => console.log(2));
  Promise.resolve().then(() => console.log(3));
  Promise.resolve().then(() => setTimeout(() => console.log(4)));
  Promise.resolve().then(() => console.log(5));
  setTimeout(() => console.log(6));
  console.log(7);
};

export const EventLoop = () => {
  return (
    <Box sx={{ fontFamily: 'Fira Code, monospace' }}>
      <Typography component="div" color="primary" variant="h5" align="center">
        <Box lineHeight={2} fontWeight="fontWeightBold" pb={3}>
          EventLoop
        </Box>
      </Typography>
      <Box display="flex" alignItems="center">
        <Paper sx={{ ...BoxStyle, width: '60%' }}>
          <Typography> console.log('start') </Typography>
          <Typography> setTimeout(() ={'>'} console.log('timeout'), 0) </Typography>
          <Typography> Promise.resolve().then(() ={'>'} console.log('promise'))</Typography>
          <Typography> console.log('end') </Typography>
        </Paper>
        <Box px={5}>
          <Button variant="contained" onClick={() => fn1()}>
            run
          </Button>
        </Box>
        <Paper sx={{ ...BoxStyle, width: '20%' }}>
          <Typography> 'start' </Typography>
          <Typography> 'end' </Typography>
          <Typography> 'promise'</Typography>
          <Typography> 'timeout'</Typography>
        </Paper>
      </Box>

      <Box display="flex" alignItems="center" pt={3}>
        <Paper sx={{ ...BoxStyle, width: '60%' }}>
          <Typography> console.log('start') </Typography>
          <Typography> setTimeout(() ={'>'} console.log('timeout'), 0) </Typography>
          <Typography> {`new Promise((resolutionFunc, rejectionFunc) => {`}</Typography>
          <Typography> &nbsp; &nbsp; {` console.log('promise');`}</Typography>
          <Typography> &nbsp; &nbsp; {` resolutionFunc('res');`}</Typography>
          <Typography> {`}).then(() => console.log('promiseThen'));`}</Typography>
          <Typography> console.log('end') </Typography>
        </Paper>
        <Box px={5}>
          <Button variant="contained" onClick={() => fn2()}>
            run
          </Button>
        </Box>
        <Paper sx={{ ...BoxStyle, width: '20%' }}>
          <Typography> 'start' </Typography>
          <Typography> 'promise'</Typography>
          <Typography> 'end' </Typography>
          <Typography> 'promiseThen'</Typography>
          <Typography> 'timeout'</Typography>
        </Paper>
      </Box>

      <Box display="flex" alignItems="center" pt={3}>
        <Paper sx={{ ...BoxStyle, width: '60%' }}>
          <Typography> console.log('start') </Typography>
          <Typography> setTimeout(() ={'>'} console.log('timeout'), 0) </Typography>
          <Typography> {`new Promise((resolutionFunc, rejectionFunc) => {`}</Typography>
          <Typography> &nbsp; &nbsp; {` console.log('promise');`}</Typography>
          <Typography> {`}).then(() => console.log('promiseThen'));`}</Typography>
          <Typography> console.log('end') </Typography>
        </Paper>
        <Box px={5}>
          <Button variant="contained" onClick={() => fn3()}>
            run
          </Button>
        </Box>
        <Paper sx={{ ...BoxStyle, width: '20%' }}>
          <Typography> 'start' </Typography>
          <Typography> 'promise'</Typography>
          <Typography> 'end' </Typography>
          <Typography> 'timeout'</Typography>
        </Paper>
      </Box>

      <Box display="flex" alignItems="center" pt={3}>
        <Paper sx={{ ...BoxStyle, width: '60%' }}>
          <Typography> console.log(1); </Typography>
          <Typography> setTimeout(() ={'>'} console.log(2)); </Typography>
          <Typography> Promise.resolve().then(() ={'>'} console.log(3));</Typography>
          <Typography>
            Promise.resolve().then(() ={'>'} setTimeout(() ={'>'} console.log(4)));
          </Typography>
          <Typography> Promise.resolve().then(() ={'>'} console.log(5));</Typography>
          <Typography> setTimeout(() ={'>'} console.log(6)); </Typography>
          <Typography> console.log(7); </Typography>
        </Paper>
        <Box px={5}>
          <Button variant="contained" onClick={() => fn4()}>
            run
          </Button>
        </Box>
        <Paper sx={{ ...BoxStyle, width: '20%' }}>
          <Typography> '1' </Typography>
          <Typography> '7'</Typography>
          <Typography> '3' </Typography>
          <Typography> '5'</Typography>
          <Typography> '2'</Typography>
          <Typography> '6'</Typography>
          <Typography> '4'</Typography>
        </Paper>
      </Box>
    </Box>
  );
};
