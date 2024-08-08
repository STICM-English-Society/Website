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

let Home_PageElements = {
    Featured: [
        {
            Name: "Featured_1",
            Image: "Assets/Images/Home/Featured/SF24.png",
            Title: "Playlist: Sports Fest 2024 Cheerdance Competition | All Performances",
            Link: "https://www.youtube.com/playlist?list=PL_jOJQLXJOrJxLKWkjjd-evoTsAZ2oEgk"
        },
        {
            Name: "Featured_2",
            Image: "Assets/Images/Articles/ESA_DTR23/ESA_DTR23_7.png",
            Title: "A December to Remember",
            Link: "Articles/ES_Article_Renderer.html?article=ESA_DTR23"
        },
        {
            Name: "Featured_3",
            Image: "Assets/Images/Generic_Cogs.png",
            Title: "Join English Society now!",
            Link: "ES_Register.html"
        },
        {
            Name: "Featured_4",
            Image: "Assets/Images/Home/Featured/SF24_2.jpg",
            Title: "In Photos: STI Marikina Sports Fest 2024 | Recreational Games",
            Link: "https://www.facebook.com/share/p/iXKhJDApBiRi4QQb/"
        },
        {
            Name: "Featured_5",
            Image: "Assets/Images/Articles/ESA_DTR23/ESA_DTR23_11.png",
            Title: "In Photos: STI Marikina Year-End Event 2023",
            Link: "https://www.facebook.com/share/p/uo7LXzPDrBUjZg7r/"
        }
    ],
    Articles: [
        {
            Name: "Article_1",
            Image: "Assets/Images/Articles/ESA_STIMTS23/ESA_STIMTS23_1.png",
            Title: "STI College Marikina Talent Search 2023",
            Author: "Adriene Dillo & Trisha Bravo",
            Link: "Articles/ES_Article_Renderer.html?article=ESA_STIMTS23"
        },
        {
            Name: "Article_2",
            Image: "Assets/Images/Articles/ESA_POC23/ESA_POC23_1.png",
            Title: "Parade of Characters 2023",
            Author: "Adriene Dillo & Trisha Bravo",
            Link: "Articles/ES_Article_Renderer.html?article=ESA_POC23"
        },
        {
            Name: "Article_3",
            Image: "Assets/Images/Articles/ESA_DTR23/ESA_DTR23_15.png",
            Title: "Year-End Events 2023",
            Author: "Elmer Felisilda",
            Link: "Articles/ES_Article_Renderer.html?article=ESA_DTR23"
        },
    ],
    InPhotos: [
        {
            Name: "InPhotos_1",
            Image: "Assets/Images/Home/Featured/TNTS24.jpg",
            Title: "Codefest 2024",
            Link: "https://www.facebook.com/STIM.EnglishOrg/posts/pfbid08UCr6H1KehLv8of3N79xxsqASKsv6ha7CFjSaohp4BE652gawbsSWkSAH5EmAkQSl"
        },
        {
            Name: "InPhotos_2",
            Image: "Assets/Images/Home/Featured/CD24.jpg",
            Title: "Sports Fest 2024 Cheerdance",
            Link: "https://www.facebook.com/share/p/R9XwDKZUyL4ED4Vx/"
        },
        {
            Name: "InPhotos_3",
            Image: "Assets/Images/Home/Featured/EXPO24.jpg",
            Title: "Senior High School Expo 2024",
            Link: "https://www.facebook.com/STIM.EnglishOrg/posts/pfbid0kFJhKw5umF34jpYnSDARF2cWPQcuoitLfVYC7crLFrdoS9kmX9kQSPjhkA9evbKul"
        },
    ]
}

function Home_PageData_Load(){
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
        document.getElementById("InPhotos_" + a).querySelector(".Home_InPhotos_Item_Image").style.backgroundImage = "url(../" + Home_PageElements.InPhotos[a].Image + ")";
        document.getElementById("InPhotos_" + a).querySelector(".Home_InPhotos_Item_Title_Text").innerText = Home_PageElements.InPhotos[a].Title;
        document.getElementById("InPhotos_" + a).setAttribute("href", Home_PageElements.InPhotos[a].Link);
    }
}