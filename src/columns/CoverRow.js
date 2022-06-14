import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const CoverRow = [
  {
    accessor: 'property',
  },
  {
    accessor: 'fire',
    Cell: () => (
      <Link>
        <a>
          {' '}
          <FontAwesomeIcon icon={faTimes} style={{ color: 'red' }} />
        </a>
      </Link>
    ),
  },
  {
    accessor: 'electrical',
    Cell: () => (
      <Link>
        <a>
          {' '}
          <FontAwesomeIcon icon={faTimes} style={{ color: 'red' }} />
        </a>
      </Link>
    ),
  },
  {
    accessor: 'automatic',
    Cell: () => (
      <Link>
        <a>
          {' '}
          <FontAwesomeIcon icon={faCheck} style={{ color: 'green' }} />
        </a>
      </Link>
    ),
  },
  {
    accessor: 'safety',
    Cell: () => (
      <Link>
        <a>
          {' '}
          <FontAwesomeIcon icon={faTimes} style={{ color: 'red' }} />
        </a>
      </Link>
    ),
  },
];

export default CoverRow;
