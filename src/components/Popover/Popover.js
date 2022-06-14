/* eslint-disable react/no-find-dom-node */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MuiPopover from '@material-ui/core/Popover';
import { findDOMNode } from 'react-dom';

const Popover = ({ show, trigger, refExit, content, handleFilterExit, ...providedProps }) => {
  const [open, setOpen] = useState(show || false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const popoverEl = null;
  const transformOriginSpecs = {
    vertical: 'top',
    horizontal: 'center',
  };

  const handleRequestClose = cb => {
    setOpen(false);
    return cb === 'function' ? cb() : () => {};
  };
  const anchorOriginSpecs = {
    vertical: 'bottom',
    horizontal: 'center',
  };
  const handleClick = () => {
    setAnchorEl(findDOMNode(anchorEl));
    setOpen(true);
  };
  const handleOnExit = () => {
    if (refExit) {
      refExit();
    }
    return handleFilterExit();
  };
  const triggerEl = React.cloneElement(<span>{trigger}</span>, {
    key: 'content',
    ref: el => setAnchorEl(el),
    onClick: () => {
      if (trigger.props.onClick) trigger.props.onClick();
      handleClick();
    },
  });

  return (
    <>
      <MuiPopover
        // action={actions => (popoverActions = actions)}
        elevation={2}
        open={open}
        onClose={handleRequestClose}
        onExited={handleOnExit}
        anchorEl={anchorEl}
        ref={popoverEl}
        anchorOrigin={anchorOriginSpecs}
        transformOrigin={transformOriginSpecs}
        {...providedProps}
      >
        {content}
      </MuiPopover>
      {triggerEl}
    </>
  );
};
Popover.propTypes = {
  show: PropTypes.bool,
  className: PropTypes.object,
  placement: PropTypes.string,
  options: PropTypes.object,
  trigger: PropTypes.object,
  refExit: PropTypes.object,
  content: PropTypes.object,
  handleFilterExit: PropTypes.func,
  onFilterUpdate: PropTypes.func,
};
export default Popover;
