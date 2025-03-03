# 🎉 **Jesús - Bingo**

Un juego interactivo de Bingo Bíblico basado en personajes de la época de Jesús.  
Este proyecto combina **HTML, CSS, JavaScript (frontend)** y **Node.js con Express y SQLite (backend)**  
para generar y almacenar tablas de bingo dinámicamente.  

---

## 🚀 **Características**
✅ **Generación de Tablas de Bingo** con nombres de personajes bíblicos.  
✅ **Colores aleatorios** para cada celda de la tabla.  
✅ **Guardado automático** de las tablas en una base de datos SQLite.  
✅ **Prevención de duplicados**, evitando guardar la misma tabla dos veces.  
✅ **Historial de nombres generados**, evitando repetición hasta completar todos.  
✅ **Botón de reinicio** que borra todas las tablas guardadas y reinicia el juego.  

---

## 🛠️ **Tecnologías Usadas**
### **Frontend**
- HTML5
- CSS3
- JavaScript (DOM Manipulation y Fetch API)

### **Backend**
- Node.js + Express.js
- SQLite3 (Base de Datos)

---

## 🔧 **Instalación y Configuración**
### **1️⃣ Clonar el repositorio**
```sh
git clone https://github.com/jairojumbo/jesus-bingo.git
cd jesus-bingo
```

### **2️⃣ Instalar dependencias del servidor**
```sh
npm install
```

### **3️⃣ Iniciar el servidor**
```sh
node server.js
```
El servidor correrá en `http://localhost:3000`.

### **4️⃣ Abrir el archivo `index.html` en el navegador**
¡Listo! Ahora puedes jugar Bingo Bíblico 🎉

---

## 📂 **Estructura del Proyecto**
```
/jesus-bingo
│── server.js            # Servidor backend con Express y SQLite
│── index.html           # Interfaz web del juego
│── README.md            # Documentación del proyecto
│── package.json         # Dependencias del servidor
│── bingo.db             # Base de datos SQLite (se crea automáticamente)
```

---

## 🖥️ **Explicación de Archivos**
### **1️⃣ `server.js` (Servidor Backend)**
Archivo principal del servidor que:
- Maneja las **rutas de API** para guardar, recuperar y borrar tablas de bingo.
- Usa **SQLite** como base de datos para almacenar tablas únicas.
- Evita la duplicación de tablas mediante una validación.

#### **🔹 Rutas del Servidor**
| Método  | Ruta            | Descripción |
|---------|----------------|-------------|
| `POST`  | `/save-bingo`  | Guarda una nueva tabla de bingo en la base de datos. |
| `GET`   | `/get-bingo`   | Obtiene todas las tablas guardadas. |
| `DELETE` | `/clear-bingo` | Elimina todas las tablas guardadas y reinicia el juego. |

---

### **2️⃣ `index.html` (Interfaz Web)**
Archivo del **frontend** que:
- Genera dinámicamente tablas de **Bingo Bíblico**.
- Muestra nombres aleatorios **sin repetirse** hasta completarse todos.
- Guarda las tablas en el backend **evitando duplicados**.
- Permite limpiar y reiniciar el juego completamente.

#### **🔹 Funciones Principales**
| Función | Descripción |
|---------|-------------|
| `generateBingo()` | Crea una nueva tabla de bingo con nombres aleatorios. |
| `saveBingo()` | Guarda la tabla generada en el backend. |
| `getSavedTables()` | Recupera y muestra las tablas guardadas. |
| `generateUniqueName()` | Genera un nombre aleatorio sin repetirse hasta agotarlos todos. |
| `clearSavedTables()` | Elimina todas las tablas guardadas y reinicia el juego. |

---

## 🏆 **Cómo Jugar**
1. **Generar una tabla de Bingo** → Presiona **"Generar Nueva Tabla"**.  
2. **Guardar la tabla** → Presiona **"Guardar Tabla"** (evita duplicados).  
3. **Ver tablas guardadas** → Presiona **"Ver Tablas Guardadas"**.  
4. **Generar nombres aleatorios** → Presiona **"Generar Nombre"**.  
5. **Borrar y reiniciar el juego** → Presiona **"Limpiar Tablas y Reiniciar"**.  

---

## 📝 **Notas Adicionales**
📌 **Si el puerto 3000 está ocupado**, puedes cambiarlo en `server.js`.  
📌 **Las tablas se guardan automáticamente en `bingo.db`**.  
📌 **Puedes desplegar este proyecto en un servidor como Heroku o Vercel**.  

---

## 🎉 **¡Listo para jugar y aprender más sobre los personajes de la Biblia!** 🚀😃

---
Si tienes sugerencias o quieres mejorar este proyecto, ¡envía un PR o abre un issue! 🙌
```	

---

✅ **Este README incluye:**  
- 📌 **Explicación del proyecto**  
- ⚙️ **Tecnologías utilizadas**  
- 🔧 **Pasos de instalación**  
- 📂 **Estructura del proyecto**  
- 🚀 **Explicación de funciones y API**  
- 🎲 **Guía para jugar**  
