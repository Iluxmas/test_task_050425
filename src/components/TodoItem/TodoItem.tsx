import React from 'react';
import { TodoContextType } from '@/contexts/TodoContext';
import { ITodo } from '@/types/todos';

import s from './styles.module.css';

type Props = {
  todo: ITodo;
  onDelete: TodoContextType['deleteTodo'];
  onToggle: TodoContextType['toggleTodo'];
};

export const TodoItem: React.FC<Props> = ({ todo, onDelete, onToggle }) => {
  return (
    <li className={s.todo}>
      <div className={s.todoDragArea}>
        <span className={s.todoDragIcon}></span>
      </div>
      <div
        className={[s.todoContent, todo.done ? s.todoDone : ''].join(' ')}
        onClick={() => onToggle(todo.id)}
      >
        <p className={s.todoText}>{todo.text}</p>
        <button
          className={s.todoDelete}
          onClick={() => onDelete(todo.id)}
        ></button>
      </div>
    </li>
  );
};
