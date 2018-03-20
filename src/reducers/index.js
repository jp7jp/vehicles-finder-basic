import { combineReducers } from 'redux';
import vehiclesReducers from './vehicles-reducers';

export default combineReducers({
  vehicles: vehiclesReducers
});
