module.exports = app => {

    app.post('/login', (req, res) => {

        let loginDao = app.models.loginDao;
        loginDao.valida(res, req.body);
        console.log('Models aqui: ',app.app.models);
    });



}
