const express = require('express');
const path = require('path');
const app = express();

app.use('/public', express.static(path.join(__dirname, '/public')));

app.listen(3000, () => {
    console.log("Servidor escuchado en el puerto 3000")

});