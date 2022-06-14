import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import RequestsCard from '../../components/RequestsCard/RequestsCard';
import {
  fetchReceivedCompanyQuotes,
  fetchSubmittedCompanyQuotes,
  fetchCompanyPolicy
} from '../../actions/companyQuote';

function Insurance() {
  const dispatch = useDispatch();
  const name = useSelector(state => state.authReducer.name);
  const username = useSelector(state => state.authReducer.username);
  const receivedQuotes = useSelector(state => state.companyQuoteReducer.receivedCompanyQuotes);
  const submittedQuotes = useSelector(state => state.companyQuoteReducer.submittedCompanyQuotes);
  const activePolicies = useSelector(state => state.companyQuoteReducer.companyPolicies);
  console.log(activePolicies)
  let id = useSelector(state => state.authReducer.id) || sessionStorage.getItem('userid');
  useEffect(() => {
    dispatch(fetchReceivedCompanyQuotes(id));
    dispatch(fetchSubmittedCompanyQuotes(id));
    dispatch(fetchCompanyPolicy(id));
  }, [id]);

  return (
    <div style={{ backgroundColor: 'whitesmoke' }}>
      <div className="col-lg-12" style={{ marginLeft: '198px' }}>
        <h3 className="company">
          {username} , {name}
        </h3>

        <div className="row">
          <RequestsCard cardTitle="Product In progress" iconClassName="fa fa-building" count="08" />

          <RequestsCard
            cardTitle="New Request from UW"
            iconClassName="fa fa-file"
            count={submittedQuotes ? submittedQuotes.length : 0}
            isLinkEnabled
            linkProps={{
              pathname: 'Insurance/newRequest',
              search: '?type=submitted',
            }}
          />
          <RequestsCard
            cardTitle="New Request from Claims"
            iconClassName="fa fa-exclamation-circle"
            count={submittedQuotes ? submittedQuotes.length : 0}
            isLinkEnabled
            linkProps={{
              pathname: 'Insurance/claims',
            }}
          />
        </div>
        <div className="row">
          <RequestsCard
            cardTitle="In Progress-Underwriting"
            iconClassName="fa fa-users"
            count={receivedQuotes ? receivedQuotes.length : 0}
            isLinkEnabled
            linkProps={{
              pathname: 'Insurance/newRequest',
              search: '?type=inProgress',
            }}
          />

          <RequestsCard cardTitle="In Progress-Claims" iconClassName="fa fa-edit" count="21" />

          <RequestsCard
            cardTitle="Upcoming Collections"
            iconClassName="fa fa-calendar"
            count={activePolicies ? activePolicies.length : 0}
            isLinkEnabled
            linkProps={{
              pathname: 'Insurance/newRequest',
              search: '?type=activePolicies',
            }}
          />
        </div>
        <div className="row">
          <RequestsCard
            cardTitle="Upcoming Payments"
            iconClassName="fa fa-credit-card"
            count="08"
          />
          <RequestsCard
            cardTitle="Request Raised-Surveyor,RINS,FAC"
            iconClassName="fa fa-file"
            count="09"
          />

          <RequestsCard
            cardTitle="Lost Opportunity-Week/Month"
            iconClassName="fa fa-hourglass-end"
            count="02"
          />
        </div>
      </div>
    </div>
  );
}

export default Insurance;
