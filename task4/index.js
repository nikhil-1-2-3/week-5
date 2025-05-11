const express = require('express');
const app = express();
const PORT = 3000;

// ✅ Logging Middleware
app.use((req, res, next) => {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] ${req.method} ${req.url}`);
  next();
});

// ✅ Example Route
app.get('/', (req, res) => {
  res.send('Haa bhai connect ho gya hai.');
});

// ✅ 404 Error Handling (Route Not Found)
app.use((req, res, next) => {
  res.status(404).json({ message: 'Bhai galat hai.' });
});

// ✅ Error-Handling Middleware
app.use((err, req, res, next) => {
  console.error('Error:', err.stack);
  res.status(500).json({ message: 'Kuch to Gadbad hai daya.' });
});

// ✅ Start Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
