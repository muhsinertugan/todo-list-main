import React from 'react';
import { useDispatch } from 'react-redux';
import {
	displayTodos,
	clearCompleted,
} from '../../redux/reducers/filtersSlice';

function Footer() {
	const dispatch = useDispatch();

	return (
		<footer className='footer'>
			{/* <span className='todo-count'>{`${activeTodo.length} items left`}</span> */}

			<ul className='filters'>
				<li>
					<button
						className='selected'
						onClick={(event) => {
							dispatch(
								displayTodos(
									event.target.innerText.toLowerCase()
								)
							);
						}}>
						All
					</button>
				</li>
				<li>
					<button
						className='selected'
						onClick={(event) => {
							dispatch(
								displayTodos(
									event.target.innerText.toLowerCase()
								)
							);
						}}>
						Active
					</button>
				</li>
				<li>
					<button
						className='selected'
						onClick={(event) => {
							dispatch(
								displayTodos(
									event.target.innerText.toLowerCase()
								)
							);
						}}>
						Completed
					</button>
				</li>
			</ul>

			<button
				className='clear-completed'

				// hidden={completedTodo.length === 0}
			>
				Clear completed
			</button>
		</footer>
	);
}

export default Footer;
