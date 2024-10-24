/*
	UI
*/

var fullPath = window.location.href;
var PageName = fullPath.split("/").pop();
console.log(PageName);

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

      if (bodyElement.getAttribute("Access_Restrict") == "true"){
        Access_Restrict();
      }
      if (bodyElement.getAttribute("Branch_BackToParent") == "true"){
        Branch_BackToParent_AddButton(bodyElement.getAttribute("Branch_BackToParent_URL"));
      }
      if (bodyElement.getAttribute("ShortenedLinks_HasShortenedLink") == "true"){
        ShortenedLinks_GetShortenedLink(PageName);
      }
      if (bodyElement.getAttribute("Header_HasCustomHeaderTitle") == "true"){
        Header_Change_HeaderTitle(bodyElement.getAttribute("Header_CustomHeaderTitle"));
      }
      if (bodyElement.getAttribute("Header_ChangeTitles") == "true"){
        if (bodyElement.getAttribute("Header_ChangeTitles_AltPage_Title") != null){
          document.getElementById("UI_Header_Title_Text_AltPage").innerHTML =bodyElement.getAttribute("Header_ChangeTitles_AltPage_Title");
          if (bodyElement.getAttribute("Header_ChangeTitles_AltPage_URL") != null){
            if (bodyElement.getAttribute("Header_ChangeTitles_AltPage_URL") == "Top") {
              document.getElementById("UI_Header_Title_AltPage").removeAttribute("href");
              document.getElementById("UI_Header_Title_AltPage").setAttribute("onclick", "Scroll_ToPosition('top')");
            } else {
              document.getElementById("UI_Header_Title_AltPage").setAttribute("href", bodyElement.getAttribute("Header_ChangeTitles_AltPage_URL"));
            }
            
          } else {
            document.getElementById("UI_Header_Title_AltPage").removeAttribute("href");
            document.getElementById("UI_Header_Title_AltPage").setAttribute("onclick", "Scroll_ToPosition('top')");
          }
        } else {
          bodyElement.setAttribute("Header_ChangeTitles", false);
        }
      } else {
        bodyElement.setAttribute("Header_ChangeTitles", false);
      }
    })
    .catch((error) => console.log(error));
}

function Load_Template_Footer(templateId) {
  fetch("ES_Template_4.html")
    .then((response) => response.text())
    .then((template) => {
      const templateElement = document.createElement("div");
      templateElement.innerHTML = template;
      const templateContent = templateElement
        .querySelector(`#${templateId}`)
        .content.cloneNode(true);
      const bodyElement = document.getElementById("pageElement_Footer");
      bodyElement.appendChild(templateContent);

      
    })
    .catch((error) => console.log(error));
}


