import { ADD_TO_COMPARE, CLEAR_COMPARE, DELETE_COMPARE } from '../constants/types';

const initialState = {
  compare: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_TO_COMPARE:
      return {
        ...state,
        compare: action.payload,
      };
    case CLEAR_COMPARE:
      return {
        ...state,
        compare: [],
      };

    case DELETE_COMPARE:
      const newArray = state.compare.filter(c => c['id'] !== action.payload);

      return {
        ...state,
        compare: [...newArray],
      };

    default:
      return state;
  }
}
