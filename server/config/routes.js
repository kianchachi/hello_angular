const api = require('../controllers/controllers');

module.exports = (app) => {

    app.get("/",api.all)
    app.get("/:id", api.show)
    app.post("/create", api.create)
    app.put("/update/:id", api.update)
    app.delete("/delete/:id", api.delete)
};