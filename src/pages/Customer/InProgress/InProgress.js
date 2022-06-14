import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import TableSubmit from '../../../components/pages/Customer/TableSubmit';
import ColumnInprogress from '../../../columns/ColumnInprogress';
import { fetchReceivedQuotes } from '../../../actions/userQuote';
import '../../../components/pages/Customer/TableSub.css';

function InProgress() {
  const id = useSelector(state => state.authReducer.userId) || sessionStorage.getItem('userid');
  const dispatch = useDispatch();

  const receivedQuotes = useSelector(state => state.userQuoteReducer.receivedQuotes);

  useEffect(() => {
    dispatch(fetchReceivedQuotes(id));
  }, []);

  const columns1 = React.useMemo(() => ColumnInprogress, []);

  return (
    <div>
      <div className="page-content">
        <div className="container-fluid">
          <div className="card">
            <div className="card-body">
              <div className="col-lg-12">
                {receivedQuotes && <TableSubmit columns={columns1} data={receivedQuotes} />}
              </div>
            </div>
          </div>
        </div>
        {/* <!--end row--> */}
      </div>
      {/* <!-- container --> */}
    </div>
  );
}

export default InProgress;
