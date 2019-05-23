let bodyParser = require('body-parser');


module.exports = app => {

    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());

    app.use(function (req, res, next) {
        res.set("Access-Control-Allow-Origin", "http://localhost:3000");
        res.set("Vary", "Origin");
        res.header("Access-Control-Allow-Headers", "Content-Type");
        res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
        res.header('Access-Control-Allow-Credentials', true);
        //res.set("Content-Type", "multipart/form-data; boundary=something");
        //res.set("Content-Type", "application/json");
        next();
    });

    app.listen(process.env.PORT || 3001);
}