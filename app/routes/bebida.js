module.exports = app => {

    app.route('/bebida')
        .get((req, res) => {
            let bd = app.models.BebidaDao;

            if (!Object.keys(req.query).length) {
                bd.listaTodasBebidas(res);
            }

            else if (req.query.hasOwnProperty('tipo')) {
                bd.listaTipoBebida(res, req.query.tipo);
            }

        })
        .post((req, res) => {
            let bd = app.models.BebidaDao;

            if (req.body.hasOwnProperty('id')) {
                bd.listaIdBebida(res, req.body.id);

            }
            else {
                bd.cadastraBebida(res, req.body);
            }

        });

    app.post('/bebida/editar', (req, res) => {
        let bd = app.models.BebidaDao;
        bd.editarBebida(res, req.body);
    });

}