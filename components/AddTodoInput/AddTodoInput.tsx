import React, { useState } from 'react';
import { TodoContextType } from '@/contexts/TodoContext';

import s from './styles.module.css';

type Props = {
  onAdd: TodoContextType['addTodo'];
};

export const AddTodoInput: React.FC<Props> = ({ onAdd }) => {
  const [value, setValue] = useState('');

  const handleAddTodo = () => {
    if (!value.trim()) return;

    onAdd(value);
    setValue('');
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleAddTodo();
    }
  };

  return (
    <div className={s.inputWrapper}>
      <input
        className={s.input}
        placeholder="Добавьте задачу"
        name="todo_input"
        type="text"
        value={value}
        maxLength={56}
        onKeyDown={handleKeyDown}
        onChange={(e) => setValue(e.target.value)}
      />
      <button
        className={s.addButton}
        onClick={handleAddTodo}
        disabled={value.trim().length === 0}
      >
        Добавить
      </button>
    </div>
  );
};
