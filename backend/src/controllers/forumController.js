const Forum = require('../model/forum');

const forumController = {
  async forum_list(req, res) {
    try {
      const foruns = await Forum.findAll();
      res.json(foruns);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Erro ao listar foruns.' });
    }
  },

  async forum_detail(req, res) {
    try {
      const forum = await Forum.findByPk(req.params.id);
      if (forum) {
        res.json(forum);
      } else {
        res.status(404).json({ message: 'Forum não encontrado.' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Erro ao obter detalhes do forum.' });
    }
  },

  async forum_create(req, res) {
    try {
      const forum = await Forum.create(req.body);
      res.json(forum);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Erro ao criar forum.' });
    }
  },

  async forum_update(req, res) {
    try {
      await Forum.update(req.body, { where: { id: req.params.id } });
      const forum = await Forum.findByPk(req.params.id);
      res.json(forum);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Erro ao atualizar forum.' });
    }
  },

  async forum_delete(req, res) {
    try {
      await Forum.destroy({ where: { id: req.params.id } });
      res.json({ message: 'Forum excluído com sucesso.' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Erro ao excluir forum.' });
    }
  },
};

module.exports = forumController;
