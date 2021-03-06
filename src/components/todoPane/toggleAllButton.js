import { React } from 'react';
import context from '../../core/context';
import TodoManager from '../../services/todoManager';

const ToggleAllButton = () => {
	const { todos } = context.state;
	const isChecked = TodoManager.count(todos, { completed: false }) === 0;
	const noTodos = TodoManager.isEmpty(todos);

	return noTodos
		? null
		: <input
			type="checkbox"
			checked={ isChecked }
			onChange={ () => context.actions.todo.toggleAll(!isChecked) }/>;
};

export default ToggleAllButton;
