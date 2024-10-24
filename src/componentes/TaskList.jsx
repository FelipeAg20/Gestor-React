// TaskList.jsx
import { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';
import TaskItem from './TaskItem';

const TaskList = ({ filter }) => {
  const { tasks } = useContext(TaskContext); // Obtener tareas desde el contexto
    console.log(tasks);
    
  const filteredTasks = tasks.filter((task) => {
    if (filter === 'all') return true;  // Muestra todas las tareas si el filtro es "all"
    if (filter === 'pending') return !task.completed;  // Solo las tareas pendientes
    if (filter === 'completed') return task.completed;  // Solo las tareas completadas
    return true;
  });

  return (
    <ul>
      {filteredTasks.map((task) => (
        <TaskItem key={task.id} task={task} /> // Mostrar cada tarea con el componente TaskItem
      ))}
    </ul>
  );
};

export default TaskList;

