const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve les fichiers statiques depuis le dossier courant
app.use(express.static(__dirname));

// Route pour afficher ex1-2.html par défaut
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './maps.html'));
});

app.listen(port, () => {
  console.log(`Serveur démarré sur http://localhost:${port}`);
});