/*
	UI
*/

function Load_Template(templateId) {
  fetch("ES_Template_4.html")
    .then((response) => response.text())
    .then((template) => {
      const templateElement = document.createElement("div");
      templateElement.innerHTML = template;
      const templateContent = templateElement
        .querySelector(`#${templateId}`)
        .content.cloneNode(true);
      const bodyElement = document.getElementById("pageElement_Body");
      bodyElement.appendChild(templateContent);
    })
    .catch((error) => console.log(error));
}

var UI_Sidebar_isOpen = false;
function toggle_Sidebar() {
  var UI_Sidebar = document.getElementById("pageElement_Sidebar");
  if (UI_Sidebar_isOpen == false) {
    UI_Sidebar.style.transform = "translateX(0px)";
    UI_Sidebar_isOpen = true;
  } else {
    UI_Sidebar.style.transform = "translateX(-100%)";
    UI_Sidebar_isOpen = false;
  }
}

function scrollToPosition(direction) {
  if (direction == "bottom") {
    document
      .getElementById("pageElement_Content")
      .scrollTo(0, document.getElementById("pageElement_Content").scrollHeight);
  } else if (direction == "top") {
    document.getElementById("pageElement_Content").scrollTop = 0;
  }
}

function copyURLLink() {
  // Get the current URL
  const currentUrl = window.location.href;

  // Create a temporary input element to hold the URL
  const tempInput = document.createElement("input");

  // Set the input value to the current URL
  tempInput.value = currentUrl;

  // Append the input element to the DOM
  document.body.appendChild(tempInput);

  // Select the input element's contents
  tempInput.select();

  // Copy the selected contents to the clipboard
  document.execCommand("copy");

  // Remove the input element from the DOM
  document.body.removeChild(tempInput);

  toast_Popup_Animate("Header_Toast_Share_Link");
}

function toast_Popup_Animate(toast_ID){
  var toast_Element = document.getElementById(toast_ID);
  toast_Element.style.animationName = "toast_Popup_Open";
	toast_Element.style.animationDuration = "0.3s";
	toast_Element.style.animationFillMode = "forwards";
  setTimeout( function() {
    toast_Element.style.animationName = "toast_Popup_Close";
    toast_Element.style.animationDuration = "0.3s";
    toast_Element.style.animationFillMode = "forwards";
  }, 3000);
}