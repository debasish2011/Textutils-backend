const connectMongo = require('./database');
const express = require('express');
const cors = require('cors')

connectMongo();

const app = express();
const port = 5000;

app.use(cors())
app.use(express.json())

app.use('/api/auth', require('./Routes/auth'))
app.use('/api/text', require('./Routes/text'))


app.listen(port,()=>{
    console.log(`TextUtils listening at http://localhost:${port}`);
})