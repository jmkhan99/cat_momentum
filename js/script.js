import { timeObj, greetingObj } from "./time_greeting.js";
import { userNameObj } from "./username.js";
import { bgObj } from "./background.js";
import { toDoObj } from "./todo.js";
// import { weatherObj } from "./weather.js";

// weatherObj.getLatLong = weatherObj.getLatLong.bind(weatherObj);
// weatherObj.errorPosition = weatherObj.errorPosition.bind(weatherObj);
// navigator.geolocation.getCurrentPosition(weatherObj.getLatLong, weatherObj.errorPosition);
// fetch(weatherObj.weatherUrl)
//   .then((response) => response.json())
//   .then((data) => {
//     console.dir(data);
//     console.log(data.name);
//   });

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
} else if (userNameObj.localName) {
  console.log(userNameObj.localName);
  userNameObj.userName = userNameObj.localName;
  userNameObj.loadOther();
} else {
  userNameObj.userNameInput.focus();
}

userNameObj.nameForm.addEventListener("submit", function (event) {
  userNameObj.makeUserName = userNameObj.makeUserName.bind(userNameObj);
  userNameObj.makeUserName(event);
});

toDoObj.makeMainToDo = toDoObj.makeMainToDo.bind(toDoObj);
toDoObj.toDoQForm.addEventListener("submit", toDoObj.makeMainToDo);
toDoObj.clickClearBtn = toDoObj.clickClearBtn.bind(toDoObj);
toDoObj.clearBtn.addEventListener("click", toDoObj.clickClearBtn);
toDoObj.clickClearBtn2 = toDoObj.clickClearBtn2.bind(toDoObj);
toDoObj.clearBtn2.addEventListener("click", toDoObj.clickClearBtn2);
