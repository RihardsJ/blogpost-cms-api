'use strict';

const container = require('./src/config/container');

const server = container.resolve('serverService');
const { DATABASE } = container.resolve('settings');

server(DATABASE.port);
