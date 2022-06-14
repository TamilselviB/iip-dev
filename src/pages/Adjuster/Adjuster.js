import React from 'react';
import { useSelector } from 'react-redux';
import RequestsCard from '../../components/RequestsCard/RequestsCard';

function Adjuster() {
  const name = useSelector(state => state.authReducer.name);
  const username = useSelector(state => state.authReducer.username);
  const userType = useSelector(state => state.authReducer.userType);
  console.log(userType);
  return (
    <div style={{ backgroundColor: 'whitesmoke' }}>
      <div className="col-lg-12" style={{ marginLeft: '198px' }}>
        <h3 className="company">
          {username} , {name}
        </h3>

        <div className="row">
          <RequestsCard cardTitle="Validate Claims" iconClassName="fa fa-building" count="08" 
             isLinkEnabled
             linkProps={{
               pathname: 'Insurance/claims',
             }}
          />
        </div>
      </div>
    </div>
  );
}

export default Adjuster;
