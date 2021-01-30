const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const porta = 3500;

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

app.get('/produtos', (req, res) =>{
    const mysql = require('mysql');
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'fullstackeletro'
    });

    //View 'mostra_produto_categoria' faz SELECT com INNER JOIN entre duas tabelas 'produto' e 'categoria'.
    connection.query("SELECT * FROM mostra_produto_categoria", (error, result) => {
        res.json(result);
    });
});

app.get('/mostrar/pedidos', (req, res) =>{
    const mysql = require('mysql');
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'fullstackeletro'
    });

    connection.query("SELECT * FROM pedidos", (error, result) => {
        res.json(result);
    });
});

app.post('/inserir/pedidos', (req, res) => {
    const post = req.body;
    console.log(post);
    const mysql = require('mysql');
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'fullstackeletro'
    });

    connection.query("INSERT INTO pedidos SET ?", post, () => {
        res.redirect('/');
    });
});

app.get('/mostrar/comentarios', (req, res) => {
    const mysql = require('mysql');
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'fullstackeletro'
    });

    connection.query("SELECT * FROM comentario", (error, result) => {
        res.json(result);
    });
})

app.post('/inserir/comentarios', (req, res) => {
    const post = req.body;
    console.log(post);
    const mysql = require('mysql');
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'fullstackeletro'
    });

    connection.query("INSERT INTO comentario SET ?", post, () => {
        res.redirect('/');
    });
})

app.listen(porta, () =>{
    console.log(`Servidor rodando na porta ${porta}`)
});