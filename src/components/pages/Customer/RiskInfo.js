import React from 'react';
import TableInfo from './TableInfo';
import './TableSub.css';
import RiskColumns from '../../../columns/RiskColumns';
import Button from '@material-ui/core/Button';

function RiskInfo({data,type,handleNext}) {
  const [inputData, setInputData] = React.useState(type=='quote'?data?.quote?.riskDetails:data?.riskDetails);
  const columns1 = React.useMemo(() => RiskColumns, []);
  const tableData = React.useMemo(() => inputData, [inputData]);
  return (
    <div style={{ marginLeft: '-30px' }}>
      <div className="card-body">
        <div className="col-lg-12">
          <TableInfo columns={columns1} data={tableData} />
        </div>
      </div>
      <Button variant="contained" color="primary" className="nextEndt" onClick={handleNext?handleNext:''}>
        Next
     </Button>
    </div>
  );
}

export default RiskInfo;
