const express = require('express');
const router = express.Router();
const controller = require('../controllers/aluno-controller');


/**
 * @swagger
 * tags:
 *   name: Alunos
 *   description: Endpoints para gerenciar alunos
 */

/**
 * @swagger
 * /alunos:
 *   get:
 *     summary: Lista todos os alunos
 *     tags: [Alunos]
 *     responses:
 *       200:
 *         description: Lista retornada com sucesso
 */
router.get('/', controller.getAll);

/**
 * @swagger
 * /alunos:
 *   post:
 *     summary: Cria um novo aluno
 *     tags: [Alunos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *               idade:
 *                 type: integer
 *               curso:
 *                 type: string
 *     responses:
 *       201:
 *         description: Aluno criado
 */
router.post('/', controller.create);



router.get('/', controller.getAll);
router.get('/:id', controller.getById);
router.post('/', controller.create);


/**
 * @swagger
 * /alunos/{id}:
 *   put:
 *     summary: Atualiza um aluno pelo ID
 *     tags: [Alunos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do aluno
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *               idade:
 *                 type: integer
 *               curso:
 *                 type: string
 *     responses:
 *       200:
 *         description: Aluno atualizado
 */



router.put('/:id', controller.update);


/**
 * @swagger
 * /alunos/{id}:
 *   delete:
 *     summary: Remove um aluno pelo ID
 *     tags: [Alunos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do aluno
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Aluno deletado com sucesso
 */



router.delete('/:id', controller.delete);

module.exports = router;
