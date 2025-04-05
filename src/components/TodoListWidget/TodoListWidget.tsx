import React from 'react';
import { AddTodoInput } from '../AddTodoInput';
import { TodoList } from '../TodoList';

import s from './styles.module.css';

export const TodoListWidget: React.FC = () => {
  const todos = [
    {
      id: 1,
      text: 'Loabfakja oa fafb a hfaflwqro  88q ohq3ofahofnalfal aj oa fa oaf ahfaoflh al al lan',
      done: false,
    },
    { id: 2, text: 'abc', done: false },
    { id: 3, text: 'abc', done: false },
    { id: 4, text: 'abc', done: false },
  ];

  return (
    <main className={s.main}>
      <h1 className={s.heading}>Yet another todo list</h1>
      <AddTodoInput />
      <TodoList todos={todos} />
    </main>
  );
};
