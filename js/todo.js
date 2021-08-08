export const toDoObj = {
  toDoQForm: document.querySelector(".todo_q_form"),
  mainToDoInput: document.querySelector(".main_todo_input"),
  mainToDo: document.querySelector(".main_todo"),
  mainToDoBox: document.querySelector(".main_todo_box"),
  clearBtn: document.querySelector(".main_todo_clear_btn"),
  clearBtn2: document.querySelector(".main_todo_clear_btn2"),
  oneMainToDo: "",
  localMainToDo: "",
  makeMainToDo(event) {
    event.preventDefault();
    this.oneMainToDo = this.mainToDoInput.value;
    console.log(this.oneMainToDo);
    localStorage.setItem("maintodo", this.oneMainToDo);
    console.log(this.localMainToDo);
    if (this.oneMainToDo === "") {
      return;
    } else {
      this.displayMainToDo();
    }
  },
  displayMainToDo() {
    console.log("displaytodo");
    this.mainToDo.innerText = `Today : ${this.oneMainToDo}`;
    this.toDoQForm.classList.add("display_none");
    this.mainToDoBox.classList.remove("display_none");
    this.editMainToDo = this.editMainToDo.bind(this);
    this.mainToDo.addEventListener("click", this.editMainToDo);
  },
  editMainToDo() {
    this.mainToDoInput.value = this.oneMainToDo;
    this.mainToDoInput.focus();
    this.toDoQForm.classList.remove("display_none");
    this.mainToDoBox.classList.add("display_none");
    console.log("edit");
  },
  checkBlank() {
    if (!this.oneMainToDo) {
      console.log("empty");
      this.toDoQForm.classList.add("display_none");
      this.mainToDoBox.classList.remove("display_none");
    } else {
      return;
    }
  },
  clickClearBtn() {
    console.log("click");
    if (this.clearBtn.innerText === "⬜") {
      this.clearBtn.innerText = "✅";
      this.mainToDo.style.textDecoration = "3px solid line-through";
    } else {
      this.clearBtn.innerText = "⬜";
      this.mainToDo.style.textDecoration = "";
    }
  },
  clickClearBtn2() {
    console.log("click2");
    this.mainToDoInput.value = "";
    this.mainToDoBox.classList.add("display_none");
    this.toDoQForm.classList.remove("display_none");
    this.mainToDoInput.focus();
    localStorage.removeItem("maintodo");
    this.localMainToDo = localStorage.getItem("maintodo");
    this.oneMainToDo = "";
    this.clearBtn.innerText = "⬜";
    this.mainToDo.style.textDecoration = "";
  },
};
