import React from 'react';
import './RequestsCard.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function RequestsCard({ cardTitle, iconClassName, count, progress, isLinkEnabled, linkProps }) {
  const cardcontent = () => {
    return (
      <div className="companycard">
        <div className="card-body" id="card-dashboard">
          <h4 className="requestcard-title">{cardTitle}</h4>
          <div className="row">
            <div className="col-6">
              <i className={`${iconClassName} requestcard-icon`}> </i>
            </div>
            <div className="col-6" style={{ marginTop: '-50px' }}>
              <h1 className="requestcard-count">{count}</h1>{' '}
            </div>
          </div>
          <div className="progress mt-2" style={{ height: '3px' }}>
            <div
              className="progress-bar"
              role="progressbar"
              style={{ width: '35%' }}
              aria-valuenow={progress}
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className="col-lg-3">
      {isLinkEnabled ? <Link to={{ ...linkProps }}>{cardcontent()}</Link> : <>{cardcontent()} </>}
    </div>
  );
}

RequestsCard.propTypes = {
  cardTitle: PropTypes.string.isRequired,
  iconClassName: PropTypes.string.isRequired,
  count: PropTypes.string.isRequired,
  progress: PropTypes.string,
  isLinkEnabled: PropTypes.bool,
  linkProps: PropTypes.shape(),
};

RequestsCard.defaultProps = {
  progress: '',
  isLinkEnabled: false,
};

export default RequestsCard;
