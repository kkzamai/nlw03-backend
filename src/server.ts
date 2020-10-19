import express from 'express';
import path from 'path';
import cors from 'cors';

import 'express-async-errors';

import './database/connection';

import routes from './routes';
import errorHandler from './errors/handler';

const app = express();

// o comando abaixo permite que front-ends possam acessar
app.use(cors());
//usa esse comando para fazer o express entender json que vem no request.body
app.use(express.json());
app.use(routes);
app.use('/uploads', express.static(path.join(__dirname,'..','uploads')))
app.use(errorHandler);

app.listen(3333);

// rota
// users -> é o recurso
// get -> é o método http (get, post, put, delete) 
// GET -> busca info 
// POST - cria uma informação 
// PUT - edita uma info /DELETE - deleta informação
// parâmetros:
// Query param: http://localhost:3333/users?search=kris
// Route param: http://localhost:3333/users/1
// Body



// comentários da explicação do professor.
//app.post('/users/:id', (request, response) => {
    // console.log(request.query);
    // console.log(request.params);
    // console.log(request.body);
    //return response.json({ message: 'hello world'});
//});
 



// node funciona no fluxo de requisicao e resposta
// express é um fw em node que ajuda na requisicao e resposta 
// de uma maneira mais simples
// para acessar usa: localhost:3333

