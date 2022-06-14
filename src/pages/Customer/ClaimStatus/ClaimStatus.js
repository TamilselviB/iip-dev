import * as React from "react";
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import { DataGrid} from "@material-ui/data-grid";

const columns = [
  { field: "id", headerName: "Claim Reference Id", width: 160 },
  { field: "reqId", headerName: "Request Id", width: 160 },
  { field: "poilcyNumber", headerName: "Policy Number", width: 160 },
  { field: "startDate", headerName: "Claim Intimation Date", width: 170 },
  { field: "endDate", headerName: "Loss Date", width: 160 },
  { field: "status", headerName: "Status", width: 160 },
  {
    field: "Active",
    headerName: "Active",
    sortable: false,
    width: 100,
    disableClickEventBubbling: true,
    renderCell: () => {
        return(
        <Link
        to={{
          pathname: `/Insurance/claims/1`,
        }}
      >
        <a style={{ marginLeft: 22}}>
          {' '}
          <FontAwesomeIcon icon={faEdit} />
        </a>
      </Link>
      );
      }
  }
];

const rows = [
  { id: "257", reqId: 'R29/2439', poilcyNumber: "P/123", startDate: "12/09/2020", endDate: "14/09/2020", status: "Panding" },
  { id: "258", reqId: 'R29/2409', poilcyNumber: "P/Dec/123", startDate: "12/09/2020", endDate: "14/09/2020", status: "Approval" },
  { id: "253", reqId: 'R29/2409', poilcyNumber: "P/123/3", startDate: "12/09/2020", endDate: "14/09/2020", status: "Panding" },
  { id: "260", reqId: 'R29/2409', poilcyNumber: "P/1233", startDate: "12/09/2020", endDate: "14/09/2020", status: "Approval" },

];

function ClaimStatus() {
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

export default ClaimStatus