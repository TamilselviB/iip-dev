import React from 'react';
import PropTypes from 'prop-types';
import Skeleton from '@material-ui/lab/Skeleton';

const Skeletons = ({ variant, width }) => {
  return (
    <>
      {variant === 'table' && (
        <>
          <Skeleton variant="rect" animation="wave" height={30} />
          <Skeleton animation="wave" height={20} />
          <Skeleton animation="wave" height={20} />
          <Skeleton animation="wave" height={20} />
        </>
      )}
      {variant === 'inline' && (
        <>
          <Skeleton animation="wave" height={20} width={width} />
        </>
      )}
      {variant === 'field' && (
        <>
          <Skeleton animation="wave" height={56} width={width} />
        </>
      )}
      {!variant && (
        <>
          <Skeleton animation="wave" height={20} />
          <Skeleton animation="wave" height={20} />
          <Skeleton animation="wave" height={20} />
        </>
      )}
    </>
  );
};
Skeletons.propTypes = {
  variant: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
};

export default Skeletons;
