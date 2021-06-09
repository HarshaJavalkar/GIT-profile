const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static('./dist/git'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/git/'}),
);



const cors = require('cors'); 
const express = require('express');
const app = express();app.use(cors());
// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
