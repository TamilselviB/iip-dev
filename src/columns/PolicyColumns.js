import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faWindowClose, faRedo, faCompressArrowsAlt ,faUserEdit} from '@fortawesome/free-solid-svg-icons';
import EndorseModal from '../components/Modal/EndorseModal';
import Tooltip from '@material-ui/core/Tooltip';
import RedoIcon from '@material-ui/icons/Redo';

const PolicyColumns = [
  {
    field: 'requestId',
    headerName: 'Request Id',
    width: 150,
  },
  {
    field: 'policyNumber',
    headerName: 'Policy Number',
    width: 150,
  },
  {
    field: 'insuredName',
    headerName: 'Insured Name',
    width: 200,
  },
  {
    field: 'productName',
    headerName: 'Product Name',
    width: 200,
  },
  {
    field: 'companyName',
    headerName: 'Company Name',
    width: 150,
  },
  {
    field: 'startDate',
    headerName: 'Start Date',
    width: 100,
    valueFormatter: params => {
      if (params.value) {
        const date = new Date(params.value);
        return date;
      }
      return null;
    },
  },
  {
    field: 'endDate',
    headerName: 'End Date',
    width: 100,
    valueFormatter: params => {
      if (params.value) {
        const date = new Date(params.value);
        return date;
      }
      return null;
    },
  },
  {
    field: 'id',
    headerName: 'Action',
    width: 100,
    renderCell: props => (
      <strong>
        {

          <Link
            to={{
              pathname: `/Customer/viewpolicy/${props.value}`,
            }}
          >
            <a onClick={() => { }}>
              {' '}
              <FontAwesomeIcon icon={faEdit} />&nbsp;
              <FontAwesomeIcon icon={faCompressArrowsAlt} />&nbsp;
              <FontAwesomeIcon icon={faWindowClose} style={{ color: 'red' }} />&nbsp;
              <FontAwesomeIcon icon={faRedo} />
            </a>
          </Link>
        } {
          <Link
            to={{
              pathname: `/Customer/viewpolicy/${props.value}`,
            }}
            title="Endorsement"
          >
            <a onClick={() => { }}>
              {' '}
              <FontAwesomeIcon icon={faUserEdit} />
            </a>
          </Link>}
      </strong>

    ),
  },
  {
    field: '1',
    headerName: 'Claim',
    width: 80,
    renderCell: props => (
      <strong>
        {

          <Link
            to={{
              pathname: `/Insurance/claims/1`,
            }}
          >
            <a onClick={() => { }} style={{marginLeft: 10}}>
              {' '}
              <RedoIcon icon={faEdit} color="primary"/>
            </a>
          </Link>
        } 
        
      </strong>

    ),
  },
];
// {
//   Header: 'Endorsement',
//   accessor: 'id',
//   Cell: cell => (
//     <a>
//       {' '}
//       <EndorseModal id={cell.value} />
//     </a>
//   ),
// },

export default PolicyColumns;
