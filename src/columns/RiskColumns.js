import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faTimes,faPlus } from '@fortawesome/free-solid-svg-icons';
const RiskColumns = [
  {
    accessor: 'propertyName',
    Cell: props => {
      console.log('props', props);
      return (
        <>
          <span className="number">
            {props.cell.row.original.subsidiaryCompany}, {props.cell.row.original.propertyName} &nbsp;&nbsp;{props.cell.row.original?.isDeleted ?  <FontAwesomeIcon title={"Deleted Location"} icon={faTimes} style={{color:"red"}}/> :props.cell.row.original?.isAdded ?<FontAwesomeIcon title={"Added Location"} icon={faPlus} style={{color:"green"}}/>:""}
          </span>
        </>
      );
    },
  },
  {
    accessor: 'countryValue',
    Cell: props => {
      return(
        <>
        {props.value !== "" ? <>{props.value} </> : <> - </>}
        </>
      )
    }
  },
  {
    accessor: 'address.propertyGovernate',
    Cell: props => {
      return(
        <>
        {props.value !== "" ? <>{props.value} </> : <> - </>}
        </>
      )
    }
  },
  {
    accessor: 'address.propertyBlock',
    Cell: props => {
      return(
        <>
        {props.value !== "" ? <>{props.value} </> : <> - </>}
        </>
      )
    }
  },
  {
    accessor: 'address.propertyStreet',
    Cell: props => {
      return(
        <>
        {props.value !== "" ? <>{props.value} </> : <> - </>}
        </>
      )
    }
  },
  {
    accessor: 'address.propertyArea',
    Cell: props => {
      return(
        <>
        {props.value !== "" ? <>{props.value} </> : <> - </>}
        </>
      )
    }
  },
  {
    accessor: 'address.propertyCity',
    Cell: props => {
      return(
        <>
        {props.value !== "" ? <>{props.value} </> : <> - </>}
        </>
      )
    }
  },
  {
    accessor: 'address.geoCode',
    Cell: props => {
      console.log(props)
      return(
        <>
        {props.value !== "" ? <>{props.value} </> : <> - </>}
        </>
      )
    }
  },
];

export default RiskColumns;
