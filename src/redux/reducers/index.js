import { combineReducers } from 'redux';
import filtersSlice from './filtersSlice';
import todosSlice from './todosSlice';

export default combineReducers({
	todosSlice,
	filtersSlice,
});
