let consign = require('consign');
let express = require('express')

let app = express();

consign().include('config').then('app/models').then('app/routes').into(app);
