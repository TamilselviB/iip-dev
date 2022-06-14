import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faTimes,faPlus } from '@fortawesome/free-solid-svg-icons';

const PropertyRow = [
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
    accessor: 'occupancyTypeValue',
    Cell: props => {
      return(
        <>
        {props.value !== "" ? props.value : props.value = "-"}
        </>
      )
    }
  },
  {
    accessor: 'constructionTypeValue',
    Cell: props => {
      return(
        <>
        {props.value !== "" ? <>{props.value} </> : <> - </>}
        </>
      )
    }
  },
  {
    accessor: 'yearBuilt',
    Cell: props => {
      return(
        <>
        {props.value !== "" ? <>{props.value} </> : <> - </>}
        </>
      )
    }
  },
  {
    accessor: 'noOfFloors',
    Cell: props => {
      return(
        <>
        {props.value !== "" ? <>{props.value} </> : <> - </>}
        </>
      )
    }
  },
  {
    accessor: 'locationDescription',
    Cell: props => {
      return(
        <>
        {props.value !== "" ? <>{props.value} </> : <> - </>}
        </>
      )
    }
  },
  {
    accessor: 'startDate',
    Cell: props => {
      console.log('props', props);
      return (
        <>
          <span className="number">
            {props.cell.row.original.startDate} to {props.cell.row.original.endDate}
          </span>
        </>
      );
    },
  },
];

export default PropertyRow;
