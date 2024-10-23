var Slideshow_SlideNumber = 0;
var Slideshow_Speed = 6500;
var AutoStart_Slideshow = true;


window.addEventListener('load', function(){
    if (AutoStart_Slideshow == true){
        document.querySelectorAll(".Home_Latest_Item")[0].style.opacity = "100%";
        Slideshow_Start();
    }
})

function Slideshow_Start(){
    Slideshow_TotalSlides = document.querySelectorAll(".Home_Latest_Item").length;
    //document.querySelectorAll(".Home_Latest_Item")[0].style.opacity = "100%";
    Slideshow_Clear_Carousel();
    Slideshow_Change_Image(0);
    Slideshow_Control = setInterval(Slideshow_Loop, Slideshow_Speed);
    Slideshow_Clear_Carousel();
}

function Slideshow_Stop(){
    clearInterval(Slideshow_Control);
}

var Slideshow_TotalSlides;
function Slideshow_Loop(){
    Slideshow_TotalSlides = document.querySelectorAll(".Home_Latest_Item").length;
    Slideshow_Change_Image(Slideshow_SlideNumber);
}

var Slideshow_PreviousSlideNumber;

function Slideshow_Change_Image(Number){
    if (Number >= Slideshow_TotalSlides){
        Slideshow_SlideNumber = 0;
        Number = 0;
    }  

    if (Number < Slideshow_PreviousSlideNumber){
        //console.log("Ain't");
        Slideshow_Clear_Carousel();
    }

    document.querySelectorAll(".Home_Latest_Item")[Number].style.opacity = "100%";
    for (a = 0; a != document.querySelectorAll(".Home_Latest_Item").length; a++){
        document.querySelectorAll(".Home_Latest_Item")[a].setAttribute("Clickable", "false");
    }
    document.querySelectorAll(".Home_Latest_Item")[Number].setAttribute("Clickable", "true");

    for (a = 0; a != document.querySelectorAll(".Home_Latest_Carousel_Selector_Item").length; a++){
        document.querySelectorAll(".Home_Latest_Carousel_Selector_Item")[a].setAttribute('data-id', null);
        document.querySelectorAll(".Home_Latest_Carousel_Selector_Item")[a].setAttribute('data-id', null);
    }
    if (document.querySelectorAll(".Home_Latest_Carousel_Selector_Item")[Number] != null){
        document.querySelectorAll(".Home_Latest_Carousel_Selector_Item")[Number].setAttribute('data-id', 'Selected');
    }
    Slideshow_SlideNumber++;
    Slideshow_PreviousSlideNumber = Number;
    //console.log(Number);
}

function Slideshow_Clear_Carousel(){
    for (a = 0; a != Slideshow_TotalSlides; a++){
        document.querySelectorAll(".Home_Latest_Item")[a].style.opacity = "0%";
    }
}


function Home_PageData_Load(){
    const request = new XMLHttpRequest();
    request.open("GET", "Home/Index_Home.json", false);
    request.send();
    var Home_PageElements = JSON.parse(request.responseText);
    // console.log(Playlist_Data);
    // Featured List
    for(a = 0; a < 5; a++){
        // document.getElementById("Featured_" + a).style.setProperty("--Home-Featured-Image-" + a, "url(../" + Home_PageElements.Featured[a].Image + ")");
        document.getElementById("Featured_" + a).style.backgroundImage = "url(./" + Home_PageElements.Featured[a].Image + ")";
        document.getElementById("Featured_" + a).parentNode.setAttribute("href", Home_PageElements.Featured[a].Link);
        document.getElementById("Featured_" + a).querySelector(".Home_Latest_Item_Title").innerText = Home_PageElements.Featured[a].Title;
    }
    // Article List
    for(a = 0; a < 3; a++){
        document.getElementById("Article_" + a).querySelector(".Home_Articles_Item_Image_Image").src = Home_PageElements.Articles[a].Image;
        document.getElementById("Article_" + a).querySelector(".Home_Articles_Item_Title_Text").innerText = Home_PageElements.Articles[a].Title;
        document.getElementById("Article_" + a).querySelector(".Home_Articles_Item_Title_WrittenBy_Author").innerText = Home_PageElements.Articles[a].Author;
        document.getElementById("Article_" + a).setAttribute("href", "Articles/" + Home_PageElements.Articles[a].Link);
    }
    // Gallery List
    for(a = 0; a < 3; a++){
        document.getElementById("InPhotos_" + a).querySelector(".Home_InPhotos_Item_Image").style.backgroundImage = "url(./" + Home_PageElements.InPhotos[a].Image + ")";
        document.getElementById("InPhotos_" + a).querySelector(".Home_InPhotos_Item_Title_Text").innerText = Home_PageElements.InPhotos[a].Title;
        document.getElementById("InPhotos_" + a).setAttribute("href", Home_PageElements.InPhotos[a].Link);
    }
}

