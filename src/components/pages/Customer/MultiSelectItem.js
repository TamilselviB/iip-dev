import React, { useState } from 'react';
import MultiSelect from 'react-multi-select-component';

import PropTypes from 'prop-types';

const MultiSelectItem = ({ company, addSelectedCompany, isSearchEnabled }) => {
  const [selected, setSelected] = useState([]);

  const chooseInsuranceCompany = companyList => {
    setSelected(companyList);
    addSelectedCompany(companyList);
  };

  return (
    <div>
      <MultiSelect
        options={company}
        value={selected}
        onChange={chooseInsuranceCompany}
        labelledBy="Select"
        disableSearch={isSearchEnabled}
      />
    </div>
  );
};

MultiSelectItem.propTypes = {
  company: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    }),
  ).isRequired,
  addSelectedCompany: PropTypes.func.isRequired,
  isSearchEnabled: PropTypes.bool,
};
MultiSelectItem.defaultProps = {
  isSearchEnabled: true,
};

export default MultiSelectItem;
