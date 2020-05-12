import React, { useState } from 'react';
import './App.css';
import Todo from './Todo';

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