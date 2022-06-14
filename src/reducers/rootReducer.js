import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import authReducer from './authReducer';
import userQuoteReducer from './userQuote';
import companyQuoteReducer from './companyQuote';
import commonReducer from './commonReducer';
import receivedQuoteReducer from './receivedQuote';
import comparePolicyReducer from './comparePolicy';
import policyReducer from './policyReducer';
import endorseReducer from './endorsePolicy';
import claimReducer from './claimReducer';

const createRootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    authReducer: authReducer,
    userQuoteReducer: userQuoteReducer,
    companyQuoteReducer: companyQuoteReducer,
    commonReducer: commonReducer,
    receivedQuoteReducer: receivedQuoteReducer,
    comparePolicyReducer: comparePolicyReducer,
    policyReducer: policyReducer,
    endorseReducer: endorseReducer,
    claimReducer: claimReducer,
  });

export default createRootReducer;
