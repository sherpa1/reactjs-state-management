import './App.css';
import { React, useState } from 'react';
import HomePage from './pages/HomePage';
import TasksContext from './contexts/TasksContext';
import ThemeContext from './contexts/ThemeContext';

function App() {

  const [theme, setTheme] = useState('light');
  const [tasks, setTasks] = useState([{id:1,content:"Sortir le chien", completed:false}, {id:2,content:"Préparer à manger", completed:true}, {id:3, content:"Aller en courses", completed:false}]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <TasksContext.Provider value={{ tasks, setTasks }}>
        <main className={["App",theme].join(" ")}>
          <HomePage />
          <button onClick={()=>setTheme(theme==="dark"? "light":"dark")}>Switch to {theme === 'light'? 'dark':'light'} mode</button>
        </main>
      </TasksContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
