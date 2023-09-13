import { useState } from "react";
let nextId = 0;

const AddTodo = () => {
	const [todo, setTodo] = useState("");
	const [todoArray, setTodoArray] = useState([]);

	function handleDelete(id) {
		const newTodo = todoArray.filter((todo) => todo.id !== id);
		setTodoArray(newTodo);
	}

	return (
		<div className="todo">
			<div className="entry">
				<input
					type="text"
					value={todo}
					placeholder="Enter Text..."
					onChange={(e) => setTodo(e.target.value)}
				/>
				<button className="add"
					onClick={() => {
						setTodoArray([...todoArray, { id: nextId++, todo: todo }]);
					}}
				>
					Add Todo
				</button>
				<br />
				<hr />
			</div>
			<div>
				{/* Maps through the array and puts them in a list as soon as the input changes */}
				<h1>To-Do List</h1>
				<div className="cont">
					<small>Tasks({`${todoArray.length}`})</small>
					{todoArray.map((dos) => {
						return (
							<>
								<div className="strDiv" key={dos.id}>
									<div className="todoo">
										{dos.todo}

										<br />
									</div>
									<div>
										<button className="done"
											onClick={() => {
												console.log(dos.id);
												handleDelete(dos.id);
											}}
										>
											Done
										</button>
									</div>
								</div>
							</>
						);
					})}
					;
				</div>
			</div>
		</div>
	);
};

export default AddTodo;
