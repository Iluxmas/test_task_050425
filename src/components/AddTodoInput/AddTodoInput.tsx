import React from 'react';

import s from './styles.module.css';

export const AddTodoInput: React.FC = () => {
  return (
    <div className={s.inputWrapper}>
      <input
        className={s.input}
        placeholder="добавьте задачу"
        name="todo_input"
        type="text"
      />
      <button className={s.addButton}>Добавить</button>
    </div>
  );
};
