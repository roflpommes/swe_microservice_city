const express = require('express');
const app = express();

const routes = require('./api_routes/routes');
routes(app);
const port = process.env.PORT || 8080;


app.listen(port, () => {
console.log(`Listening to port http://localhost:${port}`);
});