import React from 'react';
import { ITodo } from '@/types/todos';
import { TodoItem } from '../TodoItem';

import s from './styles.module.css';

type Props = {
  todos: ITodo[];
};

export const TodoList: React.FC<Props> = ({ todos }) => {
  return (
    <ul className={s.list}>
      {todos.map((item) => (
        <TodoItem todo={item} key={item.id} />
      ))}
    </ul>
  );
};
