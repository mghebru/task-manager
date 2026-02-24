import React, { useEffect, useState } from 'react';
import type { TaskFilterProps, TaskStatus } from '../../Types';

export const TaskFilter: React.FC<TaskFilterProps> = ({
  onFilterChange,
}) => {
  const [status, setStatus] = useState<TaskStatus | ''>('');
  const [priority, setPriority] = useState<'low' | 'medium' | 'high' | ''>('');

  useEffect(() => {
    onFilterChange({
      status: status || undefined,
      priority: priority || undefined,
    });
  }, [status, priority, onFilterChange]);


  return (
    <div className='flex gap-6 mt-10'>
      {/* Status */}
      <div className='flex flex-col'>
        <label className="text-sm font-medium text-gray-700 mb-1">Status</label>
        <select className="shadow-lg rounded-md border-gray-100 border-1 w-30 h-10 text-xs p-2 "
          value={status}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
            setStatus(e.target.value as TaskStatus | '')
          }
        >
          <option value="">All Statuses</option>
          <option value="pending">Pending</option>
          <option value="in-progress">In Progress</option>
          <option value="completed">Completed</option>

        </select>
      </div>
      <div className='flex flex-col'>
        <label className="text-sm font-medium text-gray-700 mb-1">Priority</label>
        <select className="shadow-lg rounded-md border-gray-100 border-1 w-30 h-10 text-xs p-2 mb-5"
          value={priority}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
            setPriority(
              e.target.value as 'low' | 'medium' | 'high' | ''
            )
          }>
          <option value="">All Priorities</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </div>
    </div>
  );
};
