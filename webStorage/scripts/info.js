"use strict"


window.onload = () => {
    setupPage();
}

function setupPage() {
    const welcomeMsgEl = document.getElementById("welcomeMsg");
    const role = sessionStorage.getItem("Role");
    const textPEl = document.getElementById("textP");
    const returnBtn = document.getElementById("return");
  
    welcomeMsgEl.textContent = `${role} ${sessionStorage.getItem("Name")}`;
    if (role === "Student") textPEl.style.color = "blue";
    else textPEl.style.color = "purple";
    returnBtn.onclick = redirection;
  }
  
  function redirection() {
    location.href = "./index.html";
  }


  