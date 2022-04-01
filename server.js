require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const fileupload = require('express-fileupload');

const apiRoutes = require('./src/routes');

mongoose.connect(process.env.DATABASE_URL ? process.env.DATABASE_URL : "mongodb+srv://rafaelppereira:rafa151203@cluster0.xnl3y.mongodb.net/test", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.Promise = global.Promise;
mongoose.connection.on('error', (error) => {
  console.log("Erro: ", error.message);
});

const server = express();

server.use(cors());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(fileupload());

server.use(express.static(__dirname+'/public'));

server.use('/api', apiRoutes);

server.listen(5000, () => {
  console.log(`Server iniciado`);
});