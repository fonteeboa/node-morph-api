module.exports = {
  async getAll(req, res) {
    try {
      const data = await req.model.findAll();
      const cleanData = data.map((item) => item.get({ plain: true }));
      console.log(cleanData);
      res.status(200).json(cleanData);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async getOne(req, res) {
    try {
      const data = await req.model.findByPk(req.params.id);
      if (!data) return res.status(404).json({ error: "common.data.not.found" });

      res.status(200).json(data.get({ plain: true }));
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async create(req, res) {
    try {
      const data = await req.model.create(req.body);
      res.status(201).json(data);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  async update(req, res) {
    try {
      const data = await req.model.findByPk(req.params.id);
      if (!data) return res.status(404).json({ error: "common.data.not.found" });

      await data.update(req.body);
      res.status(200).json(data);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  async delete(req, res) {
    try {
      const data = await req.model.findByPk(req.params.id);
      if (!data) return res.status(404).json({ error: "common.data.not.found" });

      await data.destroy();
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};
