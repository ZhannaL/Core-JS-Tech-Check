import { Box, Button, InputBase, Link, Paper, TextField, Typography } from '@mui/material';
import funcfn from 'src/assets/images/6TQQoCtYcEk.jpg';
import arrowfn from 'src/assets/images/hAh9xy9fmTg.jpg';

const BoxStyle = {
  p: 2,
  bgcolor: '#def3f3',
  border: '2px solid #000',
};

const firstEx =
  'var user = {\n \xa0firstName: "Вася", \n \xa0SayHi() {    \n\xa0\xa0\xa0 console.log("Привет, ${this.firstName}!");\n },\n};';
const firstEx1 = 'var user2 = { \n \xa0firstName: "John", \n };';
const firstEx2 = 'user.sayHi.bind(user2)()';
const firstEx3 = 'user.sayHi()';

export const This = () => {
  return (
    <Box sx={{ fontFamily: 'Fira Code, monospace' }}>
      <Typography component="div" color="primary" variant="h5" align="center">
        <Box lineHeight={2} fontWeight="fontWeightBold" pb={3}>
          This
        </Box>
      </Typography>

      <Box display="flex" alignItems="center">
        <Paper sx={{ ...BoxStyle, width: '60%' }}>
          <InputBase fullWidth multiline value={firstEx} />
          <InputBase fullWidth multiline value={firstEx1} />
          <InputBase fullWidth multiline value={firstEx2} />
          <InputBase fullWidth multiline value={firstEx3} />
        </Paper>
        <Box px={5}>
          <Button variant="contained" onClick={() => {}}>
            run
          </Button>
        </Box>
        <Paper sx={{ ...BoxStyle, width: '20%' }}>
          <Typography> Привет, John! </Typography>
          <Typography> Привет, Вася! </Typography>
        </Paper>
      </Box>
      <Typography> Arrow functions have no arguments variable.</Typography>
      <Box display="flex" flexDirection="column">
        <Link href="https://javascript.info/arrow-functions" target="_blank" rel="noopener">
          link to <i>javascript.info</i> - <b>arrow-functions</b>
        </Link>
        <Link href="https://javascript.info/bind" target="_blank" rel="noopener">
          link to <i>javascript.info</i> - <b>bind</b>
        </Link>
      </Box>
      <Box display="flex" alignItems="center">
        <Paper sx={{ ...BoxStyle, width: '60%' }}>
          <img style={{ width: '100%', height: '50%' }} src={arrowfn} alt="arrowfn" />
        </Paper>

        <Paper sx={{ ...BoxStyle, width: '60%' }}>
          <img style={{ width: '100%', height: '50%' }} src={funcfn} alt="funcfn" />
        </Paper>
      </Box>
      <Box px={5}>
        <Button
          variant="contained"
          onClick={() => {
            function doSomething() {
              console.log(this);
            }

            doSomething();
          }}
        >
          console.log(this);
        </Button>
      </Box>
    </Box>
  );
};
