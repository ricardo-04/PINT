const Utilizador = require('../model/utilizador');

const utilizadorController = {
  async utilizador_list(req, res) {
    try {
      const utilizadores = await Utilizador.findAll();
      res.json(utilizadores);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Erro ao listar utilizadores.' });
    }
  },

  async utilizador_detail(req, res) {
    try {
      const utilizador = await Utilizador.findByPk(req.params.id);
      if (utilizador) {
        res.json(utilizador);
      } else {
        res.status(404).json({ message: 'Utilizador não encontrado.' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Erro ao obter detalhes do utilizador.' });
    }
  },

  async utilizador_create(req, res) {
    try {
      const utilizador = await Utilizador.create(req.body);
      res.json(utilizador);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Erro ao criar utilizador.' });
    }
  },

  async utilizador_update(req, res) {
    try {
      await Utilizador.update(req.body, { where: { id: req.params.id } });
      const utilizador = await Utilizador.findByPk(req.params.id);
      res.json(utilizador);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Erro ao atualizar utilizador.' });
    }
  },

  async utilizador_delete(req, res) {
    try {
      await Utilizador.destroy({ where: { id: req.params.id } });
      res.json({ message: 'Utilizador excluído com sucesso.' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Erro ao excluir utilizador.' });
    }
  },
};

module.exports = utilizadorController;
