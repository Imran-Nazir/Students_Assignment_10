const app = require('./app');
const dotenv = require('dotenv');

dotenv.config({path: 'config.env'});
const port = process.env.RUNNING_PORT;

app.listen(port, function () {
    console.log('listening on port ' + port);
})
