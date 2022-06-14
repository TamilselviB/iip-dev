import React from 'react';
import TableSafetyMeasures from './TableSafetyMeasures';
import './TableSub.css';
import { safetyRowDb } from '../../../columns/SafetyRow';

export default function SafetyMeasures({ data, product,type }) {
  const safetyMeasuresArray = product ? (product.safetyMeasures ? product.safetyMeasures : []) : [];

  const riskDetails = type=='quote'?(data.quote.riskDetails ? data.quote.riskDetails : []):data.riskDetails ? data.riskDetails : [];

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

  const columnsSafetyMeasures = React.useMemo(() => safetyRowDb(safetyMeasuresArray), []);
  const tableData = React.useMemo(() => safetyArrayJsonFromDb, []);
 console.log(safetyArrayJsonFromDb)
  return (
    <div style={{ marginLeft: '-30px' }}>
      <div class="card-body">
        <div class="col-lg-12">
          {safetyArrayJsonFromDb && safetyArrayJsonFromDb.length > 0 ? (
            <TableSafetyMeasures
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
