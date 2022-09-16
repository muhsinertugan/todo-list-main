import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../reducers';
// import todosReducer from '../reducers/todosSlice';
// import filtersReducer from '../reducers/filtersSlice';

export const store = configureStore({
	reducer: {
		rootReducer,
	},
});
