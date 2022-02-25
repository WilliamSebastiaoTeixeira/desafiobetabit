const express = require('express'); 
const bodyParser = require('body-parser'); 
const app = express();
const mysql = require('mysql'); 
const cors = require('cors')

const db = mysql.createPool({
    host: 'localhost',
    user: 'william',
    password: 'Senha@123',
    database: 'LISTATELEFONICA'
}); 

app.use(cors()); 
app.use(express.json()); 
app.use(bodyParser.urlencoded({extended:true})); 

//Get
app.get('/api/get',(req, res)=>{
    const sqlSelect = "SELECT * FROM LISTATELEFONICA.contatos;"
    db.query(sqlSelect,(err, result)=>{
        if(err) console.log(err);
        res.send(result); 
    }); 
}); 

//Insert
app.post('/api/insert', (req, res)=>{
    const telefone = req.body.telefone;  
    const sqlInsert = "INSERT INTO contatos(telefone) VALUES (?);"
    db.query(sqlInsert, [telefone],(err, result)=>{
        if(err) console.log(err);
    }); 
}); 

//delete
app.delete('/api/delete/:telefone', (req, res)=>{
    const telefone = req.params.telefone;
    const sqlDelete = "DELETE FROM LISTATELEFONICA.contatos WHERE telefone = ?";
    db.query(sqlDelete, [telefone], (err, result)=>{
        if(err) console.log(err); 
    })
}); 

//update
app.put('/api/update', (req, res)=>{
    const telefone = req.body.telefone;
    const novoTelefone = req.body.novoTelefone;
    const sqlUpdate = "UPDATE LISTATELEFONICA.contatos SET telefone = ? WHERE telefone = ?;";
    db.query(sqlUpdate, [novoTelefone, telefone],(err, result)=>{
        if(err) console.log(err);
    }); 
}); 

app.listen(3001, ()=> {
    console.log('Rodando na porta 3001'); 
}); 