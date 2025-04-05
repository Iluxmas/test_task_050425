import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { ITodo } from '@/types/todos';

export interface TodoContextType {
  todos: ITodo[];
  addTodo: (text: string) => void;
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
  changeTodoOrder: (fromIndex: number, toIndex: number) => void;
}

export const TodoContext = createContext<TodoContextType | undefined>(
  undefined,
);

function getInitialTodos() {
  const fromLocalStorage = localStorage.getItem('todos');
  return fromLocalStorage ? JSON.parse(fromLocalStorage) : [];
}

export const TodoProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [todos, setTodos] = useState<ITodo[]>(getInitialTodos());

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text: string) => {
    const newTodo: ITodo = {
      id: Date.now(),
      text,
      done: false,
    };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  const toggleTodo = (id: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo,
      ),
    );
  };

  const deleteTodo = (id: number) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const changeTodoOrder = (fromIndex: number, toIndex: number) => {
    const updatedTodos = Array.from(todos);
    const [movedTodo] = updatedTodos.splice(fromIndex, 1);
    updatedTodos.splice(toIndex, 0, movedTodo);

    setTodos(updatedTodos);
  };

  return (
    <TodoContext.Provider
      value={{ todos, addTodo, toggleTodo, deleteTodo, changeTodoOrder }}
    >
      {children}
    </TodoContext.Provider>
  );
};
