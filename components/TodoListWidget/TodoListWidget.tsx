import React, { useContext } from 'react';
import { AddTodoInput } from '../AddTodoInput';
import { TodoContext } from '@/contexts/TodoContext';
import { TodoList } from '../TodoList';

import s from './styles.module.css';

export const TodoListWidget: React.FC = () => {
  // 9:40 - 10:37
  // 12:00 - 13:41
  // 15:00 - 16:00
  const { addTodo } = useContext(TodoContext);

  return (
    <main className={s.main}>
      <h1 className={s.heading}>Yet another todo list</h1>
      <AddTodoInput onAdd={addTodo} />
      <TodoList />
    </main>
  );
};
