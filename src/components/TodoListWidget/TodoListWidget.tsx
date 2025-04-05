import React, { useContext } from 'react';
import { AddTodoInput } from '../AddTodoInput';
import { TodoContext } from '@/contexts/TodoContext';
import { TodoList } from '../TodoList';

import s from './styles.module.css';

export const TodoListWidget: React.FC = () => {
  const context = useContext(TodoContext);

  const { addTodo } = useContext(TodoContext);

  return (
    <main className={s.main}>
      <h1 className={s.heading}>Yet another todo list</h1>
      <AddTodoInput onAdd={addTodo} />
      <TodoList />
    </main>
  );
};
