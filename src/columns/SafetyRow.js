import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export const safetyRowDb = productsafetyMeasures => {
  console.log(productsafetyMeasures)
  let finalarray = [];
  finalarray = [
    {
      accessor: 'property',
    },
  ];
  productsafetyMeasures.map(array => {
    finalarray.push({
      accessor: array,
      Cell: props => {
        if (props.value === 'no') {
          return (
            <Link>
              <a>
                {' '}
                <FontAwesomeIcon icon={faTimes} style={{ color: 'red' }} />
              </a>
            </Link>
          );
        } else {
          return (
            <Link>
              <a>
                {' '}
                <FontAwesomeIcon icon={faCheck} style={{ color: 'green' }} />
              </a>
            </Link>
          );
        }
      },
    });
  });

  console.log('final arrat : ' + JSON.stringify(finalarray));

  return finalarray;
};
