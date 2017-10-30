const { injectBabelPlugin } = require('react-app-rewired');

module.exports = function override(config, env) {
  config = injectBabelPlugin(
    ['import', { libraryName: 'antd', style: true }],
    config
  );

  const rewireLess = require('react-app-rewire-less');
  config = rewireLess(config, env);

  const path = require('path');
  // For import with absolute path
  config.resolve.modules = [path.resolve('src')].concat(config.resolve.modules);
  config.resolve.extensions = ['.tsx', '.ts', '.json', '.js', '.jsx', '.css'];
  return config;
};
