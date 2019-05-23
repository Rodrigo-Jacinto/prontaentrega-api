module.exports = app => {

    return {
        cadastraPrato(res, dados) {

            let mongoObjeto = app.config.database;

            mongoObjeto.client().then(banco => {

                let dbo = banco.db(mongoObjeto.nomeBanco);

                dbo.collection('pratos').insertOne(dados, (erro, result) => {

                    if (erro) {
                        res.json({ msg: false });
                    }
                    else {
                        res.json({ msg: true });
                    }
                });

            });
        },

        listaTodosPratos(res) {
            let mongoObjeto = app.config.database;
            mongoObjeto.client().then(banco => {

                let dbo = banco.db(mongoObjeto.nomeBanco);
                dbo.collection('pratos').find().toArray((err, result) => {
                    res.json(result);
                });
            });
        },

        listaIdPrato(res, id) {

            let mongoObjeto = app.config.database;

            mongoObjeto.client().then(banco => {

                let dbo = banco.db(mongoObjeto.nomeBanco);
                dbo.collection('pratos').findOne({ '_id': new mongoObjeto.objectId(id) }, (err, resultado) => {

                    res.json(resultado);

                })
            });
        },

        listaNomePrato(res, nome) {
            let mongoObjeto = app.config.database;

            mongoObjeto.client().then(banco => {

                let dbo = banco.db(mongoObjeto.nomeBanco);

                dbo.collection('pratos').find({ nome: new RegExp(nome, 'i') }).toArray((erro, resultado) => {
                    res.json(resultado);
                });

            });


        },

        editarPrato(res, dados) {

            let { _id, ...dadosPrato } = dados;
            let mongoObjeto = app.config.database;

            mongoObjeto.client().then(banco => {

                let dbo = banco.db(mongoObjeto.nomeBanco);

                dbo.collection('pratos').updateOne({ '_id': new mongoObjeto.objectId(_id) }, { $set: dadosPrato }, (erro, resultado) => {

                    res.json(resultado.result);
                });

            })

        }

    }//fim da chave do objeto


}