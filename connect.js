const sql = require('mssql')
const sqlConfig = {
    user: sa,
    password: process.env.pswd,
    server: 'localhost',
    database: 'JuegoCrackTheCode',
    port: 13433,
  
    options: {
        encrypt: true,
        trustServerCertificate: false
    }
}

async () => {
 try {
  await sql.connect(sqlConfig)
  const result = await sql.query`select * from Pais`
  console.dir(result)
 } catch (err) {
    

    if (err) {
        console.error('Unable to connect to the database.');
        throw err;
      } else {
        console.log('Connected to the database.');
      }
 }
}