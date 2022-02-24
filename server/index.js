const express = require('express'); 
const app = express();
const mysql = require('mysql'); 

const db = mysql.createPool({
    host: 'localhost',
    user: 'william',
    password: 'Senha@123',
    database: 'LISTATELEFONICA'
})

app.get('/', (req, res)=>{
    const sqlInsert = "INSERT INTO contatos(nome) VALUES ('mundo');"
    db.query(sqlInsert,(err, result) => {
        res.send('Olá Mundo');
    });
}); 

app.listen(3001, ()=> {
    console.log('Rodando na porta 3001'); 
}); 