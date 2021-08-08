import { timeObj, greetingObj } from "./time_greeting.js";
import { userNameObj } from "./username.js";
import { bgObj } from "./background.js";
import { toDoObj } from "./todo.js";
import { toDoListObj } from "./todolist.js";
import { weatherObj } from "./weather.js";

export const mainTotal1 = document.querySelector(".main_total1");

weatherObj.getWeather = weatherObj.getWeather.bind(weatherObj);
navigator.geolocation.getCurrentPosition(weatherObj.getWeather, weatherObj.errWeather)

bgObj.changeBg();
timeObj.firstSetClock();
timeObj.clock();
greetingObj.greetingChange();
userNameObj.localName = localStorage.getItem("username");
toDoObj.localMainToDo = localStorage.getItem("maintodo");
if (JSON.parse(localStorage.getItem("todolist"))) {
  toDoListObj.toDoListArray = JSON.parse(localStorage.getItem("todolist"));
  if (toDoListObj.toDoListArray) {
    toDoListObj.newToDoList = toDoListObj.newToDoList.bind(toDoListObj);
    toDoListObj.toDoListArray.forEach(toDoListObj.newToDoList);
  }
}
if (JSON.parse(localStorage.getItem("donelist"))) {
  toDoListObj.doneListArray = JSON.parse(localStorage.getItem("donelist"));
  if (toDoListObj.doneListArray) {
    toDoListObj.newDoneList = toDoListObj.newDoneList.bind(toDoListObj);
    toDoListObj.doneListArray.forEach(toDoListObj.newDoneList);
  }
}

if (toDoObj.localMainToDo) {
  console.log(userNameObj.localMainToDo);
  userNameObj.userName = userNameObj.localName;
  userNameObj.loadOther();
  toDoObj.oneMainToDo = toDoObj.localMainToDo;
  toDoObj.displayMainToDo();
  toDoObj.checkTodo();
} else if (userNameObj.localName) {
  console.log(userNameObj.localName);
  userNameObj.userName = userNameObj.localName;
  userNameObj.loadOther();
}

document.body.addEventListener("click", function (event) {
  if (event.target === greetingObj.greetingName) {
    userNameObj.editName = userNameObj.editName.bind(userNameObj);
    userNameObj.editName();
    return;
  }
  if (event.target === toDoObj.clearBtn) {
    toDoObj.clickClearBtn = toDoObj.clickClearBtn.bind(toDoObj);
    toDoObj.clickClearBtn();
    return;
  }
  if (event.target === toDoObj.clearBtn2) {
    toDoObj.clickClearBtn2 = toDoObj.clickClearBtn2.bind(toDoObj);
    toDoObj.clickClearBtn2();
    return;
  }
  if (
    event.target === toDoListObj.toDoListBtn ||
    event.target === toDoListObj.inDoneToDoListBtn
  ) {
    toDoListObj.toDoListDisplay = toDoListObj.toDoListDisplay.bind(toDoListObj);
    toDoListObj.toDoListDisplay();
    return;
  }
  if (
    event.target === toDoListObj.mainToDoListBtn ||
    event.target === toDoListObj.inDoneMainToDoListBtn
  ) {
    console.log("main click");
    toDoListObj.mainToDoListDisplay =
      toDoListObj.mainToDoListDisplay.bind(toDoListObj);
    toDoListObj.mainToDoListDisplay();
    return;
  }
  if (event.target === toDoListObj.doneToDoListBtn) {
    toDoListObj.doneToDoListDisplay =
      toDoListObj.doneToDoListDisplay.bind(toDoListObj);
    toDoListObj.doneToDoListDisplay();
    return;
  }
});

toDoObj.makeMainToDo = toDoObj.makeMainToDo.bind(toDoObj);
toDoObj.toDoQForm.addEventListener("submit", toDoObj.makeMainToDo);

userNameObj.nameForm.addEventListener("submit", function (event) {
  userNameObj.makeUserName = userNameObj.makeUserName.bind(userNameObj);
  userNameObj.makeUserName(event);
});

toDoListObj.makeToDoList = toDoListObj.makeToDoList.bind(toDoListObj);
toDoListObj.toDoListForm.addEventListener("submit", toDoListObj.makeToDoList);
