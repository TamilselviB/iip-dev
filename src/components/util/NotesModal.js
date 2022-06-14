import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import RestoreIcon from '@material-ui/icons/Restore';

const styles = theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)(props => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
          style={{ width: '65px' }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles(theme => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles(theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

function NotesModal(props) {
  const { name, attrValue, fieldIndex, handleReplace, setValueInparentComponent } = props;
  const [open, setOpen] = React.useState(false);
  const [textAreaValue, setTextAreaValue] = React.useState(attrValue);

  const handleTextAreaValueChange = event => {

    setTextAreaValue(event.target.value);

    if (fieldIndex) {
      setTextAreaValue(event.target.value)
      console.log(fieldIndex, event.target.value);
      handleReplace(fieldIndex, event.target.value);
    }
  };

  const handleClickOpen = () => {
    setOpen(true);
    setTextAreaValue(attrValue);
  };
  const handleClose = () => {

    setOpen(false);
    setValueInparentComponent(textAreaValue);

    if (fieldIndex) {
      setValueInparentComponent(textAreaValue);
      handleReplace(fieldIndex, textAreaValue);
    }



  };

  return (
    <div>
      <Button
        variant="outlined"
        onClick={handleClickOpen}
        style={{
          border: 'none',
        }}
      >
        <RestoreIcon />
      </Button>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
         Remarks
        </DialogTitle>
        <DialogContent dividers>
          <textarea
            className="form-control"
            value={textAreaValue}
            onChange={handleTextAreaValueChange}
            style={{ height: '340px' }}
          />
        </DialogContent>
        <DialogActions>
          <Button
            autoFocus
            onClick={handleClose}
            style={{
              fontSize: '17px',
              backgroundColor: '#F04763',
              color: 'white',
              height: '40px',
              width: '100px',
            }}
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default NotesModal;
