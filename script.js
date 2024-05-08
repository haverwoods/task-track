const inputbox = document.getElementById("input-box");
const listcontainer = document.getElementById("list-container");

//add task , add  remove button and cuurent time
function addtask() {
  if (inputbox.value === "") {
    alert("you need to add task");
  } else {
    let li = document.createElement("li");
    let currentDate = new Date();
    let options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    };
    let dateTimeString = " - " + currentDate.toLocaleString("en-US", options);

    let div = document.createElement("div");
    div.innerText = inputbox.value;
    li.appendChild(div);

    let dateDiv = document.createElement("div");
    dateDiv.innerText = dateTimeString;
    li.appendChild(dateDiv);

    listcontainer.appendChild(li);

    let span = document.createElement("span");
    let img = document.createElement("img");
    img.src = "icons/icons8-delete-24.png";
    span.appendChild(img);
    li.appendChild(span);
  }
  inputbox.value = "";
  savedata();
}
//use enter key to add event
inputbox.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    addtask();
  }
});

//to check the task or remove them
listcontainer.addEventListener("click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("check");
      savedata();
    } else if (e.target.tagName === "IMG") {
      e.target.parentElement.parentElement.remove();
      savedata();
    }
  },
  false
);
// save data on local storage on browser
function savedata() {
  localStorage.setItem("data", listcontainer.innerHTML);
}

function showtask() {
  if (localStorage.getItem("data")) {
    listcontainer.innerHTML = localStorage.getItem("data");
  }
}

window.addEventListener("beforeunload", savedata);
showtask();

//settime
