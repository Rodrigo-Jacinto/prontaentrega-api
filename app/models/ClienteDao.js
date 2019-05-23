module.exports = app => {

    return {
        cadastraCliente(res, dados) {

            let mongoObjeto = app.config.database;

            mongoObjeto.client().then(banco => {

                let dbo = banco.db(mongoObjeto.nomeBanco);

                dbo.collection('clientes').insertOne(dados, (erro, result) => {

                    if (erro) {
                        res.json({ msg: false });
                    }
                    else {
                        res.json({ msg: true });
                    }
                });

            });
        },

        adicionaConta(res, dados) {

            let { id, produtosConsumidos } = dados;
            let mongoObjeto = app.config.database;

            produtosConsumidos.forEach(element => {
                element.codigo = new mongoObjeto.objectId();
            });

            mongoObjeto.client().then(banco => {

                let dbo = banco.db(mongoObjeto.nomeBanco);

                dbo.collection('clientes').updateOne({ '_id': new mongoObjeto.objectId(id) }, { $push: { 'conta': { $each: produtosConsumidos } } }, (err, result) => {

                    dbo.collection("clientes").findOne({ "_id": new mongoObjeto.objectId(id) }, { "_id": false, "conta": true }, (err, resultado) => {

                        res.json(resultado.conta);
                    });

                });

            });

        },


        excluiConta(res, dados) {

            let { id, codigoConta } = dados;
            let mongoObjeto = app.config.database;

            mongoObjeto.client().then(banco => {

                let dbo = banco.db(mongoObjeto.nomeBanco);

                dbo.collection('clientes').updateOne({ '_id': new mongoObjeto.objectId(id) }, { $pull: { 'conta': { 'codigo': new mongoObjeto.objectId(codigoConta) } } }, (err, result) => {

                    dbo.collection("clientes").findOne({ "_id": new mongoObjeto.objectId(id) }, { "_id": false, "conta": true }, (err, resultado) => {

                        res.json(resultado.conta);
                    });

                });
            })

        },

        listaTodosClientes(res) {
            let mongoObjeto = app.config.database;
            mongoObjeto.client().then(banco => {

                let dbo = banco.db(mongoObjeto.nomeBanco);
                dbo.collection('clientes').find().toArray((err, result) => {
                    res.json(result);
                });
            });
        },

        listaIdCliente(res, id) {

            let mongoObjeto = app.config.database;

            mongoObjeto.client().then(banco => {

                let dbo = banco.db(mongoObjeto.nomeBanco);
                dbo.collection('clientes').findOne({ '_id': new mongoObjeto.objectId(id) }, (err, resultado) => {

                    res.json(resultado);

                })


            });


        },

        listaNomeCliente(res, nome) {
            let mongoObjeto = app.config.database;

            mongoObjeto.client().then(banco => {

                let dbo = banco.db(mongoObjeto.nomeBanco);

                dbo.collection('clientes').find({ nome: new RegExp(nome, 'i') }).toArray((erro, resultado) => {
                    res.json(resultado);
                });

            });


        },

        editarCliente(res, dados) {

            let { _id, ...dadosCliente } = dados;
            let mongoObjeto = app.config.database;

            mongoObjeto.client().then(banco => {

                let dbo = banco.db(mongoObjeto.nomeBanco);

                dbo.collection('clientes').updateOne({ '_id': new mongoObjeto.objectId(_id) }, { $set: dadosCliente }, (erro, resultado) => {

                    res.json(resultado.result);
                });

            })

        }

    }//fim da chave do objeto


}