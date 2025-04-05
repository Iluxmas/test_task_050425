import React from 'react';
import { ITodo } from '@/types/todos';

import s from './styles.module.css';

type Props = {
  todos: ITodo[];
};

export const TodoList: React.FC<Props> = ({ todos }) => {
  return (
    <ul className={s.list}>
      {todos.map((todo) => (
        <span>{todo.text}</span>
      ))}
    </ul>
  );
};
