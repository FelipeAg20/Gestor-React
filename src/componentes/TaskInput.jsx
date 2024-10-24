// TaskInput.jsx
import { useState, useContext } from 'react';
import { TaskContext } from '../context/TaskContext';

const TaskInput = () => {
  const [inputValue, setInputValue] = useState(''); // Estado para el valor del input
  const { addTask } = useContext(TaskContext); // Obtener la función para agregar tareas desde el contexto

  const handleAddTask = (e) => {
    if (e.key === 'Enter' && inputValue.trim() !== '') {
      addTask(inputValue.trim()); // Agregar tarea
      setInputValue(''); // Limpiar el input después de agregar la tarea
    }
  };

  return (
    <input
      type="text"
      placeholder="Type new todo"
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)} // Actualizar el estado del input
      onKeyDown={handleAddTask} // Agregar la tarea cuando se presione Enter
      autoFocus
    />
  );
};

export default TaskInput;

