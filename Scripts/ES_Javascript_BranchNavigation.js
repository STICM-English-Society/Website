console.log("This is detected");
var BranchList_Article_Name = [];
var BranchList_Article_Author = [];
var BranchList_Article_Category = [];
var BranchList_Article_Date_Published = [];
var BranchList_Article_URL = [];

function BranchNavigation_Generate_List(){
    const request = new XMLHttpRequest();
    request.open("GET", "Articles/Index_Articles.txt", false);
    request.send();
    var messages = request.responseText.split("\n");
    console.log(messages);    
    for (a = 6; a != messages.length; a++){
        var BranchList_Line_Data = messages[a].split("%&");
        BranchList_Article_Name[a] = BranchList_Line_Data[0];
        BranchList_Article_Author[a] = BranchList_Line_Data[1];
        BranchList_Article_Category[a] = BranchList_Line_Data[2];
        BranchList_Article_Date_Published[a] = BranchList_Line_Data[3];
        BranchList_Article_URL[a] = BranchList_Line_Data[4];
    }
    BranchNavigation_Generate_BranchList_Articles();
}

function BranchNavigation_Generate_BranchList_Articles(){
    for (a = 6; a != BranchList_Article_Name.length; a++){
        var BranchList_Item_Div = document.createElement('a');
        BranchList_Item_Div.setAttribute("href", "Articles/" + BranchList_Article_URL[a]);
        BranchList_Item_Div.setAttribute("id", "Branch_Navigation_Link_"+a);
        document.getElementById("Branch_Navigation").appendChild(BranchList_Item_Div);
        
        var BranchList_Item_Div = document.createElement('div');
        BranchList_Item_Div.setAttribute("id", "BranchList_Item_"+a);
        BranchList_Item_Div.classList.add("Branch_Navigation_Item");
        document.getElementById("Branch_Navigation_Link_"+a).appendChild(BranchList_Item_Div);

        var BranchList_Item_Title = document.createElement("h2");
        BranchList_Item_Title.innerHTML = BranchList_Article_Name[a];
        BranchList_Item_Title.classList.add("Branch_Navigation_Item_Title");
        document.getElementById("BranchList_Item_"+a).appendChild(BranchList_Item_Title);

        var BranchList_Item_Details = document.createElement("div");
        BranchList_Item_Details.setAttribute("id", "BranchList_Item_Details_"+a);
        BranchList_Item_Details.classList.add("Branch_Navigation_Item_Details");
        document.getElementById("BranchList_Item_"+a).appendChild(BranchList_Item_Details);

        var BranchList_Item_Details_Text_Author = document.createElement("p");
        BranchList_Item_Details_Text_Author.innerHTML = "Author: " + BranchList_Article_Author[a];
        BranchList_Item_Details_Text_Author.classList.add("Branch_Navigation_Item_Details_Text");
        document.getElementById("BranchList_Item_Details_"+a).appendChild(BranchList_Item_Details_Text_Author);
        
        var BranchList_Item_Details_Text_Category = document.createElement("p");
        BranchList_Item_Details_Text_Category.innerHTML = "Category: " + BranchList_Article_Category[a];
        BranchList_Item_Details_Text_Category.classList.add("Branch_Navigation_Item_Details_Text");
        document.getElementById("BranchList_Item_Details_"+a).appendChild(BranchList_Item_Details_Text_Category);

        var BranchList_Item_Details_Text_Date_Published = document.createElement("p");
        BranchList_Item_Details_Text_Date_Published.innerHTML = "Date Published: " + BranchList_Article_Date_Published[a];
        BranchList_Item_Details_Text_Date_Published.classList.add("Branch_Navigation_Item_Details_Text");
        document.getElementById("BranchList_Item_Details_"+a).appendChild(BranchList_Item_Details_Text_Date_Published);

    }
}