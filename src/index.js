const express = require('express');
const app = express();
const morgan = require('morgan');

//settings
app.set('port',process.env.PORT || 3000);


//middleware
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());


//routes
app.get('/')


// starting server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});