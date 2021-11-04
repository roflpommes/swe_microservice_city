const request = require(`request`);
const BASE_URL = 'http://api.openweathermap.org/data/2.5/';

const API_KEY = '13775e396896950729ccb58bb951b631'; 

var city = {
    information: (req, res, next) => {
        let URL = `${BASE_URL}/weather?id=${req.params.id}&appid=${API_KEY}`;
            
        request(URL,
                (error, response, body) => {
                    if(!error && response.statusCode == 200) {
                        response = JSON.parse(body);
                        res.send(response);
                    } else {
                        console.log(response.statusCode + response.body);
                        res.send(
                            {
                                city: "Not found"
                            });
                    }
                });
    }
};

module.exports = city;