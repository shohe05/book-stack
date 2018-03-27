const fs = require('fs');

const BOOK_STATUS_TODO = 0;
const BOOK_STATUS_DONE = 1;
const DATA_FILE = "./data.json";

const items = require(DATA_FILE);
let nextId = items.length + 1;


function addItem(title) {
  const item = {
    "id": nextId,
    "title": title,
    "status": BOOK_STATUS_TODO
  };

  items.push(item);
  ++nextId;
  _save(items);
}

function doneItem(id) {
  for(i=0; i<items.length; i++) {
    if (items[i].id == id) {
      items[i].status = BOOK_STATUS_DONE;
    }
  }

  _save(items);
}

function getAllItems() {
  return items.filter( (item) => {
    return item.status == BOOK_STATUS_TODO;
  });
}

function _save(items) {
  fs.writeFile(DATA_FILE, JSON.stringify(items, null, '    '));
}

console.log(getAllItems());
