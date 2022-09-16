import React from 'react';
import { useDispatch } from 'react-redux';
import { isChecked } from '../../redux/reducers/todosSlice';

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
					value={todoElement.id}
				/>
				<input
					name={todoElement.id}
					className='list-item'
					defaultValue={todoElement.todo}
				/>
				<button className='destroy'></button>
			</div>
		</li>
	);
}

export default List;
