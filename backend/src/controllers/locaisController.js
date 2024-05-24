const Locais = require('../model/locais');

const locaisController = {
  async locais_list(req, res) {
    try {
      const locais = await Locais.findAll();
      res.json(locais);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Erro ao listar locais.' });
    }
  },

  async locais_detail(req, res) {
    try {
      const local = await Locais.findByPk(req.params.id);
      if (local) {
        res.json(local);
      } else {
        res.status(404).json({ message: 'Local não encontrado.' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Erro ao obter detalhes do local.' });
    }
  },

  async locais_create(req, res) {
    try {
      const local = await Locais.create(req.body);
      res.json(local);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Erro ao criar local.' });
    }
  },

  async locais_update(req, res) {
    try {
      await Locais.update(req.body, { where: { id: req.params.id } });
      const local = await Locais.findByPk(req.params.id);
      res.json(local);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Erro ao atualizar local.' });
    }
  },

  async locais_delete(req, res) {
    try {
      await Locais.destroy({ where: { id: req.params.id } });
      res.json({ message: 'Local excluído com sucesso.' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Erro ao excluir local.' });
    }
  },
};

module.exports = locaisController;
