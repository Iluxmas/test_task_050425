import React from 'react';
import { AddTodoInput } from '../AddTodoInput';
import { TodoList } from '../TodoList';

import s from './styles.module.css';

export const TodoListWidget: React.FC = () => {
  const todos = [{ id: 1, text: 'abc', done: false }];

  return (
    <main className={s.main}>
      <h1 className={s.heading}>Yet another todo list</h1>
      <AddTodoInput />
      <TodoList todos={todos} />
    </main>
  );
};
