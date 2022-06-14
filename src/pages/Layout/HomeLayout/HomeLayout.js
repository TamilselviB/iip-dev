import React, { Suspense } from 'react';
import PropTypes from 'prop-types';

import { useSelector, useDispatch } from 'react-redux';

import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

import Breadcrumb from '../../../components/Breadcrumb/Breadcrumb';
import Spinner from '../../../components/Spinner/Spinner';
import { closetoast } from '../../../actions/common';

const HeaderComponent = React.lazy(() => import('../../../components/Header/Header'));

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function HomeLayout({ children }) {
  const dispatch = useDispatch();
  const { spinner, toastType, toastMsg, toastStatus } = useSelector(state => state.commonReducer);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HeaderComponent />
      <Breadcrumb />

      <Snackbar open={toastStatus} autoHideDuration={4000} onClose={() => dispatch(closetoast())}>
        <Alert onClose={() => dispatch(closetoast())} severity={toastType}>
          {toastMsg}
        </Alert>
      </Snackbar>

      {children}

      {spinner && <Spinner />}
    </Suspense>
  );
}

HomeLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default HomeLayout;
