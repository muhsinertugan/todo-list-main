import { useDispatch, useSelector } from 'react-redux';
import { addTodo, newTodo, checkAll } from '../../redux/reducers/todosSlice';

function Header() {
	// const initialValue = { todo: '', isChecked: false, id: '' };
	// const [newTodo, setNewTodo] = useState(initialValue);

	// const newTodoItem = (event) => {
	// 	const { name, value, checked } = event.target;

	// 	setNewTodo({
	// 		[name]: value,
	// 		isChecked: checked,
	// 		id: `li-id: ${Math.random()}`,
	// 	});
	// };

	// const addNewTodo = (event) => {
	// 	event.preventDefault();
	// 	setNewTodo(initialValue);
	// 	newTodo.todo !== '' && setTodo([...todo, newTodo]);
	// };

	const dispatch = useDispatch();

	return (
		<header className='header'>
			<h1 className='app-title'>todos</h1>
			<form className='main'>
				<input
					className='toggle-all'
					type='checkbox'
					onClick={() => dispatch(checkAll())}
				/>
				<label htmlFor='toggle-all'> Mark all as complete </label>
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
					autoFocus
				/>
				<button
					className='add'
					onClick={(event) => {
						event.preventDefault();
						dispatch(
							addTodo({
								id: Math.random().toString(),
							})
						);
					}}></button>
			</form>
		</header>
	);
}

export default Header;
