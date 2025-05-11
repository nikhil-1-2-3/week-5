const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

let todos = []; // In-memory storage

// Get all todos
app.get('/todos', (req, res) => {
  res.json(todos);
});

// Add a todo
app.post('/todos', (req, res) => {
  const { task } = req.body;
  const newTodo = {
    id: Date.now().toString(),
    task,
    completed: false,
  };
  todos.push(newTodo);
  res.json(newTodo);
});

// Delete a todo
app.delete('/todos/:id', (req, res) => {
  const { id } = req.params;
  todos = todos.filter(todo => todo.id !== id);
  res.json({ message: 'Todo deleted' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
