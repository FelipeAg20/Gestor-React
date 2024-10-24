import { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';
import { Link } from 'react-router-dom';

const Footer = () => {
  const { tasks, clearCompleted } = useContext(TaskContext);
  const pendingTasks = tasks.filter(task => !task.completed).length;

  return (
    <footer id="footer">
      <span>
        <strong>{pendingTasks}</strong> {pendingTasks === 1 ? 'item' : 'items'} left
      </span>
      <ul>
        <li><Link to="/all">All</Link></li>
        <li><Link to="/pending">Pending</Link></li>
        <li><Link to="/completed">Completed</Link></li>
      </ul>
      <button onClick={clearCompleted}>Clear completed</button>
    </footer>
  );
};

export default Footer;
