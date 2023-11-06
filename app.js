
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
//const productsRoute = require('./routes/productsRoute');  --> File Name is Wrong
const productsRoute = require('./routes/productsRoutes');

//Midlewares
app.use(express.json()); //--->THis Midlewares allow the get json in post ans puts requests

app.use('/api', productsRoute);



const PORT = process.env.PORT || 3000;


app.listen(PORT, () => {
console.log(`Server running on port ${PORT}`);
});