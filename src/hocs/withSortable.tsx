import React, { useContext } from 'react';
import {
  closestCenter,
  DndContext,
  DragEndEvent,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { TodoContext } from '@/contexts/TodoContext';

export const withSortable = <P extends object>(
  WrappedComponent: React.ComponentType<P>,
) => {
  return (props: P) => {
    const { todos, changeTodoOrder } = useContext(TodoContext);

    const sensors = useSensors(
      useSensor(PointerSensor),
      useSensor(KeyboardSensor, {
        coordinateGetter: sortableKeyboardCoordinates,
      }),
    );

    function handleDragEnd(event: DragEndEvent) {
      const { active, over } = event;

      if (over && active.id !== over.id) {
        const oldIndex = todos.findIndex((item) => item.id === active.id);
        const newIndex = todos.findIndex((item) => item.id === over.id);

        changeTodoOrder(oldIndex, newIndex);
      }
    }

    return (
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <SortableContext items={todos} strategy={verticalListSortingStrategy}>
          <WrappedComponent {...props} />
        </SortableContext>
      </DndContext>
    );
  };
};
