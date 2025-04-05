import React from 'react';
import { AddTodoInput } from '../AddTodoInput';

import s from './styles.module.css';

export const TodoListWidget: React.FC = () => {
  return (
    <main className={s.main}>
      <h1 className={s.heading}>Yet another todo list</h1>
      <AddTodoInput />
    </main>
  );
};
