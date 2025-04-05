import React from 'react';
import { ITodo } from '@/types/todos';

import s from './styles.module.css';

type Props = {
  todo: ITodo;
};

export const TodoItem: React.FC<Props> = ({ todo }) => {
  return (
    <li className={s.todo}>
      <div className={s.todoDragArea}>
        <span className={s.todoDragIcon}></span>
      </div>
      <div className={s.todoContent}>
        <p className={s.todoText}>{todo.text}</p>
        <button className={s.todoDelete}></button>
      </div>
    </li>
  );
};
