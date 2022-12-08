import express from 'express';
const app = express();

const PORT = 8080;


app.get('/', (req, res) => {
    console.log("Hola Desde index!!");

    res.send("Estoy Funcionando ...");
});

app.listen(PORT, ()=> {
    console.log('SERVIDOR ESCUCHANDO EN EL PORT ' + PORT);
});

