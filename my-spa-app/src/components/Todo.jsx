import React, { useState } from 'react';
import styled from 'styled-components';

const TodoContainer = styled.div`
  max-width: 500px;
  margin: 2rem auto;
  padding: 1rem;
  background: ${({ theme }) => theme.cardBg};
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const TodoItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0;
  border-bottom: 1px solid #eee;
`;


const TODO_KEY = 'todos23';

const Todo = () => {
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem(TODO_KEY);
    return saved ? JSON.parse(saved) : [];
  });
  const [newTodo, setNewTodo] = useState('');

  const addTodo = () => {
    if (newTodo.trim()) {
      const updated = [...todos, { id: Date.now(), text: newTodo }];
      setTodos(updated);
      localStorage.setItem(TODO_KEY, JSON.stringify(updated));
      setNewTodo('');
    }
  };

  const removeTodo = (id) => {
    const updated = todos.filter(todo => todo.id !== id);
    setTodos(updated);
    localStorage.setItem(TODO_KEY, JSON.stringify(updated));
  };

  return (
    <TodoContainer>
      <h2>Список справ</h2>
      <Input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Додати нову справу"
      />
      <Button onClick={addTodo}>Додати</Button>
      <ul>
        {todos.map(todo => (
          <TodoItem key={todo.id}>
            <span>{todo.text}</span>
            <Button onClick={() => removeTodo(todo.id)}>Видалити</Button>
          </TodoItem>
        ))}
      </ul>
    </TodoContainer>
  );
};

export default Todo;
