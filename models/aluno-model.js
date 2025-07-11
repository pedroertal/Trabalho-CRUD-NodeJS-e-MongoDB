const mongoose = require('mongoose');

const alunoSchema = new mongoose.Schema({
  nome: String,
  idade: Number,
  curso: String
});

module.exports = mongoose.model('Aluno', alunoSchema);
