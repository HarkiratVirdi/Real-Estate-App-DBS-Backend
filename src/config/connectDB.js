const oracledb = require('oracledb');

const dbConfig = {
  user: 'dbs501_233v1a18',
  password: '58421552',
  connectString: 'myoracle12c.senecacollege.ca:1521/oracle12c',
};

const executeQuery = (query, params = {}) => {
  let connection;
  return new Promise(async (resolve, reject) => {
    oracledb.getConnection(dbConfig, async (err, connection) => {
      connection = connection;
      if (err) {
        console.error(err.message);
        return;
      }

      console.log('QUERY EXECUTED: ', query);

      const result = await connection.execute(query, params, {
        outFormat: oracledb.OUT_FORMAT_OBJECT,
      });

      await connection.commit();
      resolve(result.rows);
    });

    if (connection) {
      console.log('in connection');

      connection.close().catch((error) => {
        console.error('Error closing Oracle connection:', error);
      });
    }
  });
};

module.exports = { executeQuery, dbConfig };
