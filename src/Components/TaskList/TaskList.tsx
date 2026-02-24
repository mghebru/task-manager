import React from 'react';
import type { TaskListProps } from '../../Types';
import { TaskItem } from '../TaskItem/TaskItem';

export const TaskList: React.FC<TaskListProps> = ({
  tasks,
  onStatusChange,
  onDelete,
}) => {
  if (tasks.length === 0) {
    return <p>No tasks found.</p>; // Conditional rendering
  }

  return (
    <div className=''>
      {tasks.map((task) => (
        <TaskItem
          key={task.id} // unique key
          task={task}
          onStatusChange={onStatusChange}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};