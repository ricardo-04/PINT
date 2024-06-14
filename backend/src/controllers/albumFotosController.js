const AlbumFotos = require('../model/albumFotos');

const albumFotosController = {
  async albumFotos_list(req, res) {
    try {
      const albuns = await AlbumFotos.findAll();
      res.json(albuns);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Erro ao listar álbuns de fotos.' });
    }
  },

  async albumFotos_detail(req, res) {
    try {
      const album = await AlbumFotos.findByPk(req.params.id);
      if (album) {
        res.json(album);
      } else {
        res.status(404).json({ message: 'Álbum de fotos não encontrado.' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Erro ao obter detalhes do álbum de fotos.' });
    }
  },

  async albumFotos_create(req, res) {
    try {
      const album = await AlbumFotos.create(req.body);
      res.json(album);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Erro ao criar álbum de fotos.' });
    }
  },

  async albumFotos_update(req, res) {
    try {
      await AlbumFotos.update(req.body, { where: { id: req.params.id } });
      const album = await AlbumFotos.findByPk(req.params.id);
      res.json(album);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Erro ao atualizar álbum de fotos.' });
    }
  },

  async albumFotos_delete(req, res) {
    try {
      await AlbumFotos.destroy({ where: { id: req.params.id } });
      res.json({ message: 'Álbum de fotos excluído com sucesso.' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Erro ao excluir álbum de fotos.' });
    }
  },
};

module.exports = albumFotosController;
