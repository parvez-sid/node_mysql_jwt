const db = require('./db');
const helper = require('../helper');

async function Login(body){
  const { email, password } = body;

  // const sql = `SELECT * FROM users WHERE email = "${email}" AND password = "${password}"`
  const sql = "SELECT * FROM `users` WHERE email = ? AND password = ?"
  const rows = await db.query(sql, [email, password]);
  const data = helper.emptyOrRows(rows);

  return  data && data[0]
}

module.exports = {
  Login
}