'use strict';

const _ = require('lodash');

const admin = require('./server');

const mergeRoutes = (a, b, key) => {
  return _.isArray(a) && _.isArray(b) && key === 'routes' ? a.concat(b) : undefined;
};

module.exports = admin;