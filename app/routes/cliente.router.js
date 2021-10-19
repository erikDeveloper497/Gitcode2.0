module.exports = function(app){
    var clientes = require('../controllers/cliente.controller');
    app.post('/api/cliente/add', clientes.create);
    app.get('/api/cliente/list', clientes.findall);
}