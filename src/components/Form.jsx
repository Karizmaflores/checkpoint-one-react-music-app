import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import Input from './Input';

function Form(props) {
  return (
    <Box sx={{
      margin: "64px auto 0",
    }}
      component="form" noValidate autoComplete="off"
      maxWidth={256}
      >
      <Input label="Username" />
      <Input label="Password" type="password" />
      <Button sx={{
        marginTop: "16px",
       }} 
       variant="contained" fullWidth
       onClick={() => props.setIsLoggedIn(true)}
       >
        Log In</Button>   
      </Box>
  );
}

export default Form