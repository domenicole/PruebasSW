const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/', (_req,res) =>{
    res.status(200).json({
        mensaje: 'Nueva versión desplegada automáticamente',
        nombre: 'Domenica Villagomez',
        servicio: 'API Express desplegada en Vercel'
    });
});

app.get('/saludo/:nombre', (_req,res) =>{
    const { nombre } = _req.params;
    res.status(200).json({
        mensaje: `¡Hola, ${nombre}`,
        servicio: 'API disponible'
    });
});

app.get('/suma', (_req,res) =>{
    const numero1 = Number(_req.query.numero1);
    const numero2 = Number(_req.query.numero2);
    
    if(Number.isNaN(numero1) || Number.isNaN(numero2)){
        return res.status(400).json({
            error: 'Los parámetros numero1 y numero2 deben ser números válidos'
        });
    }

    res.status(200).json({
        numero1,
        numero2,
        resultado: numero1 + numero2
    });
});


app.listen(PORT, () =>{
    console.log('Servidor ejecutando en: http://localhost:${PORT}');
});