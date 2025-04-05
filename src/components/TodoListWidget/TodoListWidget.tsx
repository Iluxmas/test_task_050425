import React, { useContext } from 'react';
import { AddTodoInput } from '../AddTodoInput';
import { TodoContext } from '@/contexts/TodoContext';
import { TodoList } from '../TodoList';

import s from './styles.module.css';

export const TodoListWidget: React.FC = () => {
  const context = useContext(TodoContext);

  if (!context) return null;

  return (
    <main className={s.main}>
      <h1 className={s.heading}>Yet another todo list</h1>
      <AddTodoInput />
      <TodoList todos={context.todos} />
    </main>
  );
};
