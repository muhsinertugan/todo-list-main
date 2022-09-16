import { createSlice, current } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
	name: 'filters',
	initialState: {
		activeTodos: [],
		completedTodos: [],
		displayedTodos: [],
	},
	reducers: {
		displayTodos: (state, action) => {
			switch (action.payload) {
				case 'all':
					console.log(current(state));
					// state.displayedTodos = state.todosSlice.todos.todoItems;

					break;
				case 'active':
					break;
				case 'completed':
					break;

				default:
					return [];
			}
		},
		clearCompleted: () => {},
	},
});

export const { displayTodos, clearCompleted } = filtersSlice.actions;

export default filtersSlice.reducer;
