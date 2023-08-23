import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';



function Quality(props) {

  function handleQuality(e){
    props.setQuality(e.target.value)
  }
  
  return (
    <Card sx={{ maxWidth: 275 }}>
      <CardContent>
        <Typography variant='h6' gutterBottom>
          Sound Quality
        </Typography>
        <Typography variant="body2">
          Manually control the music quality in event of poor connection
        </Typography>
      </CardContent>
      <CardActions>
      <Box sx={{ minWidth: 120 }}>
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">Select Quality</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={props.quality}
        label="Sound Quality"
        onChange={handleQuality}
      >
        <MenuItem value={1}>Low</MenuItem>
        <MenuItem value={2}>Normal</MenuItem>
        <MenuItem value={3}>High</MenuItem>
      </Select>
    </FormControl>
  </Box>
      </CardActions>
    </Card>
    
  );
}

export default Quality