const db = require('./db');
const helper = require('../helper');

async function Login(body){
//   const sql = "SELECT * FROM users WHERE email = " + body.email + " AND password = " + body.password
const sql= "SELECT * FROM users WHERE email = 'parvez@gmail.com' AND password = 'Hello@1234'"
  console.log('sql=> ', sql)
  const rows = await db.query(sql);
  const data = helper.emptyOrRows(rows);

  return data
}

module.exports = {
  Login
}