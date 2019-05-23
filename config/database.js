let mongocliente = require('mongodb');

module.exports = () => {
    return {
        nomeBanco: 'prontaentregadb',
        client() {
            return mongocliente.connect('mongodb+srv://jacinto:wbop2388@cluster0-7xs21.mongodb.net/test?retryWrites=true', { useNewUrlParser: true });
        },

        objectId: mongocliente.ObjectID
    };
}