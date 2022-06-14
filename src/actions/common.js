import {
  SHOW_SPINNER,
  HIDE_SPINNER,
  TOAST_CLOSE,
  TOAST_OPEN,
  SHOW_COMPARE_POLICY,
  HIDE_COMPARE_POLICY,
} from '../constants/types';

export const showSpinner = () => {
  return {
    type: SHOW_SPINNER,
  };
};

export const hideSpinner = () => {
  return {
    type: HIDE_SPINNER,
  };
};

export const opentoast = (toastType, toastMsg) => ({
  type: TOAST_OPEN,
  payload: { toastType, toastMsg },
});

export const closetoast = () => ({
  type: TOAST_CLOSE,
});

export const showcomparePolicy = () => {
  return {
    type: SHOW_COMPARE_POLICY,
  };
};

export const closecomparePolicy = () => {
  return {
    type: HIDE_COMPARE_POLICY,
  };
};
