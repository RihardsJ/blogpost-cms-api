'use strict';

const container = require('./src/config/container');

const server = container.resolve('serverService');
const { PORT } = container.resolve('settings');

console.log(PORT);

server(PORT);
