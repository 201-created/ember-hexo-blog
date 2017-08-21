/* eslint-env node */
'use strict';

const HexoPlugin = require('./broccoli/hexo');
const Funnel = require('broccoli-funnel');
const fs = require('fs');

module.exports = {
  name: 'ember-hexo-blog',

  isDevelopingAddon() {
    return false;
  },

  treeFor(name) {
    if (name !== 'public') {
      return;
    }

    if (!fs.existsSync('blog')) {
      return;
    }

    let blogDirFunnel = new Funnel('blog', {
      exclude: ['_multiconfig.yml', 'db.json']
    });
  }
};
