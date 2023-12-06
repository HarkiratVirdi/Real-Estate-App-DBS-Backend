const oracledb = require('oracledb');

//oracle DB credentials
const dbConfig = {
  user: 'enter_your_user_name',
  password: 'enter_your_password',
  connectString: 'enter_the_connect_string',
};

const executeQuery = (query, params = {}) => {
  let connection;
  return new Promise(async (resolve, reject) => {
    oracledb.getConnection(dbConfig, async (err, connection) => {
      connection = connection;
      if (err) {
        console.error(err.message);
        return reject(err.message);
      }

      console.log('QUERY EXECUTED: ', query);

      try {
        const result = await connection.execute(query, params, {
          outFormat: oracledb.OUT_FORMAT_OBJECT,
        });

        await connection.commit();
        resolve(result.rows);
      } catch (Oerror) {
        console.log('oracle error', Oerror);
        reject(Oerror.message);
      }
    });

    if (connection) {
      connection.close().catch((error) => {
        console.error('Error closing Oracle connection:', error);
      });
    }
  });
};

module.exports = { executeQuery, dbConfig };
