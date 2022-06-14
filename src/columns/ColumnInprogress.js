import React from 'react';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faExchangeAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import ChatModal from '../components/util/ChatModal';
import { DateFormatLabel } from '../utils/utils';
import { checkBeforeAddToCompare } from '../actions/comparePolicy';

const ColumnInprogress = [
  {
    Header: 'Company Name',
    accessor: 'company.companyName',
  },
  {
    Header: 'Quote Id',
    accessor: 'quoteId',
  },
  {
    Header: 'Company Id',
    accessor: 'companyId',
  },
  {
    Header: 'Request Id',
    accessor:  d => {return d.quoteType=='quote'?d.requestId:d.endorsementRequestId},
  },
  {
    Header: 'Insured Name',
    accessor:  d => {return d.quoteType=='quote'?d.quote.insuredName:d.insuredName},
  },
  {
    Header: 'Quotation No',
    accessor:  d => {return d.quoteType=='quote'?d.quotationNumber:d.endorsementQuotationNumber},
  },
  {
    Header: 'Product Name',
    accessor: 'product.productName',
  },
  {
    Header: 'Start Date',
    accessor: 'startDate',
    Cell: props => {
      console.log('props date', props.value);
      const custom_date = DateFormatLabel(props.value);
      console.log('custom_date', custom_date);
      return <span>{custom_date}</span>;
    },
  },
  {
    Header: 'End Date',
    accessor: 'endDate',
    Cell: props => {
      console.log('props date', props.value);
      const custom_date = DateFormatLabel(props.value);
      console.log('custom_date', custom_date);
      return <span>{custom_date}</span>;
    },
  },
  {
    id: 'button',
    Header: 'Action',
    accessor: 'id',
    Cell: cell => {
      return(
      <Link
        to={{
          pathname: `/Customer/Quotation/${cell.row.values.button}`,
          state:  cell.row.original.quoteType
        }}
      >
        <a onClick={() => {}}>
          {' '}
          <FontAwesomeIcon icon={faEdit} />
        </a>
      </Link>
    )}
  },
  {
    Header: 'Compare Quote',
    id: 'compare',
    accessor: 'quoteId',
    Cell: (cell) => {
      console.log(cell)
      const dispatch = useDispatch();
      return (
        <a
          onClick={() => {if(cell.row.original.quoteType=="quote")
            dispatch(checkBeforeAddToCompare(cell.value));
          }}
        >
          {' '}
          <FontAwesomeIcon icon={faExchangeAlt} />
        </a>
      );
    },
  },
  {
    Header: 'Negotiate',
    accessor: 'id',
    Cell: cell => (
      <a
        onClick={() => {
          console.log('----->', cell.row);
        }}
      >
        {' '}
        <ChatModal rowData={cell.row.values} />
      </a>
    ),
  },
];

export default ColumnInprogress;
