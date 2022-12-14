const express = require('express');

const talkerRouter = require('./routers/talkers.router');
const loginRouter = require('./routers/login.router');

const app = express();
app.use(express.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.use(talkerRouter);
app.use(loginRouter);

app.listen(PORT, () => {
  console.log('Online');
});
