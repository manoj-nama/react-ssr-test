import express from 'express';
import webpack from 'webpack';
import path from 'path';
import wdm from 'webpack-dev-middleware';
import React from 'react';
import { match, RouterContext } from 'react-router';
import routes from '../src/utils/routes';
import favicon from 'serve-favicon';
import { renderToString, renderToStaticMarkup } from 'react-dom/server';

import config from '../webpack.config';

const app = express();
const port = 3000;
const compiler = webpack(config);

app.use(favicon(path.join(__dirname, '../assets', 'favicon.ico')));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, '../assets')));

app.use(wdm(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('*', (req, res) => {
  console.log("Got request on server", req.url);
  match({routes, location: req.url}, (err, redirectLocation, renderProps) => {
    if(err) {
      res.render('index', { renderedReactApp: '' });
    } else if(redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search)
    } else if(renderProps) {
      const renderedHtml = renderToString(<RouterContext {...renderProps} />);
      res.render('index', { renderedReactApp: renderedHtml });
    } else {
      res.render('index', { renderedReactApp: '' });
    }
  });
});

app.listen(port, '0.0.0.0', (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log(`Server started successfully on port ${port}`);
  }
});