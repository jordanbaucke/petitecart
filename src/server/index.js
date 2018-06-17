const express = require('express');
const os = require('os');

const app = express();

require('./routes')(app);

require("./db")

app.use(express.static('dist'));
app.get('/api/getUsername', (req, res) => res.send({ username: os.userInfo().username }));
app.listen(8080, () => console.log('Listening on port 8080!'));
