import React, { useContext } from 'react';
import { TodoContext } from '@/contexts/TodoContext';
import { TodoItem } from '../TodoItem';

import s from './styles.module.css';

export const TodoList: React.FC = () => {
  const { todos, deleteTodo } = useContext(TodoContext);

  if (!todos.length) {
    return <h2>Ваш список задач пуст</h2>;
  }

  return (
    <ul className={s.list}>
      {todos.map((item) => (
        <TodoItem todo={item} key={item.id} onDelete={deleteTodo} />
      ))}
    </ul>
  );
};
