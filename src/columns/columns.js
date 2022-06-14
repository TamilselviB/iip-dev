import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { DateFormatLabel } from '../utils/utils';

let insured;
let date;
const insuredvalue = value => {
  if (value === '1') {
    return 'Individual';
  } else if (value === '2') {
    return 'Corporate';
  }
};

const columns = [
  {
    Header: 'Id',
    accessor: 'id',
  },
  {
    Header: 'Request Id',
    accessor: 'requestId',
  },
  {
    Header: 'claimId',
    accessor: 'quotationNumber',
    Cell: ({ value }) => <span>C1234</span>,
  },
  {
    Header: 'Insured Name',
    accessor: 'insuredName',
  },
  {
    Header: 'Insured Type',
    accessor: 'insuredType',
    Cell: ({ value }) => (
      <a onChange={(insured = insuredvalue(value))} style={{ fontSize: '13px' }}>
        {insured}
      </a>
    ),
  },
  {
    Header: 'Product Name',
    accessor: 'product.productName',
  },
  {
    Header: 'Created',
    accessor: 'created',
    Cell: ({ value }) => (
      <a onChange={(date = DateFormatLabel(value))} style={{ fontSize: '13px' }}>
        {date}
      </a>
    ),
  },
  {
    id: 'button',
    accessor: 'id',
    Cell: ({ value }) => (
      <Link
        to={{
          pathname: '/Customer/Submitted/ViewForm',
          aboutProps: {
            details: {
              id: value,
            },
          },
        }}
      >
        <a
          onClick={() => {
            console.log(value);
          }}
        >
          {' '}
          <FontAwesomeIcon icon={faEdit} />
        </a>
      </Link>
    ),
  },
];

export default columns;
