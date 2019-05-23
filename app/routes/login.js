module.exports = app => {

    app.post('/login', (req, res) => {

        let loginDao = app.app.models.loginDao;
        loginDao.valida(res, req.body);

    });



}