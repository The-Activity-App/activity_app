const search = (req, res) => {
    const { ToDo } = req;
    const items = ToDo.list();
    res.send(items);
  };
  
  module.exports = getTodosController;