import React from 'react';
import TablePropertyInfo from './TablePropertyInfo';
import './TableSub.css';
import PropertyRow from '../../../columns/PropertyRow';
import Button from '@material-ui/core/Button';

export default function PropertyInfo({data,type,handleNext}) {
  const [inputData, setInputData] = React.useState(type=='quote'?data?.quote?.riskDetails:data?.riskDetails);
  const columns1 = React.useMemo(() => PropertyRow, []);

  const tableData = React.useMemo(() => inputData, [inputData]);
  return (
    <div style={{ marginLeft: '-30px' }}>
      <div class="card-body">
        <div class="col-lg-12">
          <TablePropertyInfo columns={columns1} data={tableData} />
        </div>
      </div>
      <Button variant="contained" color="primary" className="nextEndt" onClick={handleNext?handleNext:''}>
        Next
     </Button>
    </div>
  );
}
