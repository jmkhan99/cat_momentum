import { mainTotal1 } from "./script.js";

export const toDoListObj = {
  toDoListArray: [],
  doneListArray: [],
  toDoListStart: document.querySelector(".todolist_start"),
  toDoListDone: document.querySelector(".todolist_done"),
  toDoListBtn: document.querySelector(".todolist_btn"),
  doneToDoListBtn: document.querySelector(".done_todolist_btn"),
  mainToDoListBtn: document.querySelector(".main_todolist_btn"),
  inDoneMainToDoListBtn: document.querySelector(".done__main_todolist_btn"),
  inDoneToDoListBtn: document.querySelector(".done__todolist_btn"),
  toDoListInput: document.querySelector(".todolist_input"),
  toDoListForm: document.querySelector(".todolist_form"),
  itemList: document.querySelector(".item_list"),
  doneItemList: document.querySelector(".done_item_list"),
  toDoListDisplay() {
    this.toDoListDone.classList.add("display_none");
    mainTotal1.classList.add("display_none");
    this.toDoListStart.classList.remove("display_none");
  },
  mainToDoListDisplay() {
    this.toDoListStart.classList.add("display_none");
    this.toDoListDone.classList.add("display_none");
    mainTotal1.classList.remove("display_none");
  },
  doneToDoListDisplay() {
    this.toDoListStart.classList.add("display_none");
    mainTotal1.classList.add("display_none");
    this.toDoListDone.classList.remove("display_none");
  },
  makeToDoList(event) {
    event.preventDefault();
    const id = Date.now();
    const toDoListItem = { text: this.toDoListInput.value, id: id };
    this.toDoListArray.push(toDoListItem);
    localStorage.setItem("todolist", JSON.stringify(this.toDoListArray));
    const item = document.createElement("li");
    const itemText = document.createElement("span");
    const itemClearBtn = document.createElement("button");
    const itemClearBtn2 = document.createElement("button");
    item.classList.add("item");
    item.classList.add("item_text");
    itemClearBtn.className = "item_clear_btn btn_item";
    itemClearBtn.innerText = "⬜";
    itemClearBtn.id = id;
    itemClearBtn2.className = "item_clear_btn2 btn_item";
    itemClearBtn2.innerText = "clear";
    itemClearBtn2.id = id;
    itemText.innerText = this.toDoListInput.value;
    this.itemList.appendChild(item);
    item.appendChild(itemText);
    item.appendChild(itemClearBtn);
    item.appendChild(itemClearBtn2);
    this.toDoListInput.value = "";
    this.clickButton = this.clickButton.bind(this);
    item.addEventListener("click", this.clickButton);
  },
  newToDoList(arrayItem) {
    const id = arrayItem.id;
    const item = document.createElement("li");
    const itemText = document.createElement("span");
    const itemClearBtn = document.createElement("button");
    const itemClearBtn2 = document.createElement("button");
    item.classList.add("item");
    item.classList.add("item_text");
    itemClearBtn.className = "item_clear_btn btn_item";
    itemClearBtn.innerText = "⬜";
    itemClearBtn.id = id;
    itemClearBtn2.className = "item_clear_btn2 btn_item";
    itemClearBtn2.innerText = "clear";
    itemClearBtn2.id = id;
    itemText.innerText = arrayItem.text;
    this.itemList.appendChild(item);
    item.appendChild(itemText);
    item.appendChild(itemClearBtn);
    item.appendChild(itemClearBtn2);
    this.toDoListInput.value = "";
    this.clickButton = this.clickButton.bind(this);
    item.addEventListener("click", this.clickButton);
  },
  clickButton(event) {
    if (event.target.className === "item_clear_btn btn_item") {
      this.toDoListArray = JSON.parse(localStorage.getItem("todolist"));
      this.toDoListArray = this.toDoListArray.filter(function (item) {
        console.log(item.id);
        console.log(event.target.id);
        return parseInt(item.id) !== parseInt(event.target.id);
      });
      localStorage.setItem("todolist", JSON.stringify(this.toDoListArray));
      const doneListItem = {
        text: event.target.parentNode.childNodes[0].innerText,
        id: event.target.id,
      };
      this.doneListArray.push(doneListItem);
      localStorage.setItem("donelist", JSON.stringify(this.doneListArray));
      event.target.parentNode.remove();
      const item = document.createElement("li");
      const itemText = document.createElement("span");
      const itemClearBtn = document.createElement("button");
      const itemClearBtn2 = document.createElement("button");
      item.classList.add("item");
      item.classList.add("item_text");
      itemClearBtn.className = "item_clear_btn btn_item";
      itemClearBtn.innerText = "✅";
      itemClearBtn.id = doneListItem.id;
      itemClearBtn2.className = "item_clear_btn2 btn_item";
      itemClearBtn2.innerText = "clear";
      itemClearBtn2.id = doneListItem.id;
      itemText.innerText = doneListItem.text;
      this.doneItemList.appendChild(item);
      item.appendChild(itemText);
      item.appendChild(itemClearBtn);
      item.appendChild(itemClearBtn2);
      this.doneClickButton = this.doneClickButton.bind(this);
      item.addEventListener("click", this.doneClickButton);
    } else if (event.target.className === "item_clear_btn2 btn_item") {
      this.toDoListArray = JSON.parse(localStorage.getItem("todolist"));
      this.toDoListArray = this.toDoListArray.filter(function (item) {
        return parseInt(item.id) !== parseInt(event.target.id);
      });
      localStorage.setItem("todolist", JSON.stringify(this.toDoListArray));
      event.target.parentNode.remove();
    }
  },
  doneClickButton(event) {
    if (event.target.className === "item_clear_btn btn_item") {
        console.log('done click')
      this.doneListArray = JSON.parse(localStorage.getItem("donelist"));
      this.doneListArray = this.doneListArray.filter(function (item) {
        return item.id !== event.target.id;
      });
      console.log(this.doneListArray);
      localStorage.setItem("donelist", JSON.stringify(this.doneListArray));
      event.target.parentNode.remove();
      const toDoListItem = {
        text: event.target.parentNode.childNodes[0].innerText,
        id: event.target.id,
      };
      console.log(this.toDoListArray)
      this.toDoListArray.push(toDoListItem);
      localStorage.setItem("todolist", JSON.stringify(this.toDoListArray));
      const item = document.createElement("li");
      const itemText = document.createElement("span");
      const itemClearBtn = document.createElement("button");
      const itemClearBtn2 = document.createElement("button");
      item.classList.add("item");
      item.classList.add("item_text");
      itemClearBtn.className = "item_clear_btn btn_item";
      itemClearBtn.innerText = "⬜";
      itemClearBtn.id = toDoListItem.id;
      itemClearBtn2.className = "item_clear_btn2 btn_item";
      itemClearBtn2.innerText = "clear";
      itemClearBtn2.id = toDoListItem.id;
      itemText.innerText = toDoListItem.text;
      this.itemList.appendChild(item);
      item.appendChild(itemText);
      item.appendChild(itemClearBtn);
      item.appendChild(itemClearBtn2);
      item.addEventListener("click", this.clickButton);
    } else if (event.target.className === "item_clear_btn2 btn_item") {
      console.log("click2");
      this.doneListArray = JSON.parse(localStorage.getItem("donelist"));
      this.doneListArray = this.doneListArray.filter(function (item) {
        return parseInt(item.id) !== parseInt(event.target.id);
      });
      localStorage.setItem("donelist", JSON.stringify(this.doneListArray));
      event.target.parentNode.remove();
    }
  },
  newDoneList(arrayItem) {
    const id = arrayItem.id;
    const item = document.createElement("li");
    const itemText = document.createElement("span");
    const itemClearBtn = document.createElement("button");
    const itemClearBtn2 = document.createElement("button");
    item.classList.add("item");
    item.classList.add("item_text");
    itemClearBtn.className = "item_clear_btn btn_item";
    itemClearBtn.innerText = "✅";
    itemClearBtn.id = id;
    itemClearBtn2.className = "item_clear_btn2 btn_item";
    itemClearBtn2.innerText = "clear";
    itemClearBtn2.id = id;
    itemText.innerText = arrayItem.text;
    this.doneItemList.appendChild(item);
    item.appendChild(itemText);
    item.appendChild(itemClearBtn);
    item.appendChild(itemClearBtn2);
    this.doneClickButton = this.doneClickButton.bind(this)
    item.addEventListener("click", this.doneClickButton);
  },
};
