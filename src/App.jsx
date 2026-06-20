import { useState } from 'react'
import './App.css'

function App() {
  const [tasks, setTasks] = useState([])
  const [inputValue, setInputValue] = useState('')

  const addTask = () => {
    const trimmed = inputValue.trim()
    if (trimmed === '') return

    const newTask = {
      id: Date.now(),
      text: trimmed,
      completed: false,
    }

    setTasks([...tasks, newTask])
    setInputValue('')
  }

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    )
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      addTask()
    }
  }

  return (
    <div className="app">
      <h1>Трекер завдань</h1>

      <div className="input-row">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Введіть нове завдання..."
        />
        <button onClick={addTask}>Додати</button>
      </div>

      <ul className="task-list">
        {tasks.map((task) => (
          <li
            key={task.id}
            className={task.completed ? 'completed' : ''}
            onClick={() => toggleTask(task.id)}
          >
            {task.text}
          </li>
        ))}
      </ul>

      {tasks.length === 0 && <p className="empty">Список завдань порожній</p>}
    </div>
  )
}

export default App