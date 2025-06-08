const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());


app.use(express.static(path.join(__dirname)));


const db = new sqlite3.Database('test_results.db', (err) => {
  if (err) {
    console.error('Error abriendo la base de datos', err);
  } else {
    db.run(`CREATE TABLE IF NOT EXISTS test_results (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      score INTEGER NOT NULL,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )`);
  }
});


app.post('/save', (req, res) => {
  const { name, score } = req.body;
  if (!name || typeof score !== 'number' || !name.trim()) {
    return res.status(400).json({ error: 'Nombre y puntaje válidos son requeridos' });
  }

  db.run('INSERT INTO test_results (name, score) VALUES (?, ?)', [name.trim(), score], function(err) {
    if (err) {
      return res.status(500).json({ error: 'Error al guardar resultado' });
    }
    res.json({ id: this.lastID });
  });
});


app.post('/delete', (req, res) => {
  const { name } = req.body;
  if (!name || !name.trim()) {
    return res.status(400).json({ error: 'Nombre requerido' });
  }

  db.get('SELECT id FROM test_results WHERE name = ? ORDER BY id DESC LIMIT 1', [name.trim()], (err, row) => {
    if (err) {
      return res.status(500).json({ error: 'Error al buscar resultado' });
    }
    if (!row) {
      return res.status(404).json({ error: 'No se encontró un resultado con ese nombre' });
    }

    db.run('DELETE FROM test_results WHERE id = ?', [row.id], function(err2) {
      if (err2) {
        return res.status(500).json({ error: 'Error al borrar resultado' });
      }
      res.json({ deleted: true, id: row.id });
    });
  });
});


app.delete('/delete/:id', (req, res) => {
  const { id } = req.params;
  if (!id) return res.status(400).json({ error: 'ID requerido' });

  db.run('DELETE FROM test_results WHERE id = ?', [id], function(err) {
    if (err) return res.status(500).json({ error: 'Error al borrar resultado' });
    if (this.changes === 0) return res.status(404).json({ error: 'Resultado no encontrado' });
    res.json({ deleted: true });
  });
});


app.post('/delete-all', (req, res) => {
  db.run('DELETE FROM test_results', function(err) {
    if (err) {
      return res.status(500).json({ error: 'Error al eliminar datos de la leaderboard' });
    }
    res.json({ deleted: true });
  });
});


app.get('/leaderboard', (req, res) => {
  db.all('SELECT name, score, created_at FROM test_results ORDER BY score DESC, created_at ASC', (err, rows) => {
    if (err) {
      return res.status(500).json({ error: 'Error al obtener resultados' });
    }
    res.json(rows);
  });
});


app.put('/update/:id', (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  
  if (!name || !name.trim()) {
    return res.status(400).json({ error: 'Nombre requerido' });
  }
  
  db.run('UPDATE test_results SET name = ? WHERE id = ?', [name.trim(), id], function(err) {
    if (err) {
      return res.status(500).json({ error: 'Error al actualizar resultado' });
    }
    if (this.changes === 0) {
      return res.status(404).json({ error: 'Resultado no encontrado' });
    }
    res.json({ updated: true });
  });
});


app.get('/results', (req, res) => {
  db.all('SELECT id, name, score, created_at FROM test_results ORDER BY score DESC, created_at ASC', (err, rows) => {
    if (err) {
      return res.status(500).json({ error: 'Error al obtener resultados' });
    }
    res.json(rows);
  });
});


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Servidor backend escuchando en http://localhost:${PORT}`);
});