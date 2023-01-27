const db = require('./db');
const helper = require('../helper');

async function Login(body){
  
  const sql = "SELECT * FROM `users` WHERE email = ? AND password = ?"
  const rows = await db.query(sql, [body.email, body.password]);
  const data = helper.emptyOrRows(rows);

  return  data && data[0]
}

module.exports = {
  Login
}