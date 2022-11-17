const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'bd_restaurante',
  password: 'admin',
  port: 5432,
});




const getRestaurantes = (request, response) => {
    pool.query('SELECT * FROM sys.restaurante_tb ORDER BY id DESC', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows);
    });
  }  
 
  
  const createRestaurante = (request, response) => {
    const {  nome, endereco, horario_inicio, horario_fim } = request.body;
  
    pool.query('INSERT INTO sys.restaurante_tb (nome, endereco, horario_inicio, horario_fim) VALUES ($1, $2, $3, $4)', [nome, endereco, horario_inicio, horario_fim], (error, result) => {
      if (error) {
        throw error
      }
      response.status(201).send(`Restaurante criado com sucesso.`);
    });
  }
  
  const updateRestaurante = (request, response) => {
    
    const { id , nome, endereco, horario_inicio, horario_fim } = request.body
  
    pool.query(
      'UPDATE sys.restaurante_tb SET nome = $1, endereco = $2, horario_inicio = $3, horario_fim = $4 WHERE id = $5',
      [nome, endereco, horario_inicio, horario_fim, id],
      (error, result) => {
        if (error) {
          throw error
        }
        response.status(200).send(`Restaurante ${id} atualizado com sucesso.`)
      }
    );
  }
  
  const deleteRestaurante = (request, response) => {

    const { id  } = request.body    
  
    pool.query('DELETE FROM sys.restaurante_tb WHERE id = $1', [id], (error, result) => {
      if (error) {
        throw error
      }
      response.status(200).send(`Pessoa removida com sucesso com o identificador: ${id}`);
    });
  }
  


  const getProdutos = (request, response) => {   
  
    pool.query('SELECT * FROM sys.produto_tb ORDER BY id DESC', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows);
    });
  }

  const createProduto = (request, response) => {
    const { nome, descricao, preco } = request.body;
  
    pool.query('INSERT INTO sys.produto_tb (nome_produto, descricao, preco) VALUES ($1, $2, $3)', [nome, descricao, preco], (error, result) => {
      if (error) {
        throw error
      }
      response.status(201).send(`Produto criado com sucesso.`);
    });
  }
  
  const updateProduto = (request, response) => {

    const {id, nome, descricao, preco } = request.body;
  
    pool.query(
      'UPDATE sys.produto_tb SET nome_produto = $1, descricao = $2, preco = $3 WHERE id = $4',
      [nome, descricao, preco, id],
      (error, result) => {
        if (error) {
          throw error
        }
        response.status(200).send(`Produto ${id} atualizado com sucesso.`);
      }
    );
  }
  
  const deleteProduto = (request, response) => {
    
    const { id  } = request.body      
  
    pool.query('DELETE FROM sys.produto_tb WHERE id = $1', [id], (error, result) => {
      if (error) {
        throw error
      }
      response.status(200).send(`Produto removido com sucesso com o identificador: ${id}`);
    });
  }





  module.exports = {
    getRestaurantes,
    createRestaurante,
    updateRestaurante,
    deleteRestaurante,  

    getProdutos,
    createProduto,
    updateProduto,
    deleteProduto
}