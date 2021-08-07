import { timeObj, greetingObj } from "./time_greeting.js";
import { userNameObj } from "./username.js";
import { bgObj } from "./background.js";
import { toDoObj } from "./todo.js";

bgObj.changeBg();
timeObj.firstSetClock();
timeObj.clock();
greetingObj.greetingChange();
greetingObj.greetingName.addEventListener("click", function () {
  userNameObj.editName = userNameObj.editName.bind(userNameObj);
  userNameObj.editName();
});

userNameObj.localName = localStorage.getItem("username");
toDoObj.localMainToDo = localStorage.getItem("maintodo");

if (toDoObj.localMainToDo) {
  console.log(userNameObj.localMainToDo);
  userNameObj.userName = userNameObj.localName;
  userNameObj.loadOther();
  toDoObj.oneMainToDo = toDoObj.localMainToDo;
  toDoObj.displayMainToDo();
}else if (userNameObj.localName) {
  console.log(userNameObj.localName);
  userNameObj.userName = userNameObj.localName;
  userNameObj.loadOther();
} else {
  userNameObj.userNameInput.focus();
  userNameObj.nameForm.addEventListener("submit", function (event) {
    userNameObj.makeUserName = userNameObj.makeUserName.bind(userNameObj);
    userNameObj.makeUserName(event);
  });
}

toDoObj.makeMainToDo = toDoObj.makeMainToDo.bind(toDoObj);
toDoObj.toDoQForm.addEventListener("submit", toDoObj.makeMainToDo);
