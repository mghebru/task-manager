import React, { useState } from 'react';
import type { Task, TaskStatus } from './Types';
import { TaskList } from './Components/TaskList/TaskList.tsx';
import { TaskFilter } from './Components/TaskFilter/TaskFilter.tsx';
import "./App.css";

const initialTasks: Task[] = [
  {
    id: '1',
    title: 'Finish art piece',
    description: 'Van gough entry piece',
    status: 'pending',
    priority: 'high',
    dueDate: '2026-02-20',
  },
  {
    id: '2',
    title: 'Study TypeScript',
    description: 'Review advanced types',
    status: 'in-progress',
    priority: 'medium',
    dueDate: '2026-02-18',
  },
  {
    id: '3',
    title: 'Take clothes to dry cleaners',
    description: 'Red dress and yellow pants',
    status: 'in-progress',
    priority: 'low',
    dueDate: '2026-02-28',
  },
];

export const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [filters, setFilters] = useState<{
    status?: TaskStatus;
    priority?: 'low' | 'medium' | 'high';
  }>({});

  const handleStatusChange = (taskId: string, newStatus: TaskStatus) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === taskId ? { ...task, status: newStatus } : task
      )
    );
  };

  const handleDelete = (taskId: string) => {
    setTasks((prev) => prev.filter((task) => task.id !== taskId));
  };

  const handleFilterChange = (newFilters: typeof filters) => {
    setFilters(newFilters);
  };

  const filteredTasks = tasks.filter((task) => {
    return (
      (!filters.status || task.status === filters.status) &&
      (!filters.priority || task.priority === filters.priority)
    );
  });

  return (
    <div style={{ maxWidth: '600px', margin: 'auto' }}>
      <h1 className='text-pink-600 text-3xl'><b>Task Manager</b></h1>
      <TaskFilter onFilterChange={handleFilterChange} />

      <TaskList
        tasks={filteredTasks}
        onStatusChange={handleStatusChange}
        onDelete={handleDelete}
      />
      
    </div>
  );
};