import React, { useState } from 'react';
import './App.css';
import Todo from './Todo';

function TodoForm({ addTodo }) {
	const [value, setValue] = useState("");

	const handleSubmit = e => {
		e.preventDefault();
		if (!value) return;
		addTodo(value);
		setValue("");
	};

	return (
		<form onSubmit={handleSubmit}>
		  <input
			type="text"
			className="input"
			value={value}
			onChange={e => setValue(e.target.value)}
		  />
		</form>
	  );
}

function App() {
	const [todos, setTodos] = useState([
		{ text: "Vacuum bedroom" },
		{ text: "Practice using hooks in React" },
		{ text: "Clean bathroom" },
	]);

	return (
		<div className="app">
			<div className="todo-list">
				{todos.map((todo, index) => (
					<Todo
						key={index}
						index={index}
						todo={todo}
					/>
			 	))}
			</div>
		</div>
	)
}

export default App;