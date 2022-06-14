import React from 'react';
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

export default function EndorseCover({ openDialog, locations ,confirmLocation}) {
    const [open, setOpen] = React.useState(openDialog);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
    console.log(openDialog)
    const handleClose = () => {
        confirmLocation(value,location)
        setOpen(false);
    };
    const [value, setValue] = React.useState('');
    const [location, setLocation] = React.useState('');


    const handleChange = (event) => {
        setValue(event.target.value);
    };
    const handleChange1 = (event) => {
        setLocation(event.target.value);
    };

    return (
        <div>
            <Dialog
                fullScreen={fullScreen}
                open={open}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
            >
                <DialogTitle id="responsive-dialog-title">{"Where do you want to add the Cover?"}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        <RadioGroup aria-label="risk" name="risk1" value={value} onChange={handleChange}>
                            <FormControlLabel value="Policy Cover" control={<Radio />} label="Policy Level Coverage" />
                            <FormControlLabel value="Location Cover" control={<Radio />} label="Location Level Coverage" />
                            {value == 'Location Cover' && locations.length > 0 ?
                                <RadioGroup aria-label="risk" name="risk2" value={location} onChange={handleChange1} style={{marginLeft:'50px'}}>
                                    {locations.map((location, index) => (
                                        <FormControlLabel value={location} control={<Radio />} label={location} />
                                    ))}
                                </RadioGroup>
                                : null}
                        </RadioGroup>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary" 
                    disabled={!(value=="Policy Cover"||(location!=''||locations.length==0))}
                    autoFocus>
                        Next
          </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
