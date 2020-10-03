let express = require('express')
let bodyParser = require('body-parser');
let mongoose = require('mongoose');

let app = express();
var port = process.env.PORT || 8080;
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

const dbPath = 'mongodb+srv://admin:123@cluster0.lkhuq.mongodb.net/<dbname>?retryWrites=true&w=majority';
const options = {useNewUrlParser: true, useUnifiedTopology: true}
const mongo = mongoose.connect(dbPath, options);

mongo.then(() => {
    console.log('connected to mongodb');
}, error => {
    console.log(error, 'error');
})

app.get('/', (req, res) => res.send('Welcome to Express'));

let apiRoutes = require("./routes")
//Use API routes in the App
app.use('/api', apiRoutes)

app.listen(port, function() {
    console.log("Running on Port "+ port);
})