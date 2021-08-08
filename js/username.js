import { greetingObj } from "./time_greeting.js";
import { toDoObj } from "./todo.js";

export const userNameObj = {
  nameForm: document.querySelector(".name_form"),
  userNameInput: document.querySelector(".user_name_input"),
  userNameText: document.querySelector(".user_name"),
  userName: "",
  localName: "",
  makeUserName(event) {
    event.preventDefault();
    this.saveUserName();
    this.loadOther();
  },
  saveUserName() {
    this.userName = this.userNameInput.value;
    console.log(this.userName);
    localStorage.setItem("username", this.userName);
  },
  loadOther() {
    this.nameForm.classList.add("display_none");
    greetingObj.greetingBox.classList.remove("display_none");
    greetingObj.greetingName.innerText = this.userName;
    if (toDoObj.oneMainToDo) {
      toDoObj.displayMainToDo();
    } else {
      toDoObj.toDoQForm.classList.remove("display_none");
      toDoObj.mainToDoInput.focus();
    }
  },
  editName() {
    if (toDoObj.oneMainToDo) {
      greetingObj.greetingBox.classList.add("display_none");
      this.editInputReady();
    } else {
      greetingObj.greetingBox.classList.add("display_none");
      this.editInputReady();
    }
  },
  editInputReady() {
    this.nameForm.classList.remove("display_none");
    this.userNameInput.value = this.userName;
    this.userNameInput.focus();
  },
};
