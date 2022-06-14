import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { DateFormatLabel, numberFormatUSFormat } from '../utils/utils';
import ChatModal from '../components/util/ChatModal';



let raisedFor = 'Quote Request';
const companyPolicyColumns = [
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
    Header : 'Policy No',
    accessor : 'policyNumber'
  },
  {
    Header: 'Insured Name',
    accessor: 'insuredName',
  },
  {
    Header: 'Raised For',
    accessor: 'raisedFor',
    Cell: ({ value }) => <a style={{ fontSize: '13px' }}>{raisedFor}</a>,
  },
  //  hard code for now
  {
    Header: 'Request ID',
    accessor: 'requestId',
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
    Cell: ({ value }) => (
      <a  style={{ fontSize: '13px' }}>
        {numberFormatUSFormat(value)}
      </a>
    ),
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

];

export default companyPolicyColumns;
