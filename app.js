const express = require('express');
const app = express();
app.use(express.static('public'));
const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'kota1024',
  database: 'list_app'
});
connection.connect((err) => {
  if (err) {
    console.log('error connecting: ' + err.stack);
    return;
  }
  console.log('success');
});






app.get('/', (req, res) => {
  res.render('index.ejs');
});
app.get('/menu',(req,res) => {
  res.render('menu.ejs');
});
app.get('/care',(req,res) => {
  res.render('care.html')
});
app.get('/warn',(req,res) => {
  res.render('warn.html');
});
app.get('/kota',(req,res) => {
  res.render('kota.html');
});
app.get('/food',(req,res) => {
  res.render('food.ejs');
});
app.get('/1-1',(req,res) => {
  res.render('1-1.ejs');
});
app.get('/1-2',(req,res) => {
  res.render('1-2.ejs');
});
app.get('/1-3',(req,res) => {
  res.render('1-3.ejs');
});
// サーバーを起動するコードを貼り付けてください
app.listen(3000);
