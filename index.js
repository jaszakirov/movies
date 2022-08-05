const express = require('express')
const app = express()
const mongoose = require('mongoose')
const path = require('path')
const db = require('./helper/mongodb/db')
const moviesRouter = require('./routes/movies')
const {
    create
} = require('express-handlebars');
const { urlencoded } = require('body-parser')
const hbs = create({
    extname: 'hbs',
    defaultLayout: 'main',
    runtimeOptions: {
        allowProtoMethodsByDefault: true,
        allowProtoPropertiesByDefault: true
    },
    helpers: {
        title: 'Students'
    }
});
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', './views');
app.use(express.json());
app.use(express.urlencoded({ extended: true}))
app.use(express.static(path.join(__dirname, `public`)))

app.use('/' , moviesRouter)












const port = process.env.port || 5000

try {
    db()
    app.listen(port , ()=>{
        console.log('Server listening on port' + port);
    })
} catch (error) {
    
}





