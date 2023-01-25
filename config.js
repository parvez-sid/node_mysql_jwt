const { MYSQL_HOST, MYSQL_USR, MYSQL_PWD, MYSQL_DB_NAME } = process.env;

const config = {
    db: {
      host: MYSQL_HOST,
      user: MYSQL_USR,
      password: MYSQL_PWD,
      database: MYSQL_DB_NAME,
    },
    listPerPage: 10,
  };
module.exports = config;  