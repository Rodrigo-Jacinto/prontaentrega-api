let consign = require('consign');
let express = require('express')

let app = express();

consign({cwd:"app"}).include('config').then('models').then('routes').into(app);
