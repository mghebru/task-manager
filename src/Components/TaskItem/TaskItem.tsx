import React from 'react';
import type { TaskItemProps, TaskStatus } from '../../Types';

const statusColors: Record<TaskStatus, string> = {
  pending: '#facc15',
  'in-progress': '#3b82f6',
  completed: '#22c55e',
};

const priorityColors = {
  low: '#12c055',
  medium: '#f97316',
  high: '#f81818',
};

//create task item
export const TaskItem: React.FC<TaskItemProps> = ({
  task,
  onStatusChange,
  onDelete,
}) => {
  return (
    <div className='relative rounded-md w-150 p-5 mb-5 border shadow-md'>

      {/* Top Right Controls */}
      <div className='absolute top-0 right-0 m-3 flex items-center gap-2 text-xs'
      >
        <select className='px-2 py-1 rounded-md '
          style={{
            color: `${statusColors[task.status]}`,
          }}
          value={task.status}
          onChange={(e) =>
            onStatusChange(task.id, e.target.value as TaskStatus)
          }
        >

          <option value="pending">Pending</option>
          <option value="in-progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>

        <button className='ml-2 text-red-500 border-none py-1 px-1 rounded-lg cursor-pointer'
          onClick={() => onDelete(task.id)}
        > Delete </button>

      </div>

      {/* Task Content */}
      <div className='text-left'>
        <p className='font-bold'>{task.title}</p>
        <small><p className='text-gray-500 mt-3'>{task.description}</p></small>
      </div>

      <h3 className='flex gap-8 mt-3 text-sm'>
        <small className="" style={{ color: priorityColors[task.priority] } }>Priority: 
          <span className="ml-1" style={{ color: priorityColors[task.priority] }}>
          {task.priority}
        </span>
        </small>

        <small className='text-gray-500'>Due: {task.dueDate}</small>
      </h3>


    </div>

  );
};