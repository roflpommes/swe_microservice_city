'use strict';

const properties = require('../package.json');
const city = require('../service/informationService');

var controllers = {
    about: (req, res) => {
        var aboutInfo = {
            name: properties.name,
            version: properties.version,
            Example_IDs: {
                "Wien": 2761333,
                "Graz": 2778067,
                "Klagenfurt": 7871497,
                "Linz": 2772400,
                "Eisenstadt": 2780190,
                "Salzburg": 2766823,
                "Bregenz": 2781503,
                "Sankt Pölten": 2766429,
                "Innsbruck": 2775220
            }
        }
        res.json(aboutInfo);
    },

    getCityInformation: (req, res) => {
        city.information(req, res, (err, dist) => {
            if (err)
                res.send(err);
            console.log(dist)
            res.json(dist);
        });
    },
};

module.exports = controllers;