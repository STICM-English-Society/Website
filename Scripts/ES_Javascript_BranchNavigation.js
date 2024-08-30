var BranchList = {};
var BranchList_Searchable = [];
var BranchList_Item_Name = [];
var BranchList_Item_Author = [];
var BranchList_Item_Category = [];
var BranchList_Item_Date_Published = [];
var BranchList_Item_URL = [];
var BranchList_Item_Thumbnail = [];
var BranchList_Item_OpenInNewTab = [];

function BranchNavigation_Generate_List(FileURL){
    const request = new XMLHttpRequest();
    request.open("GET", FileURL, false);
    request.send();
    var messages = request.responseText;
    console.log(messages);
    // BranchList_Data = JSON.parse(messages);
    BranchList = JSON.parse(messages)
    console.log(BranchList);
    for (a = 0; a != BranchList.length; a++){
        BranchList_Item_Name[a] = BranchList[a].Title;
        BranchList_Item_Author[a] = BranchList[a].Authors;
        BranchList_Item_Category[a] = BranchList[a].Category;
        BranchList_Item_Date_Published[a] = BranchList[a].Date_Published;
        BranchList_Item_URL[a] = BranchList[a].Link;
        BranchList_Item_Thumbnail[a] = BranchList[a].Thumbnail;
        BranchList_Item_OpenInNewTab[a] = BranchList[a].Open_In_NewTab;
        BranchList_Searchable[a] = "<" + BranchList[a].Title + " & " + BranchList[a].Authors + " & " + BranchList[a].Category + " & " + BranchList[a].Date_Published +">";
    }
    // for (a = 6; a != messages.length; a++){
    //     console.log("Processing item " + a + "...");
    //     BranchList_Line_Data = messages[a].split("%&");
    //     BranchList_Article_Name[a] = BranchList_Line_Data[0];
    //     BranchList_Article_Author[a] = BranchList_Line_Data[1];
    //     BranchList_Article_Category[a] = BranchList_Line_Data[2];
    //     BranchList_Article_Date_Published[a] = BranchList_Line_Data[3];
    //     BranchList_Article_URL[a] = BranchList_Line_Data[4];
    //     if (BranchList_Line_Data[5].includes("\r")){
    //         BranchList_Article_Thumbnail[a] = BranchList_Line_Data[5].replace("\r", "");
    //     } else {
    //         BranchList_Article_Thumbnail[a] = BranchList_Line_Data[5];
    //     }
    //     console.log("Done processing item " + a + ".");
    // }
    BranchNavigation_Generate_BranchList();
}



function BranchNavigation_Generate_BranchList(){
    for (a = BranchList_Item_Name.length -1 ; a != -1; a--){
        console.log("Processing item " + a + "...");
        var BranchList_Item_InnerHTML = `
            <div class="Branch_Navigation_Grid_Item">
              <div class="Branch_Navigation_Grid_Item_Thumbnail">
                <img class='Branch_Navigation_Grid_Item_Thumbnail_Image' src='${BranchList_Item_Thumbnail[a]}' draggable='false' loading='lazy' onload="this.style.opacity = '100%';"/>
              </div>
              <h2 class="Branch_Navigation_Grid_Item_Title">
                ${BranchList_Item_Name[a]}
              </h2>
              <div class="Branch_Navigation_Grid_Item_Details">
                <div class="Branch_Navigation_Grid_Item_Details_Author">
                  ${BranchList_Item_Author[a]}
                </div>
                <div class="Branch_Navigation_Grid_Item_Details_Category">
                  ${BranchList_Item_Category[a]}
                </div>
                <div class="Branch_Navigation_Grid_Item_Details_Date">
                  ${BranchList_Item_Date_Published[a]}
                </div>
              </div>
            </div>
        `;
        // Anchor
        var BranchList_Item_Anchor = document.createElement('a');
        BranchList_Item_Anchor.innerHTML = BranchList_Item_InnerHTML;
        BranchList_Item_Anchor.setAttribute("href", BranchList_Item_URL[a]);
        BranchList_Item_Anchor.setAttribute("id", "BranchList_Main_Item_Anchor_" + a);
        if (BranchList_Item_OpenInNewTab[a] == true){
          BranchList_Item_Anchor.setAttribute("target", "_blank");
        }
        document.getElementById("Branch_Navigation_Main").appendChild(BranchList_Item_Anchor);

        
    }
    document.getElementById("Branch_Navigation_Status").style.display = "none";
    document.getElementById("Branch_Navigation_Status_Container").style.maxHeight = "0px";
    
    Element_Style_Animate_Batch_QuerySelector(".Branch_Navigation_Grid_Item", "Branch_Navigation_Grid_Item_Appear", "0.3s", "forwards", "1", 50);
    BranchNavigation_Search_SetDataToUppercase();
}

