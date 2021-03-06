import TodoInput from './todoInput';
import TodoList from './todoList';
import ToggleAllButton from './toggleAllButton';
import ClearButton from './clearButton';
import ActionButton from './actionButton';
import FilterControl from './filterControl';

const TodoPane = () =>
	<div className="todo-pane">
		<h3>Todo</h3>
		<div>
			{ ToggleAllButton() }
			{ TodoInput() }
			{ ActionButton() }
		</div>
		<div>{ TodoList() }</div>
		<div>{ ClearButton() }</div>
		<div>{ FilterControl() }</div>
	</div>

export default TodoPane;
