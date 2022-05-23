import { Box, Button, Link, Paper, Typography } from '@mui/material';
import { firstEx, secondEx, thirdEx } from './helpers';

const BoxStyle = {
  p: 2,
  bgcolor: '#def3f3',
  border: '2px solid #000',
};

export const Hoisting = () => {
  return (
    <Box sx={{ fontFamily: 'Fira Code, monospace' }}>
      <Typography component="div" color="primary" variant="h5" align="center">
        <Box lineHeight={2} fontWeight="fontWeightBold" pb={3}>
          Hoisting
        </Box>
      </Typography>
      <Link href="https://learn.javascript.ru/var" target="_blank" rel="noopener">
        link to javascript.info
      </Link>

      <Box display="flex" alignItems="center">
        <Paper sx={{ ...BoxStyle, width: '40%' }}>
          <Typography component="div">
            <pre> {firstEx} </pre>
          </Typography>
        </Paper>
        <Box px={5}>
          <Button
            variant="contained"
            onClick={() => {
              function sayHi() {
                console.log(phrase);
              }
              sayHi();
              // eslint-disable-next-line no-var
              var phrase = 'Hello';
            }}
          >
            run
          </Button>
        </Box>
        <Paper sx={{ ...BoxStyle, width: '40%' }}>
          <Typography> undefined </Typography>
        </Paper>
      </Box>

      <Box display="flex" alignItems="center" pt={3}>
        <Paper sx={{ ...BoxStyle, width: '40%' }}>
          <Typography component="div">
            <pre> {secondEx} </pre>
          </Typography>
        </Paper>
        <Box px={5}>
          <Button
            variant="contained"
            onClick={() => {
              function sayHi() {
                console.log(phrase);
              }
              sayHi();
              // eslint-disable-next-line prefer-const
              let phrase = 'Hello';
            }}
          >
            run
          </Button>
        </Box>
        <Paper sx={{ ...BoxStyle, width: '40%' }}>
          <Typography color="error">
            <b>ReferenceError: phrase is not defined </b>
          </Typography>
          <Typography color="error">
            <b> ReferenceError: Cannot access 'phrase' before initialization</b>
          </Typography>
        </Paper>
      </Box>

      <Box display="flex" alignItems="center" pt={3}>
        <Paper sx={{ ...BoxStyle, width: '40%' }}>
          <Typography component="div">
            <pre> {thirdEx} </pre>
          </Typography>
        </Paper>
        <Box px={5}>
          <Button
            variant="contained"
            onClick={() => {
              const bestFood = 'Fish and Chips';

              const myBestMeal = function () {
                console.log(bestFood);
                const bestFood = 'Vegetable Fried Rice';
              };

              myBestMeal();
            }}
          >
            run
          </Button>
        </Box>
        <Paper sx={{ ...BoxStyle, width: '40%' }}>
          <Typography color="error">
            <b> ReferenceError: Cannot access 'bestFood' before initialization </b>
          </Typography>
        </Paper>
      </Box>
      <Button
        variant="contained"
        onClick={() => {
          function sayHi() {
            console.log(phrase);
          }
          const phrase = 'Hello';
          sayHi();
        }}
      >
        run
      </Button>
    </Box>
  );
};
