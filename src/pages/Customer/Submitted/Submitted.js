import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import TableSubmit from '../../../components/pages/Customer/TableSubmit';
import columns from '../../../columns/columns';
import { fetchSubmittedQuotes } from '../../../actions/userQuote';
import '../../../components/pages/Customer/TableSub.css';

function Submitted() {
  const dispatch = useDispatch();
  const id = useSelector(state => state.authReducer.userId) || sessionStorage.getItem('userid');
  const submittedQuotes = useSelector(state => state.userQuoteReducer.submittedQuotes);
  const columns1 = React.useMemo(() => columns, []);

  useEffect(() => {
    dispatch(fetchSubmittedQuotes(id));
  }, []);
  return (
    <div>
      <div className="page-content">
        <div className="container-fluid">
          {/* <!-- Page-Title --> */}

          <div className="card">
            <div className="card-body">
              <div className="col-lg-12">
                <TableSubmit columns={columns1} data={submittedQuotes} />
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

export default Submitted;
