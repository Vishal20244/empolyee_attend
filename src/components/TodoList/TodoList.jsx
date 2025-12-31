import React, { useState } from 'react';
import './TodoList.css';

const TodoList = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Approve leave requests', completed: true },
    { id: 2, text: 'Generate monthly attendance report', completed: false },
    { id: 3, text: 'Update employee shift schedules', completed: false },
    { id: 4, text: 'Follow up with absent employees', completed: true },
    { id: 5, text: 'Review overtime submissions', completed: false },
  ]);

  const toggleTodo = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const [newTodo, setNewTodo] = useState('');

  const addTodo = (e) => {
    e.preventDefault();
    if (newTodo.trim() === '') return;
    
    const newTodoItem = {
      id: todos.length + 1,
      text: newTodo,
      completed: false
    };
    
    setTodos([...todos, newTodoItem]);
    setNewTodo('');
  };

  return (
    <div className="todo-list">
      <div className="todo-header">
        <h3>Todo List</h3>
        <span className="todo-count">{todos.filter(t => !t.completed).length} pending</span>
      </div>
      
      <form className="todo-input-form" onSubmit={addTodo}>
        <input
          type="text"
          placeholder="Add new task..."
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          className="todo-input"
        />
        <button type="submit" className="add-todo-btn">Add</button>
      </form>
      
      <ul className="todo-items">
        {todos.map((todo) => (
          <li key={todo.id} className="todo-item">
            <label className="todo-label">
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
                className="todo-checkbox"
              />
              <span className={`todo-text ${todo.completed ? 'completed' : ''}`}>
                {todo.text}
              </span>
            </label>
            {todo.completed ? (
              <span className="todo-status completed">✓</span>
            ) : (
              <span className="todo-status pending">○</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;