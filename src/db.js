async function connect(){
    if(global.connection && global.connection.state !== 'disconnected')
        return global.connection;
 
    const mysql = require("mysql2/promise");
    const connection = mysql.createConnection("mysql://root:vizzela@localhost:3306/quiz");
    console.log("Conectou no MySQL!");
    global.connection = connection;
    return connection;
}

async function insert(email){
    const conn = await connect();
    const sql = 'INSERT INTO quiz(email) VALUES (?);';
    return await conn.query(sql, email);
}