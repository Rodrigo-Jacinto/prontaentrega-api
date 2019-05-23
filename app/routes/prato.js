module.exports = app => {

    app.route('/prato')
        .get((req, res) => {
            let pd = app.models.PratoDao;

            if (!Object.keys(req.query).length) {
                pd.listaTodosPratos(res);
            }

            else if (req.query.hasOwnProperty('nome')) {
                pd.listaNomePrato(res, req.query.nome);
            }

        })
        .post((req, res) => {
            let pd = app.models.PratoDao;

            if (req.body.hasOwnProperty('id')) {
                pd.listaIdPrato(res, req.body.id);

            }
            else {
                pd.cadastraPrato(res, req.body);
            }


        });

    app.post('/prato/editar', (req, res) => {
        let pd = app.models.PratoDao;
        pd.editarPrato(res, req.body);
    });

}