import React from 'react';
import './TableSub.css';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

function CustDocs({data,handleNext}) {
  // console.log('risk data', data.data.riskDetails);
  const riskDetails = data.riskDetails ? data.riskDetails : [];
  let inputData = [];
  let document = [];
  riskDetails.map(result => {
    inputData.push({
      subsidiaryCompany : result.subsidiaryCompany,
      propertyName : result.propertyName,
    })
    document.push(result.document)
  })
  console.log(document)
  
  return (
    <div>
    <Grid>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              Subsidiary Company, Property
            </TableCell>
            {inputData.map(data =>
              <TableCell>
                {data.subsidiaryCompany} , {data.propertyName}
              </TableCell>
              )}
          </TableRow>
        </TableHead>
        <TableBody>
          {document ? 
          <TableRow>
            <TableCell>
              Documents
            </TableCell>
            {document.map(docs => 
              <TableCell>
                {docs.map(data => 
                  <a href={data.location} target="_blank">
                  {data.name}
                </a>
                )}
              </TableCell>
              )}
          </TableRow>: null}
        </TableBody>
      </Table>
    </Grid>
    <Button variant="contained" color="primary" className="nextEndt" onClick={handleNext?handleNext:''}>
        Next
     </Button>
    </div>
  );
}

export default CustDocs;
