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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEdit,
  faEnvelope,
  faUser,
  faPhone,
  faHome,
  faAddressCard,
  faArrowsAlt
} from '@fortawesome/free-solid-svg-icons';
import InfoIcon from '@material-ui/icons/Info';


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

function PreviousInfoModal({open,setShowPreviousInfo,data,productName}) {
  // const [open, setOpen] = React.useState(isOpen);



  
  const handleClose = () => {

    setShowPreviousInfo(false);

  };

  return (
    <div>
      {/* <Button
        variant="outlined"
        onClick={handleClickOpen}
      >  <InfoIcon />
      </Button> */}
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Insured Info
        </DialogTitle>
        <DialogContent dividers>
          <div className="row" style={{ marginTop: '-11px' }}>
            <div className="col-md-3">
              <div className="card-cont" style={{ marginLeft: '84px' }}>
                <p className="line1">
                  {' '}
                  <FontAwesomeIcon
                    icon={faUser}
                    aria-hidden="true"
                    style={{ marginRight: '10px', color: '#0000ff' }}
                  />
                Insured Name
              </p>
           <p className="line2">{data?.insuredName}</p>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card-cont">
                <p className="line1">
                  <FontAwesomeIcon
                    icon={faHome}
                    aria-hidden="true"
                    style={{ marginRight: '10px', color: '#0000ff' }}
                  />
                Product
              </p>
    <p className="line2">{productName}</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card-cont">
                <p className="line1">
                  <FontAwesomeIcon
                    icon={faUser}
                    aria-hidden="true"
                    style={{ marginRight: '10px', color: '#0000ff' }}
                  />
                Contact Person
              </p>
                <p className="line2">{data?.contactPerson}</p>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card-cont">
                <p className="line1">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    aria-hidden="true"
                    style={{ marginRight: '10px', color: '#0000ff' }}
                  />
                E-mail Id
              </p>
                <p className="line2">{data?.email}</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card-cont" style={{ marginLeft: '84px' }}>
                <p className="line1">
                  <FontAwesomeIcon
                    icon={faAddressCard}
                    aria-hidden="true"
                    style={{ marginRight: '10px', color: '#0000ff' }}
                  />
                License Id
              </p>
                <p className="line2">{data?.licenceId}</p>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card-cont">
                <p className="line1">
                  <FontAwesomeIcon
                    icon={faAddressCard}
                    aria-hidden="true"
                    style={{ marginRight: '10px', color: '#0000ff' }}
                  />
                Address
              </p>
                <p className="line2">
                {data?.address?.street}{data?.address?.zip},{' '}
                {data?.address?.city},{data?.address?.state}
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card-cont">
                <p className="line1">
                  <FontAwesomeIcon
                    icon={faPhone}
                    aria-hidden="true"
                    style={{ marginRight: '10px', color: '#0000ff' }}
                  />
                Contact
              </p>
                <p className="line2">{data?.mobileNumber}</p>
                <p className="line2">{data?.alternateContact}</p>
              </div>
            </div>
            <div className="col-md-12">
              <div className="card-cont" style={{ marginLeft: '84px' }}>
                <p className="line1">
                  <FontAwesomeIcon
                    icon={faEdit}
                    aria-hidden="true"
                    style={{ marginRight: '10px', color: '#0000ff' }}
                  />
                Notes
              </p>
                <p className="line2">{data?.notes}</p>
              </div>
            </div>
          </div>
        </DialogContent>
        {/* <DialogActions>
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
        </DialogActions> */}
      </Dialog>
    </div>
  );
}

export default PreviousInfoModal;
