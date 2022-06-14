import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import Spinner from '../../../components/Spinner/Spinner';
import { closetoast } from '../../../actions/common';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function AuthLayout({ children }) {
  const dispatch = useDispatch();
  const { spinner, toastType, toastMsg, toastStatus } = useSelector(state => state.commonReducer);
  return (
    <>
      {spinner && <Spinner />}
      <Snackbar open={toastStatus} autoHideDuration={4000} onClose={() => dispatch(closetoast())}>
        <Alert onClose={() => dispatch(closetoast())} severity={toastType}>
          {toastMsg}
        </Alert>
      </Snackbar>

      {children}
    </>
  );
}

AuthLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthLayout;
