class Presenter {
  constructor(repo) {
    this.repo = repo;
  }

  add(title) {
    this.repo.addItem(title);
    return this.repo.list();
  }
  
  done(id) {
    this.repo.doneItem(id);
    return repo.list();
  }
  
  list() {
    return this.repo.getAllItems().map((item) => {
      return "- [] " + item.id + "." + item.title;
    }).join("\n");
  }
}

module.exports = Presenter;