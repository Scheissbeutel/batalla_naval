const express = require('express');
const app = express();
// Puerto en el que se ejecutará el servidor
const port = 3000; 

// Middleware para servir archivos estáticos desde la carpeta 'public'
app.use(express.static('public'));

app.get('/', (req, res) => {
  //Tu ruta raiz puede renderizar el archivo HTML principal
  res.sendFile(__dirname + '/public/index.html');
});

app.listen(port, () => {
  console.log(`Servidor en ejecución en http://localhost:${port}`);
});
