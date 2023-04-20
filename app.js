const express = require("express");
const sql = require("mssql");
const port = 8080;
const ipAddr = '34.194.48.156';

const app = express();
app.use(express.static(__dirname + '/public'));
app.use(express.json());

const db = sql.createConnection({
  host: 'localhost',
  database: 'JuegoCrackTheCode',
  user: 'sa',
  password: process.env.db_pwsd
});

db.connect(err => {
  if (err) {
    console.error('No se pudo conectar a la base de datos.');
    throw err;
  } else {
    console.log('Conectado a la base de datos.');
  }
});



// Custom 404 page
app.use((req, res) => {
  res.type('text/plain').status(404).send('404 - Not Found');
});

app.listen(port, () => console.log(
  `Listening on ${port}`
  + '\nPress Ctrl-C to terminate.'));