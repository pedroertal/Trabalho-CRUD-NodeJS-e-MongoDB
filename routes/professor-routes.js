const express = require('express');
const router = express.Router();
const controller = require('../controllers/professor-controller');


/**
 * @swagger
 * tags:
 *   name: Professores
 *   description: Endpoints para gerenciar professores
 */

/**
 * @swagger
 * /professores:
 *   get:
 *     summary: Lista todos os professores
 *     tags: [Professores]
 *     responses:
 *       200:
 *         description: Lista retornada com sucesso
 */
router.get('/', controller.getAll);

/**
 * @swagger
 * /professores:
 *   post:
 *     summary: Cria um novo professor
 *     tags: [Professores]
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
 *         description: Professor criado
 */
router.post('/', controller.create);



router.get('/', controller.getAll);
router.get('/:id', controller.getById);
router.post('/', controller.create);



/**
 * @swagger
 * /professores/{id}:
 *   put:
 *     summary: Atualiza um professor pelo ID
 *     tags: [Professores]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do professor
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
 *         description: Professor atualizado
 */




router.put('/:id', controller.update);



/**
 * @swagger
 * /professores/{id}:
 *   delete:
 *     summary: Remove um professor pelo ID
 *     tags: [Professores]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do professor
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Professor deletado com sucesso
 */




router.delete('/:id', controller.delete);

module.exports = router;

