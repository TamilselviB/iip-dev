import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faFile } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { DateFormatLabel, numberFormatUSFormat } from '../utils/utils';
import ChatModal from '../components/util/ChatModal';
import NotesModal from '../components/util/NotesModal';
import { CodeSharp } from '@material-ui/icons';

let raisedFor = 'Quote Request';
const ColumnsCompany = [
  {
    Header: 'Company ID',
    accessor: 'companyId',
    show: false,
  },
  {
    Header: 'Quote ID',
    accessor: 'quoteId',
    show: false,
  },
  {
    Header: 'Insured Name',
    accessor: d => {return d.quoteType=='quote'?d.quote.insuredName:d.insuredName},
  },
  {
    Header: 'Raised For',
    Cell: cell=> {
      return <a  title={cell.row.original.quoteType!='quote'?cell.row.original.endorsementDescription=='Do you want to change the Insured Details like Address,Contact details, Registration No and Insured Name'?cell.row.original.endorsementDescription.substring(15):cell.row.original.endorsementDescription.substring(0,7)=='Want to'?cell.row.original.endorsementDescription.substring(8):cell.row.original.endorsementDescription:''} style={{ fontSize: '13px' }} >{cell.row.original.quoteType=='quote'?"Quote Request":"Endorsement Request"}</a>;
  }
  },
  //  hard code for now
  {
    Header: 'Request ID',
    accessor: d => {return d.quoteType=='quote'?d.requestId:d.endorsementRequestId},
  },
  {
    Header: 'Raised On',
    accessor: 'created',
    Cell: props => {
      const custom_date = DateFormatLabel(props.value);

      return <span>{custom_date}</span>;
    },
  },
  // {
  //   Header: "Tentative Policy Period",
  //   accessor: "tentPolPeriod",
  // }, leave for now
  {
    Header: 'Product',
    accessor: 'product.productName',
  },
  {
    Header: 'Locations',
    accessor: 'riskDetails.length',
  },
  {
    Header: 'Total Exposure',
    accessor: 'totalSumAssured',
    Cell: ({ value }) => <a style={{ fontSize: '13px' }}>{numberFormatUSFormat(value)}</a>,
  },
  {
    Header: 'Broker/Ins.Co',
    accessor: 'broker/ins',
  },
  // hard code for now
  // {
  //   Header: "Ageing(In Days)",
  //   accessor: "ageing",
  // },
  // no of days since request has been creaated
  {
    id: 'button',
    Header: 'Action',
    accessor: 'id',
    Cell: cell => {
      return(
      <Link
        to={{
          pathname: `/Insurance/NewRequest/${cell.row.values.button}`,
          state:  cell.row.original.quoteType
        }}
      >
        <a>
          {' '}
          <FontAwesomeIcon icon={faEdit} />
        </a>&nbsp;&nbsp;
        <a>
          <FontAwesomeIcon icon={faFile} style={{ color: 'rgb(240, 71, 99)' }}/>
        </a>
      </Link>)
    },
  },
  {
    Header: 'Remarks',
    accessor: 'remarks',
    Cell: cell => (
      <a>
        {' '}
        <NotesModal rowData={cell.row.values} />
      </a>
    ),
  },
  {
    Header: 'Negotiate',
    accessor: 'chat',
    Cell: cell => (
      <a>
        {' '}
        <ChatModal rowData={cell.row.values} />
      </a>
    ),
  },
];

export default ColumnsCompany;
