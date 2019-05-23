let mongocliente = require('mongodb');

module.exports = () => {
    return {
        nomeBanco: 'prontaentregadb',
        client() {
            return mongocliente.connect('mongodb://localhost:27017', { useNewUrlParser: true });
        },

        objectId: mongocliente.ObjectID
    };
}