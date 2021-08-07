export const timeObj = {
  timeTextHours: document.querySelector(".time_text_hours"),
  timeTextMinutes: document.querySelector(".time_text_minutes"),
  todayDate: "",
  todayHours: "",
  todayMinutes: "",
  firstSetClock() {
    this.clockTime();
  },
  clock() {
    this.clockTime = this.clockTime.bind(this);
    setInterval(this.clockTime, 1000);
  },
  clockTime() {
    this.todayDate = new Date();
    this.todayHours = this.todayDate.getHours();
    this.todayMinutes = this.todayDate.getMinutes();
    this.clockDisplayHours();
    this.clockDisplayMinutes();
  },
  clockDisplayHours() {
    if (this.todayHours < 10) {
      this.timeTextHours.innerText = "0" + this.todayHours;
    } else {
      this.timeTextHours.innerText = this.todayHours;
    }
  },
  clockDisplayMinutes() {
    if (this.todayMinutes < 10) {
      this.timeTextMinutes.innerText = "0" + this.todayMinutes;
    } else {
      this.timeTextMinutes.innerText = this.todayMinutes;
    }
  },
};

export const greetingObj = {
  greetingBox: document.querySelector(".greeting_box"),
  greeting: document.querySelector(".greeting_text"),
  greetingName: document.querySelector(".user_name"),
  delIcon: document.querySelector(".del_icon"),
  greetingChange() {
    if (timeObj.timeTextHours.innerText >= 17) {
      greetingObj.greeting.innerText = "Good evening";
    } else if (timeObj.timeTextHours.innerText < 12) {
      greetingObj.greeting.innerText = "Good Morning";
    } else if (timeObj.timeTextHours.innerText >= 12) {
      greetingObj.greeting.innerText = "Good afternoon";
    }
  },
};