var Home_Section_State_2 = 0;
var Home_Section_State_3 = 0;
var Home_Section_State_4 = 0;
var Home_Section_State_5 = 0;


// document.addEventListener('DOMContentLoaded', function() {
//     var Main_Content_Container = document.querySelector(".Home");
//     Main_Content_Container.onscroll = function() {scrollFunction()};
//     function scrollFunction() {
//       var Body = document.getElementById("pageElement_Body");
//         if (Main_Content_Container.scrollTop > 110 && Main_Content_Container.scrollTop < 410) {
//             // Home_Featured
//             if (Home_Section_State_2 == 0){
//                 Home_Section_State_2 = 1;
//                 Element_Style_Animate_Batch_QuerySelector(".Curtain_2 > .Curtain_Item", "Curtain_Reveal", "0.6s", "forwards", "1", 0);
//                 Element_Style_Animate_Batch_QuerySelector(".Section_2", "Section_Reveal", "0.60s", "forwards", "1", 0);
//                 Element_Style_Animate_Batch_QuerySelector(".Home_Featured", "Section_Reveal", "0.60s", "forwards", "1", 100);
//             }
            
//         }
//         if (Main_Content_Container.scrollTop > 410 && Main_Content_Container.scrollTop < 800) {
//             // Home_Articles
//             if (Home_Section_State_3 == 0){
//                 Home_Section_State_3 = 1;
//                 Element_Style_Animate_Batch_QuerySelector(".Curtain_3 > .Curtain_Item", "Curtain_Reveal", "0.6s", "forwards", "1", 0);
//                 Element_Style_Animate_Batch_QuerySelector(".Section_3", "Section_Reveal", "0.60s", "forwards", "1", 0);
//                 Element_Style_Animate_Batch_QuerySelector(".Home_Articles", "Section_Reveal", "0.60s", "forwards", "1", 100);
//             }
            
//         }
//         if (Main_Content_Container.scrollTop > 800 && Main_Content_Container.scrollTop < 1000) {
//             // Home_InPhotos
//             if (Home_Section_State_4 == 0){
//                 Home_Section_State_4 = 1;
//                 Element_Style_Animate_Batch_QuerySelector(".Curtain_4 > .Curtain_Item", "Curtain_Reveal", "0.6s", "forwards", "1", 0);
//                 Element_Style_Animate_Batch_QuerySelector(".Section_4", "Section_Reveal", "0.60s", "forwards", "1", 0);
//                 Element_Style_Animate_Batch_QuerySelector(".Home_InPhotos", "Section_Reveal", "0.60s", "forwards", "1", 100);
//             }
            
//         }
//         if (Main_Content_Container.scrollTop > 1000) {
//             // Home_Footer
//             if (Home_Section_State_5 == 0){
//                 Home_Section_State_5 = 1;
//                 Element_Style_Animate_Batch_QuerySelector(".Curtain_5 > .Curtain_Item", "Curtain_Reveal", "0.6s", "forwards", "1", 0);
//                 Element_Style_Animate_Batch_QuerySelector(".Home_Footer", "Section_Reveal", "0.60s", "forwards", "1", 100);
//             }
//         }
//     }
// });