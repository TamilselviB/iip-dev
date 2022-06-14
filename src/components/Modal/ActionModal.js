import React, { useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';

// styles
import useStyles from './ActionModal.styles';

const ActionModal = ({
  closeText,
  children,
  dialogActions,
  dialogContentText,
  dialogTitle,
  handleDialogClose,
  handleDialogSubmit,
  maxWidth,
  openDialog,
  submitText,
}) => {
  // state
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();

  useEffect(() => {
    setOpen(openDialog);
  }, [openDialog]);

  const handleClose = () => {
    setOpen(false);
    return handleDialogClose();
  };

  const handleSubmit = () => {
    if (handleDialogSubmit) {
      return handleDialogSubmit();
    }
    return handleDialogClose();
  };

  return (
    <Dialog
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      fullWidth
      maxWidth={maxWidth}
      open={open}
      onClose={handleClose}
      TransitionProps={{ role: 'presentation' }}
    >
      <DialogTitle data-cy="alert-dialog-title" className={classes.dialogTitle}>
        {dialogTitle}
      </DialogTitle>
      <DialogContent className={classes.dialogContent}>
        {children || (
          <DialogContentText color="textPrimary" data-cy="alert-dialog-description">
            {dialogContentText}
          </DialogContentText>
        )}
      </DialogContent>
      {dialogActions && (
        <DialogActions>
          <Grid container justify="flex-end">
            <Button onClick={handleClose} color="primary" data-cy="closeActionDialog">
              {closeText}
            </Button>
            <Button onClick={handleSubmit} color="secondary" data-cy="submitActionDialog">
              {submitText}
            </Button>
          </Grid>
        </DialogActions>
      )}
    </Dialog>
  );
};

ActionModal.propTypes = {
  closeText: PropTypes.string,
  children: PropTypes.node,
  dialogActions: PropTypes.bool,
  dialogTitle: PropTypes.string,
  dialogContentText: PropTypes.string,
  handleDialogClose: PropTypes.func,
  handleDialogSubmit: PropTypes.func,
  maxWidth: PropTypes.string,
  openDialog: PropTypes.bool,
  submitText: PropTypes.string,
};

ActionModal.defaultProps = {
  dialogActions: true,
  openDialog: false,
  maxWidth: 'sm',
  handleDialogClose: () => {},
  handleDialogSubmit: () => {},
};

export default ActionModal;
