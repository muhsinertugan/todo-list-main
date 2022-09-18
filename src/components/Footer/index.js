import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { displayTodos, clearCompleted } from '../../redux/reducers/todosSlice';

function Footer() {
	const dispatch = useDispatch();
	const todoCount = useSelector((state) => state.todos);

	return (
		<footer className='footer'>
			{/* <span className='todo-count'>{`${
				todoCount.map((item) => item.isChenked === true).length
			} items left`}</span> */}

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

			{/* <button
				className='clear-completed'
				onClick={() => {
					dispatch(clearCompleted());
				}}
				hidden={
					todoCount.todoItems.filter((item) => item.isChecked)
						.length === 0
				}>
				Clear completed
			</button> */}
		</footer>
	);
}

export default Footer;
