import express from 'express';
import {createEngine} from 'express-react-views';
import http from 'http';
import path from 'path';

const app = express();
const serverOptions = {};
const server = http.Server(serverOptions, app);

app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');

app.engine(
  'jsx',
  createEngine({
    beautify: true
  })
);

app.use(express.static(path.join(__dirname, '/../assets')));

import PageRouter from './routes/page';
// app.get('/', routes.index);
app.use('/', PageRouter);

server.listen(app.get('port'), function () {
  console.log(`Express server listening on port ${app.get('port')}`);
});