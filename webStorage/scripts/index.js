"use strict";

const userName = document.getElementById("userName");
const studentRadio = document.getElementById("student");
const instructorRadio = document.getElementById("instructor");
const enterBtn = document.getElementById("enter");

enterBtn.onclick = handleUserEntry;

function handleUserEntry() {
  const userIdent = userName.value;

  if (!userIdent) {
    console.log("Please enter your name");
    return;
  }

  sessionStorage.setItem("Name", userIdent);
  const role = studentRadio.checked ? "Student" : "Instructor";
  sessionStorage.setItem("Role", role);

  location.href = "./info.html";
}