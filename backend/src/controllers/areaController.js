const Area = require('../model/area');

const areaController = {
  async area_list(req, res) {
    try {
      const areas = await Area.findAll();
      res.json(areas);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Erro ao listar áreas.' });
    }
  },

  async area_detail(req, res) {
    try {
      const area = await Area.findByPk(req.params.id);
      if (area) {
        res.json(area);
      } else {
        res.status(404).json({ message: 'Área não encontrada.' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Erro ao obter detalhes da área.' });
    }
  },

  async area_create(req, res) {
    try {
      const area = await Area.create(req.body);
      res.json(area);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Erro ao criar área.' });
    }
  },

  async area_update(req, res) {
    try {
      await Area.update(req.body, { where: { id: req.params.id } });
      const area = await Area.findByPk(req.params.id);
      res.json(area);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Erro ao atualizar área.' });
    }
  },

  async area_delete(req, res) {
    try {
      await Area.destroy({ where: { id: req.params.id } });
      res.json({ message: 'Área excluída com sucesso.' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Erro ao excluir área.' });
    }
  },
};

module.exports = areaController;
