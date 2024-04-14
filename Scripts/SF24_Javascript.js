let SF_Schedules = {};
function SF_Fetch_Schedules(){
    const request = new XMLHttpRequest();
    request.open("GET", "Sports_Fest_2024/SF24_Schedule_Manifest.json", false);
    request.send();
    var messages = request.responseText;
    console.log(messages);
    // BranchList_Data = JSON.parse(messages);
    SF_Schedules = JSON.parse(messages);
    SF_Generate_Schedules();
}


function SF_Generate_Schedules(){
    document.getElementById("SF_Schedule").innerHTML = "";
    for(let a = 0; a < SF_Schedules.length; a++){
        // Text
        var SF_Schedule_Item = document.createElement('h1');
        SF_Schedule_Item.setAttribute("class", "SF_Schedule_Day");
        SF_Schedule_Item.innerHTML = SF_Schedules[a].Day;
        document.getElementById("SF_Schedule").appendChild(SF_Schedule_Item);

        // Container for the schedules of this day
        var SF_Schedule_List_Container = document.createElement('div');
        SF_Schedule_List_Container.setAttribute("class", "SF_Schedule_Schedule");
        SF_Schedule_List_Container.setAttribute("id", "Schedule_" + a);
        document.getElementById("SF_Schedule").appendChild(SF_Schedule_List_Container);

        for(let b = 0; b < SF_Schedules[a].Schedules.length; b++){
            // Container of item
            var SF_Schedule_Item_List = document.createElement('div');
            SF_Schedule_Item_List.setAttribute("class", "SF_Schedule_Item");
            SF_Schedule_Item_List.setAttribute("id", "Schedule_Item_" + a + "_" + b);
            document.getElementById("Schedule_" + a).appendChild(SF_Schedule_Item_List);

            // Location
            var SF_Schedule_List_Item_Location = document.createElement('h3');
            SF_Schedule_List_Item_Location.setAttribute("class", "SF_Schedule_Location");
            SF_Schedule_List_Item_Location.innerHTML = SF_Schedules[a].Schedules[b].Schedule_Location;
            document.getElementById("Schedule_Item_" + a + "_" + b).appendChild(SF_Schedule_List_Item_Location);

            // Time table
            var SF_Schedule_List_TimeTable = document.createElement('div');
            SF_Schedule_List_TimeTable.setAttribute("class", "SF_Schedule_Item_List");
            SF_Schedule_List_TimeTable.setAttribute("id", "Schedule_" + a + "_List_" + b);
            document.getElementById("Schedule_Item_" + a + "_" + b).appendChild(SF_Schedule_List_TimeTable);

            for(let c = 0; c < SF_Schedules[a].Schedules[b].Schedule_Schedule.length; c++){
                let SF_Schedule_List_TimeTable_Item_HTML = `
                    <h4 class="SF_Schedule_Item_List_Item_Text">
                        ${SF_Schedules[a].Schedules[b].Schedule_Schedule[c].Schedule_Game}
                    </h4>
                    <h4 class="SF_Schedule_Item_List_Item_Text">
                        ${SF_Schedules[a].Schedules[b].Schedule_Schedule[c].Schedule_Time}
                    </h4>
                `;
                var SF_Schedule_List_TimeTable_Item = document.createElement('div');
                SF_Schedule_List_TimeTable_Item.setAttribute("class", "SF_Schedule_Item_List_Item");
                SF_Schedule_List_TimeTable_Item.innerHTML = SF_Schedule_List_TimeTable_Item_HTML;
                document.getElementById("Schedule_" + a + "_List_" + b).appendChild(SF_Schedule_List_TimeTable_Item);
            }
        }
    }
}