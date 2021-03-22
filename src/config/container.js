'use strict';

const { asValue, asFunction, createContainer } = require('awilix');
const container = createContainer();

// Dependencies
const express = require('express');
const pg = require('pg');

// Settings
const settings = require('./settings');

// Controllers
const formsController = require('../controllers/routes/forms.controller');
const pagesController = require('../controllers/routes/pages.controller');
const postsController = require('../controllers/routes/posts.controller');
const app = require('../controllers/router');

//  Loaders
const connection = require('../loaders/connection.js');

// Models
const formsModel = require('../models/forms.model');
const pagesModel = require('../models/pages.model');
const postsModel = require('../models/posts.model');

// Services
const serverService = require('../services/server.service');

container.register({
	// Dependencies
	express: asValue(express),
	pg: asValue(pg),

	// Settings
	settings: asValue(settings),

	// Controllers
	app: asFunction(app).singleton(),
	formsController: asFunction(formsController).singleton(),
	// pagesController: asFunction(pagesController).singleton(),
	// postsController: asFunction(postsController).singleton(),

	// Loaders
	connection: asFunction(connection).singleton(),

	// Models
	formsModel: asFunction(formsModel).singleton(),
	// pagesModel: asFunction(pagesModel).singleton(),
	// postsModel: asFunction(postsModel).singleton(),

	// Services
	serverService: asFunction(serverService).singleton(),
});

module.exports = container;
