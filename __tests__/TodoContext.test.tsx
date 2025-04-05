import React, { useContext } from 'react';
import { expect, describe, beforeEach, it } from 'vitest';
import { act, renderHook } from '@testing-library/react';
import { TodoProvider, TodoContext } from '../contexts/TodoContext';

const TestComponent = ({ children }: { children: React.ReactNode }) => (
  <TodoProvider>{children}</TodoProvider>
);

describe('TodoContext', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('should add a todo', () => {
    const { result } = renderHook(() => useContext(TodoContext), {
      wrapper: TestComponent,
    });

    act(() => {
      result.current.addTodo('New Todo');
    });

    expect(result.current.todos).toHaveLength(1);
    expect(result.current.todos[0].text).toBe('New Todo');
  });

  it('should toggle a todo', () => {
    const { result } = renderHook(() => useContext(TodoContext), {
      wrapper: TestComponent,
    });

    act(() => {
      result.current.addTodo('Todo 1');
    });

    const todoId = result.current.todos[0].id;

    act(() => {
      result.current.toggleTodo(todoId);
    });

    expect(result.current.todos[0].done).toBe(true);

    act(() => {
      result.current.toggleTodo(todoId);
    });

    expect(result.current.todos[0].done).toBe(false);
  });

  it('should delete a todo', () => {
    const { result } = renderHook(() => useContext(TodoContext), {
      wrapper: TestComponent,
    });

    act(() => {
      result.current.addTodo('Todo to Delete');
    });

    const todoId = result.current.todos[0].id;

    act(() => {
      result.current.deleteTodo(todoId);
    });

    expect(result.current.todos).toHaveLength(0);
  });

  it('should change todo order', () => {
    const { result } = renderHook(() => useContext(TodoContext), {
      wrapper: TestComponent,
    });

    act(() => {
      result.current.addTodo('Todo 1');
      result.current.addTodo('Todo 2');
    });

    expect(result.current.todos.map((todo) => todo.text)).toEqual([
      'Todo 2',
      'Todo 1',
    ]);

    act(() => {
      result.current.changeTodoOrder(0, 1);
    });

    expect(result.current.todos.map((todo) => todo.text)).toEqual([
      'Todo 1',
      'Todo 2',
    ]);
  });
});
