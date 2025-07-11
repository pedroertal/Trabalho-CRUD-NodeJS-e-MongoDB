const express = require('express');
const cors = require('cors');
require('./config/db');

const app = express();

app.use(cors());
app.use(express.json());

const alunoRoutes = require('./routes/aluno-routes');
const professorRoutes = require('./routes/professor-routes');

app.use('/alunos', alunoRoutes);
app.use('/professores', professorRoutes);

const setupSwagger = require('./swagger');
setupSwagger(app);


const PORT = 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
