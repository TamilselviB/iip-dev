import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ClaimsTable from './ClaimsTable';
import { fetchClaims, fetchAdjusterClaims, fetchUserClaims } from '../../actions/claims';

function Claims() {
  const dispatch = useDispatch();
  const userId = useSelector(state => state.authReducer.userId) || sessionStorage.getItem('userid');
  const userType = useSelector(state => state.authReducer.userType);
  const claims = useSelector(state => state.claimReducer.claimsReceivedByInsuranceCompany);
  const adjusterClaims = useSelector(state => state.claimReducer.claimsReceivedByAdjuster);
  const userClaims = useSelector(state => state.claimReducer.claimsRaisedByUser);

  const claimsPayload = {
    userId: userId,
    status: 'submitted',
  };

  const adjusterPayload = {
    userId,
  };

  useEffect(() => {
    if (userType === 'Adjuster') {
      dispatch(fetchAdjusterClaims(adjusterPayload));
    } else if (userType === 'Insurance') {
      dispatch(fetchClaims(claimsPayload));
    } else {
      dispatch(fetchUserClaims({ userId }));
    }
  }, [userType]);

  return (
    <div>
      <ClaimsTable
        rows={
          // eslint-disable-next-line no-nested-ternary
          userType === 'Adjuster' ? adjusterClaims : userType === 'Insurance' ? claims : userClaims
        }
      />
    </div>
  );
}

export default Claims;
