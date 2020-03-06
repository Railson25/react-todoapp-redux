//Criando Middleware para permitir que o acesso venha de 
//origens diferentes , definindo os metódos que tem acesso permitido
// e cabeçalhos que necessitam para a aplicaçao funcionar coretamente

module.exports = function(req, res, next) {
    res.header('Acess-Control-Allow-Origin', '*')
    res.header('Acess-Control-Allow-Origin', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
    res.header('Acess-Control-Allow-Origin', 'Origin, X-Requested-with, Content-Type, Accept')
    next()
}
