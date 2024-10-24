// TaskContext.js
import { createContext, useState } from 'react';
import { useLocalStorage } from '../hooks/UseLocalStorage'; // Hook para manejar LocalStorage
import { v4 as uuidv4 } from 'uuid'; // Para generar IDs únicos

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useLocalStorage('mydayapp-reactjs', []); // Tareas guardadas en LocalStorage

  const addTask = (title) => {
    setTasks([...tasks, { id: uuidv4(), title, completed: false }]);
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const editTask = (id, newTitle) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, title: newTitle } : task
    ));
  };

  const clearCompleted = () => {
    setTasks(tasks.filter(task => !task.completed));
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, toggleTask, deleteTask, editTask, clearCompleted }}>
      {children}
    </TaskContext.Provider>
  );
};
