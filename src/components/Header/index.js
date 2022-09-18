import { useDispatch, useSelector } from 'react-redux';
import {
	addTodo,
	newTodo,
	checkAll,
	disableButtons,
	addToDB,
} from '../../redux/reducers/todosSlice';

function Header() {
	const dispatch = useDispatch();
	const todo = useSelector((state) => state.todos.newTodoItem.todo);

	return (
		<header className='header'>
			<h1 className='app-title'>todos</h1>
			<form className='main'>
				{/* <input
					className='toggle-all'
					type='checkbox'
					onClick={() => dispatch(checkAll())}
				/>
				<label htmlFor='toggle-all'> Mark all as complete </label> */}

				<input
					onChange={(event) =>
						dispatch(
							newTodo({
								value: event.target.value,
							})
						)
					}
					name='todo'
					className='new-todo'
					placeholder='What needs to be done?'
					value={todo}
					autoFocus
				/>
				<button
					className='add'
					onClick={(event) => {
						event.preventDefault();
						dispatch(
							addTodo({
								id: Date.now(),
							})
						);
					}}></button>
			</form>
		</header>
	);
}

export default Header;
