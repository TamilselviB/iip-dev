import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import TableSubmit from './TableSubmit';
import './TableSub.css';
import ColumnsCompany from '../../../columns/ColumnsCompany';
import columnsInCompany from  '../../../columns/columnsInCompany';
import companyPolicyColumns from '../../../columns/companyPolicyColumns';

function NewRequest({ location }) {
  const { search } = location;

  const receivedQuotes = useSelector(state => state.companyQuoteReducer.receivedCompanyQuotes);
  const submittedQuotes = useSelector(state => state.companyQuoteReducer.submittedCompanyQuotes);
  const activePolicies = useSelector(state => state.companyQuoteReducer.companyPolicies);

  const columns1 = React.useMemo(() => ColumnsCompany, []);
  const columns2 = React.useMemo(() => columnsInCompany, []);
  const columns3 = React.useMemo(() => companyPolicyColumns, []);

  receivedQuotes.map((value) => {
    if(value.isAccept === true) {
      value.currentstatus = 'Accepted';
    }else {
      value.currentstatus = ' ';
    }
  })

  return (
    <div className="page-content">
      <div className="container-fluid">
        {/* <!-- Page-Title --> */}
        <div className="row">
          <div className="col-sm-12">
            <div className="page-title-box">
              <h4 className="page-title" style={{ color: 'black' }}>
                New Request
              </h4>
            </div>
            {/* <!--end page-title-box--> */}
          </div>
          {/* <!--end col--> */}
        </div>
      </div>
      {/* <!--end row--> */}

      <div className="card" style={{ marginTop: '-12px' }}>
        <div className="card-body">
          <div className="col-lg-12">
            <ButtonGroup style={{ float: 'right', border: 'none' }}>
              <Button
                style={{
                  border: 'none',
                  backgroundColor: 'whitesmoke',
                  fontWeight: '600',
                  borderBottom: '3px solid #F04763',
                  color: 'black',
                }}
              >
                Customer
              </Button>
              <Button style={{ border: 'none', color: 'black', backgroundColor: 'white' }}>
                Broker
              </Button>
              <Button style={{ border: 'none', color: 'black', backgroundColor: 'white' }}>
                Surveyor
              </Button>
              <Button style={{ border: 'none', color: 'black', backgroundColor: 'white' }}>
                RI Company
              </Button>
            </ButtonGroup>
            <TableSubmit
              columns={search.split('=')[1] === 'submitted' ? columns1 : search.split('=')[1] === 'activePolicies' ? columns3 : columns2}
              data={search.split('=')[1] === 'submitted' ? submittedQuotes : search.split('=')[1] === 'activePolicies' ? activePolicies : receivedQuotes}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewRequest;
