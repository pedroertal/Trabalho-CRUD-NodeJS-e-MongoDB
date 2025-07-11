const Professor = require('../models/professor-model');

exports.getAll = async (req, res) => {
  const professor = await Professor.find();
  res.json(professores);
};

exports.getById = async (req, res) => {
  const professor = await Aluno.findById(req.params.id);
  res.json(professor);
};

exports.create = async (req, res) => {
  const novoProfessor = new Professor(req.body);
  await novoProfessor.save();
  res.status(201).json(novoProfessor);
};

exports.update = async (req, res) => {
  const professor = await Professor.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(professor);
};

exports.delete = async (req, res) => {
  await Professor.findByIdAndDelete(req.params.id);
  res.json({ message: 'Professor deletado com sucesso' });
};
