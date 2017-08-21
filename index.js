/* eslint-env node */
'use strict';

const HexoPlugin = require('./broccoli/hexo');
const Funnel = require('broccoli-funnel');
const fs = require('fs');
const path = require('path');
const express = require('express');

module.exports = {
  name: 'ember-hexo-blog',

  isDevelopingAddon() {
    return false;
  },

  serverMiddleware({app, options}) {
    app.get(new RegExp(`blog.*/$`), express.static('dist/'));
  },

  treeFor(name) {
    if (name !== 'public') {
      return;
    }

    let blogSourcePath = path.join(this.app.project.root, 'blog');

    if (!fs.existsSync(blogSourcePath)) {
      return;
    }

    let blogDirFunnel = new Funnel(blogSourcePath, {
      exclude: ['_multiconfig.yml', 'db.json']
    });
    return new HexoPlugin([blogDirFunnel]);
  }
};
