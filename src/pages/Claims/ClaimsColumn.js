import * as React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { DataGrid, ColDef, ValueGetterParams, CellParams, GridApi } from '@material-ui/data-grid';

const columns = [
  { field: 'id', headerName: 'Request ID', width: 130 },
  { field: 'poilcyNumber', headerName: 'Policy Number', width: 130 },
  { field: 'insuredName', headerName: 'Insured Name', width: 130 },
  { field: 'productName', headerName: 'Product Name', width: 150 },
  { field: 'totalAmount', headerName: 'Sum Insured', width: 130 },
  { field: 'startDate', headerName: 'Request Date', width: 130 },
  { field: 'endDate', headerName: 'Expiry Date', width: 130 },
  {
    field: 'Active',
    headerName: 'Active',
    sortable: false,
    width: 100,
    disableClickEventBubbling: true,
    renderCell: () =>
    
        <Link
          to={{
            pathname: `/Insurance/claims/1`,
          }}
        >
          <a style={{ marginLeft: 22 }}>
            {' '}
            <FontAwesomeIcon icon={faEdit} />
          </a>
        </Link>
      
  
];

const rows = [
  {
    id: 'R29/2009',
    poilcyNumber: 'P/123',
    insuredName: 'Jon',
    productName: 'Fire & Allied Perils',
    totalAmount: '10000',
    startDate: '12/09/2020',
    endDate: '14/09/2020',
  },
  {
    id: 'R29/20029',
    poilcyNumber: 'P/Dec/123',
    insuredName: 'Cersei',
    productName: 'Property All Risks',
    totalAmount: '20000',
    startDate: '12/09/2020',
    endDate: '14/09/2020',
  },
  {
    id: 'R29/2039',
    poilcyNumber: 'P/123/3',
    insuredName: 'Jaime',
    productName: 'Property All Risks',
    totalAmount: '70000',
    startDate: '12/09/2020',
    endDate: '14/09/2020',
  },
  {
    id: 'R29/2409',
    poilcyNumber: 'P/1233',
    insuredName: 'Arya',
    productName: 'Liability All Risks',
    totalAmount: '30000',
    startDate: '12/09/2020',
    endDate: '14/09/2020',
  },
];

function ClaimsColumn() {
  return (
    <Container maxWidth="lg">
      <div style={{ height: 500, width: '100%' }}>
        <Grid container style={{ display: 'flex', height: '100%' }}>
          <DataGrid rows={rows} columns={columns} pageSize={7} />
        </Grid>
      </div>
    </Container>
  );
}

export default ClaimsColumn;
