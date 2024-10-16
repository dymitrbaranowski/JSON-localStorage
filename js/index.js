let data = localStorage.getItem("msgList");
let msgList = [];

if (data !== "" && data !== null) {
  msgList = JSON.parse(data);
}

function createNewMsg(obj) {
  const itemMsg = document.createElement("li");
  itemMsg.classList.add("list-group-item");

  const itemTitle = document.createElement("h2");
  itemTitle.textContent = obj.name;

  const itemText = document.createElement("p");
  itemText.classList.add("lead");
  itemText.textContent = obj.msg;

  itemMsg.append(itemTitle);
  itemMsg.append(itemText);

  document.getElementById("msg-list").append(itemMsg);
}

for (const msg of msgList) {
  createNewMsg(msg);
}

document
  .getElementById("add-msg-for")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    let userName = document.getElementById("name-inp").value;
    let msg = document.getElementById("msg-inp").value;

    let msgObj = {
      name: userName,
      msg: msg,
    };

    msgList.push(msgObj);

    msgList.push(msgObj);

    localStorage.setItem("msgList", JSON.stringify(msgList));

    createNewMsg(msgObj);

    document.getElementById("msg-inp").value = "";
  });

// localStorage.setItem("name", "Илья");
// localStorage.setItem("age", 12);
// localStorage.setItem("data", JSON.stringify({ name: "e213" }));
// console.log(localStorage.getItem("name"));
// console.log(localStorage.getItem("age"));
// console.log(JSON.parse(localStorage.getItem("data")));
