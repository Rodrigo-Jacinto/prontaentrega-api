module.exports = app => {

    app.route('/cliente')
        .get((req, res) => {
            let cd = app.app.models.ClienteDao;

            if (!Object.keys(req.query).length) {
                cd.listaTodosClientes(res);
            }

            else if (req.query.hasOwnProperty('nome')) {
                cd.listaNomeCliente(res, req.query.nome);
            }

        })
        .post((req, res) => {
            let cd = app.app.models.ClienteDao;

            if (req.body.hasOwnProperty('id')) {
                cd.listaIdCliente(res, req.body.id);

            }
            else {
                cd.cadastraCliente(res, req.body);
            }

        });

    app.post('/cliente/editar', (req, res) => {
        let cd = app.app.models.ClienteDao;
        cd.editarCliente(res, req.body);
    });

    app.post('/cliente/conta', (req, res) => {

        let cd = app.app.models.ClienteDao;
        cd.adicionaConta(res, req.body);
       // console.log(req.body);
    })

    app.post('/cliente/conta-excluir', (req, res) => {

        let cd = app.app.models.ClienteDao;
        cd.excluiConta(res, req.body);
       // console.log(req.body);
    })

}