import { createSlice } from '@reduxjs/toolkit';

//
const todosSlice = createSlice({
	name: 'todos',
	initialState: {
		todoItems: [],
		newTodoItem: {
			todo: '',
			isChecked: false,
		},
		allChecked: false,
	},

	reducers: {
		newTodo: (state, action) => {
			return {
				...state,
				newTodoItem: {
					todo: action.payload.value,
					isChecked: false,
				},
			};
		},
		addTodo: (state, action) => {
			if (state.newTodoItem.todo !== '') {
				return {
					...state,
					todoItems: [
						...state.todoItems,
						{ ...state.newTodoItem, id: action.payload.id },
					],
				};
			}
		},
		isChecked: (state, action) => {
			let checkedItem = state.todoItems.find(
				(item) => item.id === action.payload.id
			);
			checkedItem && (checkedItem.isChecked = !checkedItem.isChecked);
		},

		checkAll: (state) => {
			state.allChecked = !state.allChecked;
			state.todoItems.map((item) => {
				state.allChecked
					? (item.isChecked = true)
					: (item.isChecked = false);
			});
		},
	},
});

export const { addTodo, newTodo, isChecked, checkAll } = todosSlice.actions;

export default todosSlice.reducer;
