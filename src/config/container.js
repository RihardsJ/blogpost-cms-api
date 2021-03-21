'use strict';

const { asValue, asFunction, createContainer } = require('awilix');
const container = createContainer();

// Dependencies
const express = require('express');
const pg = require('pg');

// Settings
const settings = require('./settings');

// Services
const serverService = require('../services/server.service');

container.register({
	// Dependencies
	express: asValue(express),
	pg: asValue(pg),

	// Settings
	settings: asValue(settings),

	// Services
	serverService: asFunction(serverService).singleton(),
});

module.exports = container;
