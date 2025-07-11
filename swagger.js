const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API Escola - Alunos e Professores',
      version: '1.0.0',
      description: 'CRUD de Alunos e Professores com Express e MongoDB',
    },
  },
  apis: ['./routes/*.js'], 
};

const swaggerSpec = swaggerJSDoc(options);

function setupSwagger(app) {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
}

module.exports = setupSwagger;
