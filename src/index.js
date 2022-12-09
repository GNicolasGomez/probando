import express from 'express';
const app = express();

const PORT = processs.env.PORT || 8080;


app.get('/', (req, res) => {
    console.log("Hola Desde index!!");

    res.send("Estamos probando");
});

app.listen(PORT, ()=> {
    console.log("Hola Render")
    console.log('SERVIDOR ESCUCHANDO EN EL PORT ' + PORT);
});

