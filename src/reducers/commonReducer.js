import {
  SHOW_SPINNER,
  HIDE_SPINNER,
  TOAST_OPEN,
  TOAST_CLOSE,
  SHOW_COMPARE_POLICY,
  HIDE_COMPARE_POLICY,
} from '../constants/types';

const initialState = {
  spinner: false,
  toastType: '',
  toastMsg: '',
  toastStatus: false,
  compareStatus: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SHOW_SPINNER:
      return {
        ...state,
        spinner: true,
      };
    case SHOW_COMPARE_POLICY:
      return {
        ...state,
        compareStatus: true,
      };
    case HIDE_COMPARE_POLICY:
      return {
        ...state,
        compareStatus: false,
      };

    case HIDE_SPINNER:
      return {
        ...state,
        spinner: false,
      };

    case TOAST_OPEN:
      return {
        ...state,
        toastType: action.payload.toastType,
        toastMsg: action.payload.toastMsg,
        toastStatus: true,
      };

    case TOAST_CLOSE:
      return {
        ...state,
        toastStatus: false,
      };
    default:
      return state;
  }
}
