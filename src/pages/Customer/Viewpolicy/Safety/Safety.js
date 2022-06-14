import React from 'react';
import './Safety.css';
import { safetyRowDb } from '../../../../columns/SafetyRow'
import TableSafety from './TableSafety'



export default function Safety(data) {
  const product = data?.data?.product;
  const safetyMeasuresArray = product ? (product.safetyMeasures ? product.safetyMeasures : []) : [];

  const riskDetails = data.data.riskDetails ? data.data.riskDetails : [];

  const reduceArrayToData = (acc, item) => {
    if (riskInfoObj) {
      const isAvailable = riskInfoObj.includes(item) ? 'yes' : 'no';
      acc[item] = isAvailable;
    }

    return acc;
  };

  var riskInfoObj = [];
  const safetyArrayJsonFromDb = [];
  riskDetails.forEach((riskInfo, index) => {
    riskInfoObj = riskInfo.safetyMeasures;
    const safetyArrayData = safetyMeasuresArray.reduce(reduceArrayToData, {});

    safetyArrayData['property'] = `${riskInfo.subsidiaryCompany}, ${riskInfo.propertyName}`;
    safetyArrayJsonFromDb.push(safetyArrayData);
  });

  console.log(safetyMeasuresArray, safetyArrayJsonFromDb)
 
  const columnsSafetyMeasures = safetyRowDb(safetyMeasuresArray)
  const tableData = React.useMemo(() => safetyArrayJsonFromDb)
  return (
    <div style={{ marginLeft: '-30px' }}>
      <div class="card-body">
        <div class="col-lg-12">
          {safetyArrayJsonFromDb && safetyArrayJsonFromDb.length > 0 ? (
            <TableSafety
              columns={columnsSafetyMeasures}
              data={tableData}
              safetyMeasures={safetyMeasuresArray}
            />
          ) : (
            ''
          )}
        </div>
      </div>
    </div>
  );
}