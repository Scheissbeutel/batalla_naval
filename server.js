const express = require('express');
const app = express();
const port = 3000; // Puerto en el que se ejecutará el servidor

app.get('/', (req, res) => {
  res.send('¡Hola, mundo!');
});

app.listen(port, () => {
  console.log(`Servidor en ejecución en http://localhost:${port}`);
});
