const path = require('path');
const webpack = require('webpack');
const express = require('express');

if (process.env.NODE_ENV !== 'production') {
  var devMiddleware = require('webpack-dev-middleware');
  var hotMiddleware = require('webpack-hot-middleware');
}

const app = express();

// Initialize the production server which serves up webpack'ed files.
const initProductionServer = () => {
  const distDir = __dirname + '/dist';
  app.use('/dist', express.static(distDir));
};

// Initialize the development server which hot loads source content webpack.
const initDevelopmentServer = function () {
  const config = require('./webpack.config.dev');
  const compiler = webpack(config);

  app.use(devMiddleware(compiler, {
    publicPath: config.output.publicPath,
    historyApiFallback: true,
    stats: {
      colors: true
    }
  }));

  app.use(hotMiddleware(compiler));
//  app.use('/static', express.static(__dirname + '/src/static'));
};

// Depending on mode, initialize the server.
if (process.env.NODE_ENV === 'production') {
  initProductionServer();
} else {
  initDevelopmentServer();
}

// In both dev and prod, serve up the top level 'index.html' file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/index.html'));
});

// Set up the application port (or from environment if hosted).
const appHttpPort = process.env.PORT || 3000;

// Start web server.
app.listen(appHttpPort, '0.0.0.0', (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Url: http://localhost:' + appHttpPort);
  }
});
