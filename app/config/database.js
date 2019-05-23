let mongocliente = require('mongodb');

module.exports = () => {
    return {
        nomeBanco: 'prontaentregadb',
        client() {
            return mongocliente.connect(process.env.MONGO_URL, { useNewUrlParser: true });
        },

        objectId: mongocliente.ObjectID
    };
}