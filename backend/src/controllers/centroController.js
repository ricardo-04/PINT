const Centro = require('../model/centro');

const centroController = {
  async centro_list(req, res) {
    try {
      const centros = await Centro.findAll();
      res.json(centros);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Erro ao listar centros.' });
    }
  },

  async centro_detail(req, res) {
    try {
      const centro = await Centro.findByPk(req.params.id);
      if (centro) {
        res.json(centro);
      } else {
        res.status(404).json({ message: 'Centro não encontrado.' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Erro ao obter detalhes do centro.' });
    }
  },

  async centro_create(req, res) {
    try {
      const centro = await Centro.create(req.body);
      res.json(centro);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Erro ao criar centro.' });
    }
  },

  async centro_update(req, res) {
    try {
      await Centro.update(req.body, { where: { id: req.params.id } });
      const centro = await Centro.findByPk(req.params.id);
      res.json(centro);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Erro ao atualizar centro.' });
    }
  },

  async centro_delete(req, res) {
    try {
      await Centro.destroy({ where: { id: req.params.id } });
      res.json({ message: 'Centro excluído com sucesso.' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Erro ao excluir centro.' });
    }
  },
};

module.exports = centroController;
