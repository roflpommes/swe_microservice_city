'use strict';

const controller = require('../controller/controllers');

module.exports = (app) => {
    app.route('/').get(controller.about);
    app.route('/city/:id').get(controller.getCityInformation);
}