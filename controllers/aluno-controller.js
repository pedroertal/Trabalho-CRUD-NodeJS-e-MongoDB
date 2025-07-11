const Aluno = require('../models/aluno-model');

exports.getAll = async (req, res) => {
  const alunos = await Aluno.find();
  res.json(alunos);
};

exports.getById = async (req, res) => {
  const aluno = await Aluno.findById(req.params.id);
  res.json(aluno);
};

exports.create = async (req, res) => {
  const novoAluno = new Aluno(req.body);
  await novoAluno.save();
  res.status(201).json(novoAluno);
};

exports.update = async (req, res) => {
  const aluno = await Aluno.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(aluno);
};

exports.delete = async (req, res) => {
  await Aluno.findByIdAndDelete(req.params.id);
  res.json({ message: 'Aluno deletado com sucesso' });
};
