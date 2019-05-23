let consign = require('consign');
let express = require('express')

let app = express();

consign({cwd: process.cwd()+"/app"}).include('config').then('app/models').then('app/routes').into(app);
