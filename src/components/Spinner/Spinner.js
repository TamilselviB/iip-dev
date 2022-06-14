import React from 'react';
import { SpinnerRoundOutlined } from 'spinners-react';
import './Spinner.css';

function Spinner() {
  return (
    <div className="spinner">
      <SpinnerRoundOutlined size={100} thickness={100} speed={100} color="rgb(240, 71, 99)" />
    </div>
  );
}

export default Spinner;
