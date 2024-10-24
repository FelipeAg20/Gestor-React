import { TaskProvider } from './context/TaskContext';
import TaskInput from './componentes/TaskInput';
import TaskList from './componentes/TaskList';
import Footer from './componentes/Footer';
import './styles/main.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
        <Router>
    <TaskProvider>
      <section className="todoapp">
        <header className="header">
          <h1>My Day</h1>
          <TaskInput />
        </header>
        <Routes>

          <Route path="/:filter?" render={({ match }) => (
            <section id="main">
              <TaskList filter={match.params.filter || 'all'} />
            </section>
          )} />
        </Routes>
        <Footer />
      </section>
    </TaskProvider>
        </Router>
  );
}

export default App;
