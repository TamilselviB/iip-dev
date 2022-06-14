import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEdit,
  faEnvelope,
  faUser,
  faPhone,
  faHome,
  faAddressCard
} from '@fortawesome/free-solid-svg-icons';
import Button from '@material-ui/core/Button';

function InsuredInfo({data,type,handleNext}) {
  console.log(data)
  return (
    <div style={{ marginLeft: '-30px' }}>
      <div className="col-lg-12" />
      <div className="card-body">
        <h4 style={{ color: '#0000ff', marginLeft: '90px', fontWeight: 'bold', marginTop: '-8px' }}>
          Insured Info
        </h4>
        <br></br>
        <div className="row" style={{ marginTop: '-11px' }}>
          <div className="col-md-3">
            <div className="card-cont" style={{ marginLeft: '84px' }}>
              <p className="line1">
                {' '}
                <FontAwesomeIcon
                  icon={faUser}
                  aria-hidden="true"
                  style={{ marginRight: '10px', color: '#0000ff' }}
                />
                Insured Name
              </p>
              <p className="line2">{type=='quote'?data?.quote?.insuredName:data?.insuredName}</p>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card-cont">
              <p className="line1">
                <FontAwesomeIcon
                  icon={faHome}
                  aria-hidden="true"
                  style={{ marginRight: '10px', color: '#0000ff' }}
                />
                Product
              </p>
              <p className="line2">{type=='quote'?data?.product?.productName:data?.product?.productName}</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card-cont">
              <p className="line1">
                <FontAwesomeIcon
                  icon={faUser}
                  aria-hidden="true"
                  style={{ marginRight: '10px', color: '#0000ff' }}
                />
                Contact Person
              </p>
              <p className="line2">{type=='quote'?data?.quote?.contactPerson:data?.contactPerson}</p>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card-cont">
              <p className="line1">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  aria-hidden="true"
                  style={{ marginRight: '10px', color: '#0000ff' }}
                />
                E-mail Id
              </p>
              <p className="line2">{type=='quote'?data?.quote?.email:data?.email}</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card-cont" style={{ marginLeft: '84px' }}>
              <p className="line1">
                <FontAwesomeIcon
                  icon={faAddressCard}
                  aria-hidden="true"
                  style={{ marginRight: '10px', color: '#0000ff' }}
                />
                License Id
              </p>
              <p className="line2">{type=='quote'?data?.quote?.licenceId:data?.licenceId}</p>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card-cont">
              <p className="line1">
                <FontAwesomeIcon
                  icon={faAddressCard}
                  aria-hidden="true"
                  style={{ marginRight: '10px', color: '#0000ff' }}
                />
                Address
              </p>
              <p className="line2">
                {type=='quote'?data?.quote?.address?.street:data?.address?.street}, {type=='quote'?data?.quote?.address?.zip:data?.address?.zip},{' '}
                {type=='quote'?data?.quote?.address?.city:data?.address?.city}, {type=='quote'?data?.quote?.address?.state:data?.address?.state}
              </p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card-cont">
              <p className="line1">
                <FontAwesomeIcon
                  icon={faPhone}
                  aria-hidden="true"
                  style={{ marginRight: '10px', color: '#0000ff' }}
                />
                Contact
              </p>
              <p className="line2">{type=='quote'?data?.quote?.mobileNumber:data?.mobileNumber}</p>
              <p className="line2">{type=='quote'?data?.quote?.alternateContact:data?.alternateContact}</p>
            </div>
          </div>
          <div className="col-md-12">
            <div className="card-cont" style={{ marginLeft: '84px' }}>
              <p className="line1">
                <FontAwesomeIcon
                  icon={faEdit}
                  aria-hidden="true"
                  style={{ marginRight: '10px', color: '#0000ff' }}
                />
                Notes
              </p>
              <p className="line2">{type=='quote'?data?.quote?.notes:data?.notes}</p>
            </div>
          </div>
        </div>
      </div>
      <Button variant="contained" color="primary" className="nextEndt" onClick={handleNext?handleNext:''}>
       Next
     </Button>
    </div>
  );
}

export default InsuredInfo;
