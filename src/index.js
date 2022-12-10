import express from 'express';
const app = express();

const PORT = process.env.PORT || 8080;


app.get('/', (req, res) => {
    console.log("Hola Desde index!!");

    res.send({msg:"Ahora si esta Funcionando ..."});
});

app.listen(PORT, ()=> {
    console.log("Hola Render")
    console.log('SERVIDOR ESCUCHANDO EN EL PORT ' + PORT);
});

