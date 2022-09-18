import Header from './components/Header';
import { useCallback } from 'react';

import List from './components/List-element';
import Footer from './components/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchTodos, addToDB } from './redux/reducers/todosSlice';

function App() {
	const todos = useSelector((state) => state.todos);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchTodos());
	}, []);

	useCallback(() => {
		dispatch(addToDB());
	}, [todos]);

	return (
		<div className='App'>
			<Header></Header>
			<ul className='todo-list'>
				{todos.displayedTodos.map((todoElement) => {
					return (
						<List
							todoElement={todoElement}
							key={todoElement.todoId}></List>
					);
				})}
			</ul>
			<Footer></Footer>
		</div>
	);
}

export default App;
