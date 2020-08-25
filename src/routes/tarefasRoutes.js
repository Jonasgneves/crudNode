module.exports = function (app) {
    const tarefas = require('../controllers/tarefasController')
    app.route('/tarefas')
        .get(tarefas.listAll)
        .post(tarefas.createOne)
    
    app.route('/tarefas/:id')
        .get(tarefas.showOne)
        .put(tarefas.update)
        .delete(tarefas.delete)

}