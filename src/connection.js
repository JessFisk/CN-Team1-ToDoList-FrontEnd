// not sure on connection to mysql2    
//const mysql = require('mysql2');

// create a connection pool - this will need to be updated to Becrypt
const pool = mysql.createPool({
  host: 'localhost',
  user: 'user',
  password: 'password',
  database: 'database_name',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});


async function createTodo(task) {
  const conn = await pool.getConnection();
  try {
    const [rows] = await conn.query('INSERT INTO todos (task) VALUES (?)', [task]);
    const newTodo = { id: rows.insertId, task };
    return newTodo;
  } catch (err) {
    throw err;
  } finally {
    conn.release();
  }
}

async function deleteTodo(id) {
  const conn = await pool.getConnection();
  try {
    await conn.query('DELETE FROM todos WHERE id = ?', [id]);
    const message = { message: 'Todo deleted successfully' };
    return message;
  } catch (err) {
    throw err;
  } finally {
    conn.release();
  }
}

async function updateTodo(id, payload) {
  const conn = await pool.getConnection();
  try {
    await conn.query('UPDATE todos SET completed = ? WHERE id = ?', [payload.completed, id]);
    const [rows] = await conn.query('SELECT * FROM todos WHERE id = ?', [id]);
    const updatedTodo = rows[0];
    return updatedTodo;
  } catch (err) {
    throw err;
  } finally {
    conn.release();
  }
}

async function getAllTodos() {
  const conn = await pool.getConnection();
  try {
    const [rows] = await conn.query('SELECT * FROM todos');
    const todos = rows.map(todo => ({ id: todo.id, task: todo.task, completed: todo.completed }));
    return todos;
  } catch (err) {
    throw err;
  } finally {
    conn.release();
  }
}

export default { createTodo, deleteTodo, updateTodo, getAllTodos };
