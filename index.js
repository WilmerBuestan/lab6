const express = requiere('exoress');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Integracion continua funcionando mi amigo!');
});

app.listen(port, () => {
  console.log(`Este ejercicio esta siendo escuchado enn http://localhost:${port}`);
});