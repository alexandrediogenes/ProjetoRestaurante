const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 5000;

app.use(bodyParser.json());

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)


app.listen(port, () => {
  console.log(`Servidor rodando na porta de conexão ${port}.`)
})


app.get('/', (request, response) => {
    response.json({ aplicacao: 'CRUD RESTAURANTE' })
  })
  

  const repository = require('./repository');


app.get('/restaurante', repository.getRestaurantes)
app.post('/restaurante', repository.createRestaurante)
app.put('/restaurante', repository.updateRestaurante)
app.delete('/restaurante', repository.deleteRestaurante)

app.get('/produto', repository.getProdutos)
app.post('/produto', repository.createProduto)
app.put('/produto', repository.updateProduto)
app.delete('/produto', repository.deleteProduto)