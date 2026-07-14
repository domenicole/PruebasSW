const express = required('express');
const app = express();
const PORT = 3000;

app.get('/', (_req,res) =>{
    res.send('Integración contínua funcional');
});

app.listen(PORT, () =>{
    console.log('Servidor ejecutando en: http://localhost:${PORT}');
});