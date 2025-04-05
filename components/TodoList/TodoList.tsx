import React, { useContext } from 'react';
import { TodoContext } from '@/contexts/TodoContext';
import { withSortable } from '@/hocs/withSortable';
import { TodoItem } from '../TodoItem';

import s from './styles.module.css';

export const TodoListBase: React.FC = () => {
  const { todos, deleteTodo, toggleTodo } = useContext(TodoContext);

  if (!todos.length) {
    return <h2>Ваш список задач пуст</h2>;
  }

  return (
    <ul className={s.list}>
      {todos.map((item) => (
        <TodoItem
          todo={item}
          key={item.id}
          onDelete={deleteTodo}
          onToggle={toggleTodo}
        />
      ))}
    </ul>
  );
};

export const TodoList = withSortable(TodoListBase);
