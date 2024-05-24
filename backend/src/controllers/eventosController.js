const Evento = require('../model/evento');

const eventoController = {
  async evento_list(req, res) {
    try {
      const eventos = await Evento.findAll();
      res.json(eventos);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Erro ao listar eventos.' });
    }
  },

  async evento_detail(req, res) {
    try {
      const evento = await Evento.findByPk(req.params.id);
      if (evento) {
        res.json(evento);
      } else {
        res.status(404).json({ message: 'Evento não encontrado.' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Erro ao obter detalhes do evento.' });
    }
  },

  async evento_create(req, res) {
    try {
      const evento = await Evento.create(req.body);
      res.json(evento);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Erro ao criar evento.' });
    }
  },

  async evento_update(req, res) {
    try {
      await Evento.update(req.body, { where: { id: req.params.id } });
      const evento = await Evento.findByPk(req.params.id);
      res.json(evento);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Erro ao atualizar evento.' });
    }
  },

  async evento_delete(req, res) {
    try {
      await Evento.destroy({ where: { id: req.params.id } });
      res.json({ message: 'Evento excluído com sucesso.' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Erro ao excluir evento.' });
    }
  },
};

module.exports = eventoController;
