const fs = require('fs');

const BOOK_STATUS_TODO = 0;
const BOOK_STATUS_DONE = 1;
const DATA_FILE = "./data.json";

class Repository {
  constructor() {
    this.items = require(DATA_FILE);
    this.nextId = this.items.length + 1;
  }
  
  addItem(title) {
    const item = {
      "id": this.nextId,
      "title": title,
      "status": BOOK_STATUS_TODO
    };
  
    this.items.push(item);
    ++this.nextId;
    _save();
  }
  
  doneItem(id) {
    for(i=0; i<this.items.length; i++) {
      if (this.items[i].id == id) {
        this.items[i].status = BOOK_STATUS_DONE;
      }
    }
  
    _save();
  }
  
  getAllItems() {
    return this.items.filter((item) => {
      return item.status == BOOK_STATUS_TODO;
    });
  }
  
  _save() {
    fs.writeFile(DATA_FILE, JSON.stringify(this.items, null, '    '));
  }
}

module.exports = new Repository();