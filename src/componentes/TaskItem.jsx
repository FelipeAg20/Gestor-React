import { useContext, useState } from 'react';
import { TaskContext } from '../context/TaskContext';

const TaskItem = ({ task }) => {
  const { toggleTask, deleteTask, editTask } = useContext(TaskContext);
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(task.title);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSaveEdit = (e) => {
    if (e.key === 'Enter') {
      editTask(task.id, editValue.trim());
      setIsEditing(false);
    }
  };

  const handleCancelEdit = (e) => {
    if (e.key === 'Escape') {
      setIsEditing(false);
    }
  };

  return (
    <li>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTask(task.id)}
      />
      {isEditing ? (
        <input
          type="text"
          value={editValue}
          onChange={(e) => setEditValue(e.target.value)}
          onKeyDown={handleSaveEdit}
          onBlur={() => setIsEditing(false)}
        />
      ) : (
        <label onDoubleClick={handleEdit}>
          {task.completed ? <del>{task.title}</del> : task.title}
        </label>
      )}
      <button className="destroy" onClick={() => deleteTask(task.id)}>X</button>
    </li>
  );
};

export default TaskItem;
