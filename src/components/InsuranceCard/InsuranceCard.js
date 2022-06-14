import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './InsuranceCard.css';

function InsuranceCard({ label, value }) {
  return (
    <div className="card1" style={{ padding: '10px' }}>
      <div className="card-body card-background">
        <Link
          to={{
            pathname: `/Customer/${label}`,
          }}
        >
          <div className="text-center project-card">
            <img
              src="assets/images/widgets/p-1.svg"
              alt=""
              height="80"
              className="mx-auto d-block mb-3"
            />
            <span className="badge badge-light font-11" style={{ width: '60px' }}>
              <h4 style={{ fontSize: '32px' }}>{value}</h4>
            </span>
            <h3 style={{ color: 'whitesmoke' }}>{label}</h3>
          </div>
        </Link>
      </div>
    </div>
  );
}

InsuranceCard.propTypes = {
  label: PropTypes.string,
  value: PropTypes.number,
};

InsuranceCard.defaultProps = {
  label: '',
  value: 0,
};

export default InsuranceCard;
