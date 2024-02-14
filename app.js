const express = require('express');
require('dotenv').config();
const app = express();

const port = process.env.PORT;

app.use(express.static('public'));  //esto se usa para mostrar el contenido del index.html en la pagina principal (el archivo se debe llamar index.html)


//no es necesario crear este app.get cuando se usa el app.use(express.static('public'))
app.get('/', (req, res) => { //asi se va a la pagina principal
  res.send('Home Page') //el res.send se usa para que se muestra algun string en la pagina principal
})

//para ir a esta url seria localhost:8080/buenas
app.get('/buenas', (req, res) => {
    res.send('Home Page 2')
})

//este se usa cuando no se encuentra la url
app.get('*', (req, res) => {
    res.send('404 | page not found')
})


app.get('*', (req, res) => {
    //el __dirname es neceario para que se pueda mostrar el archivo html
    res.sendFile(__dirname + 'public/404.html'); //esta es la forma de que se envie un archivo html a otra pagina que no sea la principal
})


//de esta forma se activa el
app.listen(port, () =>{
    console.log(`app corriendo en el port ${port}`) 
})
