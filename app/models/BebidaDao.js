module.exports = app => {

    return {
        cadastraBebida(res, dados) {

            let mongoObjeto = app.config.database;

            mongoObjeto.client().then(banco => {

                let dbo = banco.db(mongoObjeto.nomeBanco);

                dbo.collection('bebidas').insertOne(dados, (erro, result) => {

                    if (erro) {
                        res.json({ msg: false });
                    }
                    else {
                        res.json({ msg: true });
                    }
                });

            });
        },

        listaTodasBebidas(res) {
            let mongoObjeto = app.config.database;
            mongoObjeto.client().then(banco => {

                let dbo = banco.db(mongoObjeto.nomeBanco);
                dbo.collection('bebidas').find().toArray((err, result) => {
                    res.json(result);
                });
            });
        },

        listaIdBebida(res, id) {

            let mongoObjeto = app.config.database;

            mongoObjeto.client().then(banco => {

                let dbo = banco.db(mongoObjeto.nomeBanco);
                dbo.collection('bebidas').findOne({ '_id': new mongoObjeto.objectId(id) }, (err, resultado) => {

                    res.json(resultado);

                })
            });
        },

        listaTipoBebida(res, tipo) {
            let mongoObjeto = app.config.database;

            mongoObjeto.client().then(banco => {

                let dbo = banco.db(mongoObjeto.nomeBanco);

                dbo.collection('bebidas').find({ tipo: new RegExp(tipo, 'i') }).toArray((erro, resultado) => {
                    res.json(resultado);
                });

            });


        },

        editarBebida(res, dados) {

            let { _id, ...dadosBebida } = dados;
            let mongoObjeto = app.config.database;

            mongoObjeto.client().then(banco => {

                let dbo = banco.db(mongoObjeto.nomeBanco);

                dbo.collection('bebidas').updateOne({ '_id': new mongoObjeto.objectId(_id) }, { $set: dadosBebida }, (erro, resultado) => {

                    res.json(resultado.result);
                });

            })

        }

    }//fim da chave do objeto


}