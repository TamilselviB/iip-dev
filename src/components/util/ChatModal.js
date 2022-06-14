import React, { useEffect } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReply } from '@fortawesome/free-solid-svg-icons';
import './ModalChat.css';
import ChatTab from '../pages/Customer/ChatTab';
import axios from '../../axios';

const styles = theme => ({
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
      <Typography variant="h6" style={{ fontSize: '15px' }}>
        {children}
      </Typography>
      <div className="search-container" style={{ marginTop: '-26px', marginLeft: '300px' }}>
        <input
          type="text"
          placeholder=" Search.."
          name="search"
          style={{
            borderRadius: '22px',
            width: '60%',
            border: '0px solid #8080802e',
            backgroundColor: '#fbfbfb',
            height: '26px',
            paddingLeft: '10px',
          }}
        />
        <span>
          <i className="fa fa-search" style={{ marginLeft: '-22px' }} />
        </span>
      </div>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
          style={{ width: '65px', color: 'gray', marginTop: '-5px' }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles(theme => ({}))(MuiDialogContent);

const DialogActions = withStyles(theme => ({}))(MuiDialogActions);

const ChatModal = ({ rowData }) => {
  const { quoteId, companyId } = rowData;

  const [msg, setMsg] = React.useState('');
  const [open, setOpen] = React.useState(false);
  const [chat, setChat] = React.useState([]);
  const userID = useSelector(state => state.authReducer.userid) || sessionStorage.getItem('userid');

  const conversationName = () => {
    if (sessionStorage.getItem('usertype') === 'Insurance Company') {
      return rowData['quote.insuredName'];
    }
    return 'Insurance Company';
  };

  async function postMessage() {
    axios
      .post('/quote-activity', {
        quoteSubscriptionId: quoteId,
        userId: userID,
        companyId: companyId,
        activityType: 'property',
        comments: msg,
        createdBy: sessionStorage.getItem('usertype') === 'Customer' ? 'User' : 'Company',
      })
      .then(() => {
        fetchData();
        setMsg('');
      })
      .catch(() => {});
  }

  async function fetchData() {
    const res = await axios.post('/quote-activity/getQuoteActivity', {
      quoteSubscriptionId: quoteId,
    });
    setChat(res.data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        onClick={handleClickOpen}
        style={{ border: 'none', width: '10px', backgroundColor: 'none', height: '0px' }}
      >
        <FontAwesomeIcon icon={faReply} style={{ color: 'skyblue' }} />
      </Button>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
          style={{ backgroundColor: '#d3d3d3ab', color: '#27273E' }}
        >
          Conversations with {conversationName()}
        </DialogTitle>

        <DialogContent dividers>
          <ChatTab chat={chat} />
        </DialogContent>
        <DialogActions>
          <textarea
            rows="4"
            value={msg}
            onChange={e => setMsg(e.target.value)}
            className="form-control"
            style={{ width: '792px', marginLeft: '22px' }}
            placeholder="Write your reply.."
          />
          <i
            className="fa fa-paperclip"
            style={{
              marginLeft: '22px',
              fontSize: '21px',
              color: '#808080b8',
            }}
          />
          {/* <Only for Property AND Others> agreed value is shown */}
          <input
            type="text"
            name="fname"
            className="form-control"
            placeholder="Agreed Value"
            style={{
              borderRadius: '7px',
              border: '1px solid lightgray',
              width: '77%',
            }}
          />
          {/* </Only> */}
          <Button
            autoFocus
            onClick={postMessage}
            style={{
              float: 'right',
              fontSize: '17px',
              backgroundColor: '#27273E',
              color: 'white',
              height: '40px',
              width: '100px',
              marginBottom: '10px',
              marginRight: '18px',
            }}
          >
            Send
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ChatModal;
