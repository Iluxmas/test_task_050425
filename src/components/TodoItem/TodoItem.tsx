import React from 'react';
import { TodoContextType } from '@/contexts/TodoContext';
import { ITodo } from '@/types/todos';
import { CSS } from '@dnd-kit/utilities';
import { useSortable } from '@dnd-kit/sortable';

import s from './styles.module.css';

type Props = {
  todo: ITodo;
  onDelete: TodoContextType['deleteTodo'];
  onToggle: TodoContextType['toggleTodo'];
};

export const TodoItem: React.FC<Props> = ({ todo, onDelete, onToggle }) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: todo.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <li className={s.todo} ref={setNodeRef} style={style}>
      <div className={s.todoDragArea} {...listeners} {...attributes}>
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
