const mongoose = require('mongoose');

const professorSchema = new mongoose.Schema({
  nome: String,
  disciplina: String,
  tempoDeCasa: Number
});

module.exports = mongoose.model('Professor', professorSchema);
