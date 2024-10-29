const express = require('express');
const app = express();
const port = 8003;

app.use((req, res, next) => {
  console.log("Request URL:", req.url);
  if (req.url === '/favicon.ico') {
    return res.status(204).end();
  }
  
  next();
});

app.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  console.log("Error:", error.message);
  res.status(error.status || 500).json({ error: error.message });
});

app.use((req, res, next) => {
  console.log('Final middleware:', req.method, req.url);
  next();
});

app.listen(port, () => {
  console.log(`Express server is running on port: ${port}`);
});
