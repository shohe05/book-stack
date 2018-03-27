const repo = require("./repository");
const Presenter = require("./presenter");

const presenter = new Presenter(repo);
console.log(presenter.list());