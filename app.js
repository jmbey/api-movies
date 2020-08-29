const express = require('express');
const app = express();

const moviesRouter = require('./routes/movies');

app.use('/movies', moviesRouter);

app.listen(3000, function (){
    console.log('El servidor esta corriendo en el puerto 3000')
    console.log('Link --> http://localhost:3000')
})



