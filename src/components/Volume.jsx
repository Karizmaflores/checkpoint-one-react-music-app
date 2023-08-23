import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Switch from '@mui/material/Switch';
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';

function Volume(props) {

  function volumeControl(e){
    props.setVolume(e.target.value)
  }

  return (
    <Card sx={{ maxWidth: 275 }}>
      <CardContent>
        <Typography variant='h6' gutterBottom>
          Master Volume
        </Typography>
        <Typography variant="body2">
          Overrides all other sound settings in this application
        </Typography>
      </CardContent>
      <CardActions>
      <Box sx={{ width: 300 }}>
      <Slider
        aria-label="Temperature"
        // getAriaValueText={valuetext}
        valueLabelDisplay="auto"
        step={10}
        marks
        min={0}
        max={100}
        value={props.volume}
        onChange={volumeControl}
      />
    </Box>
      </CardActions>
    </Card>
  );
}

export default Volume