function toggle_Sidebar() {
  var UI_Sidebar_State = document.getElementById("pageElement_Sidebar").getAttribute("State");
  if (UI_Sidebar_State == "Collapsed") {
    document.getElementById("pageElement_Sidebar").setAttribute("State", "Expanded");
    document.querySelector(".UI_Sidebar_Background").setAttribute("State", "Expanded");
  } else {
    document.getElementById("pageElement_Sidebar").setAttribute("State", "Collapsed");
    document.querySelector(".UI_Sidebar_Background").setAttribute("State", "Collapsed");
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

var CopyURL = window.location.href;

function copyURLLink() {
  // Get the current URL
  const currentUrl = CopyURL;

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
  if (CopyURL != window.location.href){
    document.getElementById("Header_Toast_Share_Link_Text").innerHTML = "Link copied as " + CopyURL + "!";
  }
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

function Subwindows_Open(ID){
  document.getElementById("pageElement_Subwindows").style.opacity = "100%";
  document.getElementById("pageElement_Subwindows").style.display = "flex";
  document.getElementById("pageElement_Subwindows").style.opacity = "100%";
  var subwindowElement = document.getElementById("subwindow_"+ID);
  subwindowElement.style.display = "block";
  subwindowElement.style.animationFillMode = "forwards";
  subwindowElement.style.animationName = "opening_Subwindow";
  subwindowElement.style.animationDuration = "0.3s";
  subwindow_activeSubwindow = ID;
  if (ID == "ImageView"){
    subwindowElement.style.display = "grid";
  }
}

function Subwindows_Close(ID){
  var subwindowElement = document.getElementById("subwindow_" + ID);
  subwindowElement.style.animationName = "closing_Subwindow";
  subwindowElement.style.animationDuration = "0.3s";
  subwindowElement.style.animationFillMode = "forwards";

  setTimeout(function() {
    subwindowElement.style.opacity = "0";
  }, 0);

  setTimeout(function() {
    subwindowElement.style.display = "none";
    document.getElementById("pageElement_Subwindows").style.display = "none";
  }, 300);

  subwindow_activeSubwindow = "none";
}

function Scroll_ToPosition(direction) {
  // const mainContentContainers = document.querySelectorAll(".Main_Content_Container");
  var Main_Content_Container;
  if (document.querySelector(".Main_Content_Container") != null){
    Main_Content_Container = document.querySelectorAll(".Main_Content_Container");
  } else if (document.querySelector(".Page_Main_Content") != null){
    Main_Content_Container = document.querySelectorAll(".Page_Main_Content");
  }

  if (direction === "top") {
      console.log("Bottom");
      Main_Content_Container.forEach(container => {
          container.scrollTo({
              top: 0,
              behavior: 'smooth'
          });
      });
  } else if (direction === "bottom") {
      console.log("Top");
      Main_Content_Container.forEach(container => {
          container.scrollTo({
              top: container.scrollHeight,
              behavior: 'smooth'
          });
      });
  }
}


function Header_Hide(){
  document.getElementById("pageElement_Header").style.transform = "translateY(-50px)";
  document.querySelector(".Main_Content_Container").style.marginTop = "0px";
  document.querySelector(".Main_Content_Container").style.height = "100%";

  if (document.querySelector(".Main_Subwindows_Container") != null){
    document.querySelector(".Main_Subwindows_Container").style.marginTop = "0px"
    document.querySelector(".Main_Subwindows_Container").style.height = "100%"
  }
}

function Header_Show(){
  document.getElementById("pageElement_Header").style.transform = "translateY(0px)";
  document.querySelector(".Main_Content_Container").style.marginTop = "50px";
  document.querySelector(".Main_Content_Container").style.height = "calc(100% - 50px)";

  if (document.querySelector(".Main_Subwindows_Container") != null){
    document.querySelector(".Main_Subwindows_Container").style.marginTop = "50px"
    document.querySelector(".Main_Subwindows_Container").style.height = "calc(100% - 50px)"
  }
}

function Access_Restrict(){
  document.getElementById("pageElement_Sidebar").style.display = "none";
  document.getElementById("pageElement_Header").querySelector(".UI_Header_Hamburger").style.display = "none";
  document.getElementById("pageElement_Header").querySelector(".UI_Header_Title").style.justifyContent = "left";
  document.getElementById("pageElement_Header").style.gridTemplateColumns = "1fr 50px";
}

function Branch_BackToParent_AddButton(ParentURL){
  document.getElementById("UI_Header_Branch_BackToParent").style.display = "grid";
  document.getElementById("Branch_BackToParent_Anchor").setAttribute("href", ParentURL);
}

function ShortenedLinks_GetShortenedLink(PageName){
  const request = new XMLHttpRequest();
  request.open("GET", "Assets/ShortenedLinks.json", false);
  request.send();
  var messages = request.responseText;
  // console.log(messages);
  var File_Data = JSON.parse(messages);
  for (a = 0; a < File_Data.length; a++){
    if (File_Data[a].Link_Original == PageName){
      CopyURL = File_Data[a].Link_Substitute;
      break;
    }
  }
}

function Header_Change_HeaderTitle(Title){
  Header_CustomHeaderTitle = Title;
  document.getElementById("UI_Header_Title_Text").innerText = Header_CustomHeaderTitle;
}


document.addEventListener('DOMContentLoaded', function() {
  var Main_Content_Container;
  if (document.querySelector(".Main_Content_Container") != null){
    Main_Content_Container = document.querySelector(".Main_Content_Container");
  } else if (document.querySelector(".Page_Main_Content") != null){
    Main_Content_Container = document.querySelector(".Page_Main_Content");
  }
   
  Main_Content_Container.onscroll = function() {scrollFunction()};
  function scrollFunction() {
    var Header_Title = document.getElementById("UI_Header_Title");
    var Body = document.getElementById("pageElement_Body");
    if (Body.getAttribute("Header_ChangeTitles") == "true"){
      if (Main_Content_Container.scrollTop > 100) {
        Header_Title.setAttribute("ActiveTitle", "AltPage");
      } else {
        Header_Title.setAttribute("ActiveTitle", "Home");
      }
    } else {
      Header_Title.setAttribute("ActiveTitle", "Home");
    }
    
  }
});


document.addEventListener('DOMContentLoaded', function() {
  if (document.querySelectorAll('.Article_Main_Content_Container img') != null){
    const Images = document.querySelectorAll('.Article_Main_Content_Container img');
    Images.forEach(img => {
        img.setAttribute("Cursor", "Pointer");
        if (img.getAttribute("AltSRC") != null){
          img.addEventListener('click', function() {
            Open_Image(img.getAttribute("AltSRC"));
          });
        } else {
          img.addEventListener('click', function() {
            Open_Image(this.src);
          });
        }
        
    });
  }
  
});

function Open_Image(URL){
  Header_Hide();
  document.getElementById("UI_ImagePreview_Image").setAttribute("Status", "Unloaded");
  document.getElementById("UI_ImagePreview_Image").src = "Assets/Images/Placeholder.png";
  document.getElementById("UI_ImagePreview").setAttribute("State", "Active");
  document.getElementById("UI_ImagePreview_Image").src = URL;
  document.getElementById("UI_ImagePreview_Image").setAttribute("onclick", "window.open('" + URL + "', '_blank')");
}

function Close_ImagePreview(){
  Header_Show();
  document.getElementById("UI_ImagePreview_Image").setAttribute("Status", "Unloaded");
  document.getElementById("UI_ImagePreview").setAttribute("State", "Inactive");
}