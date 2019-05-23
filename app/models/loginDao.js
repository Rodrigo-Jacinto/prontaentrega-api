module.exports = app => {

    return {

        valida(response, dados) {
            let mongoObjeto = app.config.database;

            mongoObjeto.client().then(banco => {

                let dbo = banco.db(mongoObjeto.nomeBanco);
                dbo.collection('admin').findOne(dados, (err, resultado) => {

                    if(resultado) {
                        response.json({resultado:true});
                    }
                    else {
                        response.json({resultado:false});
                    }
                });

            });

        }
    }
}