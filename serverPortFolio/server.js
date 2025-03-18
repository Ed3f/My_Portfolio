// import the Express Framework and MongoDB 
const express = require('express')
const app = express()
const  mongoose = require('mongoose');
mongoose.set('strictQuery', false);
var routes = require('./routes/route');
const cors = require("cors");

app.use(cors(
    {
        origin: "http://localhost:4200"
    }
));


app.listen(9002, function check (error){
    
    if (error)
        console.log("Error")
    else
        console.log("Started...") 
});

// ho inserito un try-catch per evitare la chiamata di ritorno dato che nella versione attuale di mongo 
// non vuole la chiamata di ritorno 
// cerca su GPT .then() .catch()
mongoose.connect("mongodb://localhost:27017/PortfolioDB")
.then(() => console.log('Connected Successfully'))

.catch((err) => { console.error(err); });

app.use(express.json());
app.use(routes);
