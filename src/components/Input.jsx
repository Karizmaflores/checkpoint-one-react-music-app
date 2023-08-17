import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function Input(props) {
  return (
      <TextField 
      id={props.id} 
      label={props.label} 
      variant="standard" 
      placeholder={props.type} 
      type={props.type}
      fullWidth
      />
  );
}