function BranchNavigation_Search_SetDataToUppercase(){
    for (a = 0; a != BranchList_Searchable.length; a++){
        BranchList_Searchable[a] = BranchList_Searchable[a].toUpperCase();
    }
}

var BranchList_Search_Results = [];
var BranchList_Search_Results_Lines = [];
function BranchNavigation_Search_Articles(Query){
    //console.log("Starting search...");
    BranchList_Search_Results = [];
    BranchList_Search_Results_Lines = [];
    for (a = 0; a != BranchList_Searchable.length; a++){
        if (BranchList_Searchable[a].includes(Query.toUpperCase())){
            BranchList_Search_Results.push(BranchList_Searchable[a]);
            BranchList_Search_Results_Lines.push(a);
            //console.log("Result found on line: " + a);
        }
    }
    //console.log("Search results: " + BranchList_Search_Results);
    //console.log("Search result lines: " + BranchList_Search_Results_Lines);

    for (a = 0; a != BranchList_Searchable.length; a++){
        
        document.getElementById("BranchList_Main_Item_Anchor_" + a).style.display = "none";
        document.getElementById("BranchList_Main_Item_Anchor_" + a).style.animationName = "Animation_Branch_Navigation_Grid_Item_FadeOut";
        document.getElementById("BranchList_Main_Item_Anchor_" + a).style.animationFillMode = "forwards";
        document.getElementById("BranchList_Main_Item_Anchor_" + a).style.animationDuration = "0.25s";
    }

    for (a = 0; a != BranchList_Search_Results_Lines.length; a++){
        document.getElementById("BranchList_Main_Item_Anchor_" + BranchList_Search_Results_Lines[a]).style.display = "block";
        document.getElementById("BranchList_Main_Item_Anchor_" + BranchList_Search_Results_Lines[a]).style.animationName = "Animation_Branch_Navigation_Grid_Item_FadeIn";
        document.getElementById("BranchList_Main_Item_Anchor_" + BranchList_Search_Results_Lines[a]).style.animationFillMode = "forwards";
        document.getElementById("BranchList_Main_Item_Anchor_" + BranchList_Search_Results_Lines[a]).style.animationDuration = "0.25s";
    }

    document.getElementById("Branch_Navigation_Status").style.display = "block";
    document.getElementById("Branch_Navigation_Status_Container").style.maxHeight = "500px";
    document.getElementById("Branch_Navigation_Status").innerHTML = BranchList_Search_Results_Lines.length + " results for '" + Query + "'";
    if (BranchList_Search_Results_Lines.length == 0){
        document.getElementById("Branch_Navigation_Status").innerHTML = "No result found containing '" + Query + "'.";
    }

    if (Query == ""){
        document.getElementById("Branch_Navigation_Status").style.display = "none";
        document.getElementById("Branch_Navigation_Status_Container").style.maxHeight = "1px";
    }
}

document.addEventListener('DOMContentLoaded', function() {
    var BranchNavigation_Search_InputElement = document.getElementById("BranchNavigation_Search_Query");
    BranchNavigation_Search_InputElement.addEventListener('keypress', function(event) {
        if (event.keyCode === 13) {
        BranchNavigation_Search_Articles(document.getElementById("BranchNavigation_Search_Query").value);
        }
    });
});