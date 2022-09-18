import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	isChecked,
	editTodo,
	deleteTodo,
} from '../../redux/reducers/todosSlice';

function List({ todoElement, index }) {
	const dispatch = useDispatch();

	return (
		<li className={todoElement.isChecked === true ? 'completed' : ''}>
			<div className='view'>
				<input
					className='toggle'
					type='checkbox'
					onChange={(event) => {
						dispatch(
							isChecked({
								id: event.target.value,
							})
						);
					}}
					checked={todoElement.isChecked}
					value={todoElement.todoId}
				/>
				<input
					onChange={(event) => {
						dispatch(
							editTodo({
								id: event.target.id,
								value: event.target.value,
							})
						);
					}}
					id={todoElement.todoId}
					className='list-item'
					defaultValue={todoElement.todo}
				/>

				<button
					className='destroy'
					onClick={() => {
						dispatch(deleteTodo(todoElement.todoId));
					}}></button>
			</div>
		</li>
	);
}

export default List;
