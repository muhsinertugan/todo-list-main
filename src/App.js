import Header from './components/Header';
import List from './components/List-element';
import Footer from './components/Footer';
import { useDispatch, useSelector } from 'react-redux';

function App() {
	// const [todo, setTodo] = useState([]);
	// const [displayedTodo, setDisplayedTodo] = useState([]);
	// const [completedTodo, setCompletedTodo] = useState([]);
	// const [activeTodo, setActiveTodo] = useState([]);
	// const [toggleStatus, setToggleStatus] = useState(false);
	// const [editedTodo, setEditedTodo] = useState({
	// 	todo: '',
	// 	isChecked: false,
	// 	id: '',
	// });

	// const filterTodo = (ifTrue, array) => {
	// 	return array.filter((item) => item.isChecked === ifTrue);
	// };

	// useEffect(() => {
	// 	setDisplayedTodo([...todo]);
	// }, [todo]);

	// useEffect(() => {
	// 	setCompletedTodo(todo.filter((item) => item.isChecked === true));
	// }, [todo]);

	// useEffect(() => {
	// 	setActiveTodo(todo.filter((item) => item.isChecked === false));
	// }, [todo]);

	// const handleChecked = (event) => {
	// 	const { checked, value } = event.target;

	// 	setTodo((prevState) => {
	// 		return prevState.map((item) => {
	// 			const newItem = item;
	// 			if (newItem.id === value) {
	// 				newItem.isChecked = checked;
	// 			}

	// 			return newItem;
	// 		});
	// 	});
	// };

	// const handleAll = () => {
	// 	setDisplayedTodo([...todo]);
	// };

	// const handleCompleted = () => {
	// 	setDisplayedTodo([...completedTodo]);
	// };

	// const handleActive = () => {
	// 	setDisplayedTodo([...activeTodo]);
	// };

	// const handleClear = () => {
	// 	setTodo(() => filterTodo(false, todo));
	// };

	// const focusedItem = (event) => {
	// 	const { name } = event.target;

	// 	const editedTodoItem = todo.filter((item) => {
	// 		item.id === name && setEditedTodo(item);
	// 	});
	// };

	// const handleEdit = (event) => {
	// 	const { name, value } = event.target;

	// 	setEditedTodo({ ...editedTodo, todo: value });

	// 	setTodo(() => {});
	// };

	// useEffect(() => {
	// 	const todos = JSON.parse(localStorage.getItem('items'));
	// 	if (todos) {
	// 		setTodo(todos);
	// 	}
	// }, []);

	// useEffect(() => {
	// 	localStorage.setItem('items', JSON.stringify(todo));
	// }, [todo]);

	const todos = useSelector((state) => state.rootReducer.todosSlice);

	return (
		<div className='App'>
			<Header></Header>

			<ul className='todo-list'>
				{todos.todoItems?.map((todoElement) => {
					return (
						<List
							todoElement={todoElement}
							key={todoElement.id}></List>
					);
				})}
			</ul>
			<Footer></Footer>
		</div>
	);
}

export default App;
