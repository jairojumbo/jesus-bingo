const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

// Conectar a SQLite y crear tabla si no existe
const db = new sqlite3.Database("./bingo.db", (err) => {
    if (err) console.error(err.message);
    console.log("Conectado a la base de datos SQLite.");
});

db.run(`
    CREATE TABLE IF NOT EXISTS bingo_tables (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        table_data TEXT UNIQUE,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
`);

// Ruta para guardar una tabla en la base de datos
app.post("/save-bingo", (req, res) => {
    const { tableData } = req.body;
    const tableString = JSON.stringify(tableData);

    // Verificar si la tabla ya existe
    db.get("SELECT id FROM bingo_tables WHERE table_data = ?", [tableString], (err, row) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (row) {
            return res.json({ message: `Esta tabla ya está creada y es la número ${row.id}.` });
        }

        // Si no existe, guardarla
        db.run("INSERT INTO bingo_tables (table_data) VALUES (?)", [tableString], function (err) {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            res.json({ message: "Tabla guardada", id: this.lastID });
        });
    });
});

// Ruta para obtener todas las tablas guardadas
app.get("/get-bingo", (req, res) => {
    db.all("SELECT * FROM bingo_tables ORDER BY created_at ASC", [], (err, rows) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(rows);
    });
});

app.delete("/clear-bingo", (req, res) => {
    db.run("DELETE FROM bingo_tables", [], (err) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ message: "Todas las tablas han sido eliminadas y el juego ha sido reiniciado." });
    });
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
