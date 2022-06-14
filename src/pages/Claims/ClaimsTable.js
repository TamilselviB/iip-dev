import * as React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { DataGrid } from '@material-ui/data-grid';
import { DDMMYY } from '../../utils/utils';

const columns = [
  { field: 'claimRefNumber', headerName: 'Claim Reference No', width: 170 },
  {
    field: 'policy',
    headerName: 'Insured Name',
    width: 150,
    disableClickEventBubbling: true,
    renderCell: props => <div>{props.value.insuredName}</div>,
  },
  { field: 'policyPeriod', headerName: 'Policy Periond', width: 130 },
  {
    field: 'status',
    headerName: ' Current Status',
    width: 130,
    disableClickEventBubbling: true,
    renderCell: props => <div>{props.value.name}</div>,
  },
  { field: 'riskDetails', headerName: ' Risk Details', width: 150 },
  {
    field: 'lossDate',
    headerName: 'Loss Date',
    width: 130,
    disableClickEventBubbling: true,
    renderCell: props => <div>{DDMMYY(props.value)}</div>,
  },
  {
    field: 'claimIntimationDate',
    headerName: 'Intimation Date',
    width: 130,
    disableClickEventBubbling: true,
    renderCell: props => <div>{DDMMYY(props.value)}</div>,
  },
  {
    field: 'id',
    headerName: 'Actions',
    sortable: false,
    width: 100,
    disableClickEventBubbling: true,
    renderCell: props => (
      <Link
        to={{
          pathname: `/Insurance/claims/${props.value}`,
        }}
      >
        <a style={{ marginLeft: 22 }}>
          {' '}
          <FontAwesomeIcon icon={faEdit} />
        </a>
      </Link>
    ),
  },
];

function ClaimsTable({ rows }) {
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

export default ClaimsTable;
