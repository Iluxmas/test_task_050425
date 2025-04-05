import React from 'react';

import s from './styles.module.css';

type Props = {};

export const TodoListWidget: React.FC<Props> = (props) => {
  return (
    <main className={s.main}>
      <h1 className={s.heading}>Yet another todo list</h1>
    </main>
  );
};
