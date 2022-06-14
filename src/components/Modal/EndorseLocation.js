import React ,{useEffect}from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

export default function EndorseLocation({ openDialog, locations,setLocationIndex,confirmDelete=false }) {
  console.log(locations)
  const [open, setOpen] = React.useState(openDialog);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
  console.log(openDialog)
  const handleClose = () => {
    if(confirmDelete)
      confirmDelete()
    setOpen(false);
  };
  const [value, setValue] = React.useState(0);

  const handleChange = (event) => {
    console.log(event.target.value)
    setValue(event.target.value);
    setLocationIndex(locations.indexOf(event.target.value))
  };
  useEffect(() => {
    setValue(locations[0])
}, [locations]);
  return (
    <div>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">{!confirmDelete?"Do you want to change the risk info?":"Do you want to Delete the Location"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <RadioGroup aria-label="risk" name="risk1" value={value} onChange={handleChange}>
              {locations.map((location, index) => (
                <FormControlLabel value={location} control={<Radio />} label={location} />
              ))}
              {/* <FormControlLabel value="location1" control={<Radio />} label="Location 1" />
              <FormControlLabel value="location2" control={<Radio />} label="Location 2" /> */}
            </RadioGroup>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" autoFocus>
          {!confirmDelete?"Next":"Delete"}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
