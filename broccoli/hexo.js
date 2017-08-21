const path = require('path');
const Plugin = require('broccoli-plugin');
const Hexo = require('hexo');
const tmp = require('tmp');
const fs = require('fs');

class HexoPlugin extends Plugin {
  constructor(inputNodes, options) {
    options = options || {};
    super(inputNodes, {
      annotation: options.annotation
    });
    this.options = options;
    this.tmpFile = tmp.fileSync({postfix: '.yml'});
  }

  build() {
    /*
     * Write a config file that renders the hexo Hebsite into
     * the blog/ directory the output tree.
     */
    let blogOutputPath = path.join(this.outputPath, 'blog');
    fs.writeSync(this.tmpFile.fd, `public_dir: ${blogOutputPath}`, 0);

    /*
     * Initialize Hexo pointing the second, overriding config to
     * our temporary file.
     */
    let blogSourcePath = this.inputPaths[0];
    let relativeConfigPath = path.relative(blogSourcePath, this.tmpFile.name);
    let hexo = new Hexo(blogSourcePath, {
      config: `_config.yml,${relativeConfigPath}`
    });

    /*
     * Run Hexo's generator
     */
    return hexo.init().then(() => {
      return hexo.call('generate', {});
    }).then(() => {
      return hexo.exit();
    });
  }
}

module.exports = HexoPlugin;
