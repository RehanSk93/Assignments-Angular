const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const PORT = 3000;
const _api = require('./routes/api');
const app = express();
app.use(cors());        // this is right place to implement CORS 

app.use(bodyParser.json());
app.use('/api', _api);

app.get('/', (req, res)=>{
    res.send('Hello from server')
})

app.listen(PORT, ()=>{
    console.log('Server is running port no ' + PORT);
})

