import { createSlice, createAsyncThunk, current } from '@reduxjs/toolkit';
import axios from 'axios';

const todosEndpoint = 'https://631a7d2afae3df4dcfe6b6f0.mockapi.io/todos/';

const todosSlice = createSlice({
	name: 'todos',
	initialState: {
		todoItems: [],
		newTodoItem: {
			todo: '',
			isChecked: false,
			id: null,
			todoId: 0,
		},
		allChecked: false,
		displayedTodos: [],
		loading: false,
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
			const newItem = { ...state.newTodoItem, todoId: action.payload.id };
			if (
				state.newTodoItem.todo !== '' &&
				state.newTodoItem.todo.length >= 3
			) {
				state.todoItems.push(newItem);
				state.displayedTodos.push(newItem);
				state.newTodoItem.todo = '';
				axios.post(todosEndpoint, newItem);
			}
		},

		disableButtons: (state) => {
			console.log(
				current(
					state.todoItems.find((item) => Boolean(item.id) == false)
				)
			);
		},
		isChecked: (state, action) => {
			let checkedItem = state.todoItems.find(
				(item) => item.todoId == action.payload.id
			);
			checkedItem && (checkedItem.isChecked = !checkedItem.isChecked);
			state.displayedTodos = state.todoItems;

			console.log(action.payload.id);
			axios.put(`${todosEndpoint}${checkedItem.id}`, checkedItem);
		},

		// checkAll: (state) => {
		// 	state.allChecked = !state.allChecked;
		// 	state.todoItems.map((item) => {
		// 		state.allChecked
		// 			? (item.isChecked = true)
		// 			: (item.isChecked = false);

		// 		axios.put(`${todosEndpoint}${item.todoId}`, item);
		// 	});

		// 	state.displayedTodos = state.todoItems;
		// },
		displayTodos: (state, action) => {
			switch (action.payload) {
				case 'all':
					state.displayedTodos = state.todoItems;
					break;
				case 'active':
					state.displayedTodos = state.todoItems.filter(
						(item) => item.isChecked === false
					);

					break;
				case 'completed':
					state.displayedTodos = state.todoItems.filter(
						(item) => item.isChecked === true
					);

					break;

				default:
					state.displayedTodos = state.todoItems;
			}
		},
		deleteTodo: (state, action) => {
			const deletedTodo = state.todoItems.find(
				(item) => item.todoId == action.payload
			);

			axios.delete(`${todosEndpoint}${deletedTodo.id}`, deletedTodo);
			state.todoItems = state.todoItems.filter(
				(item) => item.todoId !== action.payload
			);
			state.displayedTodos = state.todoItems;
		},

		editTodo: (state, action) => {
			const findEditedTodo = state.todoItems.find((item) => {
				return item.todoId == action.payload.id;
			});

			const editedTodo = (findEditedTodo.todo = action.payload.value);

			axios.put(`${todosEndpoint}${findEditedTodo.todoId}`, editTodo);
		},
	},
	extraReducers: (builder) => {
		builder.addCase(fetchTodos.pending, (state) => {
			state.loading = true;
		});
		builder.addCase(fetchTodos.fulfilled, (state, action) => {
			state.todoItems = action.payload;
			state.displayedTodos = state.todoItems;
			state.loading = false;
		});
		builder.addCase(fetchTodos.rejected, (state) => {
			state.loading = false;
		});
		builder.addCase(addToDB.pending, (state) => {
			state.loading = true;
		});
		builder.addCase(addToDB.fulfilled, (state, action) => {
			state.todoItems = action.payload;
			state.displayedTodos = state.todoItems;
			state.loading = false;
		});
		builder.addCase(addToDB.rejected, (state) => {
			state.loading = false;
		});
	},
});

export const fetchTodos = createAsyncThunk('todos/todoItems', async () => {
	const response = await axios.get(todosEndpoint);

	return response.data;
});

export const addToDB = createAsyncThunk('todos/addTodoItem', async () => {
	const response = await axios.get(todosEndpoint);

	return response.data;
});

export const {
	disableButtons,
	getTodos,
	editTodo,
	addTodo,
	newTodo,
	isChecked,
	checkAll,
	displayTodos,
	deleteTodo,
} = todosSlice.actions;

export const todoItems = todosSlice.state;

export default todosSlice.reducer;
