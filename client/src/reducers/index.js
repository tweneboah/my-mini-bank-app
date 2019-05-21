import { combineReducers } from 'redux';
import accountReducer from './accountsReducer'

const rootReducers = combineReducers({
   account: accountReducer
});

export default rootReducers;