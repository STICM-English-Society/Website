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

let SF_Standings = {};
function SF_Fetch_Standings(){
    const request = new XMLHttpRequest();
    request.open("GET", "Sports_Fest_2024/SF24_Standings_Manifest.json", false);
    request.send();
    var messages = request.responseText;
    console.log(messages);
    // BranchList_Data = JSON.parse(messages);
    SF_Standings = JSON.parse(messages);
    SF_Standings = SF_Standings.sort((b,a) => a.Total_Score - b.Total_Score);
    SF_Generate_Standings();
}

function SF_Generate_Standings(){
    document.getElementById("SF_Ranks").innerHTML = "";
    for (a = 0; a < SF_Standings.length; a++){
        // SF_Ranks_Team
        var Team_Item = document.createElement('div');
        Team_Item.setAttribute('class', 'SF_Ranks_Team');
        Team_Item.setAttribute('Team', SF_Standings[a].Team);
        Team_Item.setAttribute('id', "Team_" + SF_Standings[a].Team);
        document.getElementById('SF_Ranks').appendChild(Team_Item);

        // SF_Ranks_Team > SF_Ranks_Team_Score
        var Team_Score_Item = document.createElement('div');
        Team_Score_Item.setAttribute('class', 'SF_Ranks_Team_Score');
        Team_Score_Item.innerHTML = `
            <h1 class="SF_Ranks_Team_Score_Text">
                ${SF_Standings[a].Total_Score}
            </h1>`;
        document.getElementById("Team_" + SF_Standings[a].Team).appendChild(Team_Score_Item);

        // SF_Ranks_Team > SF_Ranks_Team_Name
        var Team_Name_Item = document.createElement('div');
        Team_Name_Item.setAttribute('class', 'SF_Ranks_Team_Name');
        Team_Name_Item.innerHTML = `
            <h1 class="SF_Ranks_Team_Name_Text">
                ${SF_Standings[a].Team}
            </h1>`;
        document.getElementById("Team_" + SF_Standings[a].Team).appendChild(Team_Name_Item);

        // SF_Ranks_Team > SF_Ranks_Team_Info
        var Team_Info_Item = document.createElement('div');
        Team_Info_Item.setAttribute('class', 'SF_Ranks_Team_Info');
        Team_Info_Item.setAttribute('id', "Team_Info_" + SF_Standings[a].Team);
        document.getElementById("Team_" + SF_Standings[a].Team).appendChild(Team_Info_Item);

        for (b = 0; b < SF_Standings[a].Info.length; b++){
            var Team_Info_Item_Item = document.createElement('div');
            Team_Info_Item_Item.setAttribute('class', 'SF_Ranks_Team_Info_Item');
            Team_Info_Item_Item.innerHTML = `
                <p class="SF_Ranks_Team_Info_Item_Data">
                    ${SF_Standings[a].Info[b].Data}
                </p>
                <p class="SF_Ranks_Team_Info_Item_Value">
                    ${SF_Standings[a].Info[b].Value}
                </p>`;
            document.getElementById("Team_Info_" + SF_Standings[a].Team).appendChild(Team_Info_Item_Item);
        }
    }
}

let SF_Standings_GameSpecific = {};
function SF_Fetch_Standings_GameSpecific(){
    const request = new XMLHttpRequest();
    request.open("GET", "Sports_Fest_2024/SF24_Standings_GameSpecific_Manifest.json", false);
    request.send();
    var messages = request.responseText;
    console.log(messages);
    // BranchList_Data = JSON.parse(messages);
    SF_Standings_GameSpecific = JSON.parse(messages);
    SF_Generate_Standings_GameSpecific();
}

function SF_Generate_Standings_GameSpecific(){
    document.getElementById("SF_Scores").innerHTML = "";
    for (a = 0; a < SF_Standings_GameSpecific.length; a++){
        // SF_Scores_Game
        var Game_Item_Element = document.createElement('div');
        Game_Item_Element.setAttribute('class', 'SF_Scores_Game');
        Game_Item_Element.setAttribute('id', 'SF_Scores_Game_' + a);
        Game_Item_Element.setAttribute('Game', SF_Standings_GameSpecific[a].Game_Name);
        Game_Item_Element.innerHTML = `
            <h2 class="SF_Scores_Game_Title">
                ${SF_Standings_GameSpecific[a].Game_Name}
            </h2>
            <div class="SF_Scores_Game_List" id="${'SF_Scores_Game_' + a + '_List'}">
            </div>
        `;
        document.getElementById("SF_Scores").appendChild(Game_Item_Element);

        for (b = 0; b < SF_Standings_GameSpecific[a].Game_Rankings.length; b++){
            var Game_Item_List_Element = document.createElement('div');
            Game_Item_List_Element.setAttribute('class', 'SF_Scores_Game_List_Item');
            Game_Item_List_Element.innerHTML = `
                <p class="SF_Scores_Game_List_Item_Data"> 
                    ${SF_Standings_GameSpecific[a].Game_Rankings[b].Ranking_Name}
                </p>
                <div class="SF_Scores_Game_List_Item_Value" id="${'SF_Scores_Game_' + a + '_List_' + b + '_Values'}">
                </div>
            `;
            document.getElementById('SF_Scores_Game_' + a + '_List').appendChild(Game_Item_List_Element);

            for (c = 0; c < SF_Standings_GameSpecific[a].Game_Rankings[b].Ranking_Team.length; c++){
                var Game_Item_List_Value_Flag_Element = document.createElement('div');
                Game_Item_List_Value_Flag_Element.setAttribute("class", "SF_Scores_Game_List_Item_Value_Flag");
                Game_Item_List_Value_Flag_Element.setAttribute("Team", SF_Standings_GameSpecific[a].Game_Rankings[b].Ranking_Team[c]);
                document.getElementById('SF_Scores_Game_' + a + '_List_' + b + '_Values').appendChild(Game_Item_List_Value_Flag_Element);

                var Game_Item_List_Value_Text_Element = document.createElement('div');
                Game_Item_List_Value_Text_Element.setAttribute("class", "SF_Scores_Game_List_Item_Value_Text");
                Game_Item_List_Value_Text_Element.innerHTML = SF_Standings_GameSpecific[a].Game_Rankings[b].Ranking_Team[c];
                document.getElementById('SF_Scores_Game_' + a + '_List_' + b + '_Values').appendChild(Game_Item_List_Value_Text_Element);
            }
        }
    }
}

function SF_Search_Standings(Query){
    var Games = document.querySelectorAll('.SF_Scores_Game');
    if (Query == ''){
        document.getElementById("Branch_Navigation_Status").style.display = "none";
        for (a = 0; a < Games.length; a++){
            Games[a].style.display = "grid";
        }
    } else {
        document.getElementById("Branch_Navigation_Status").style.display = "block";
        var Games_Hit_Count = 0;
        for (a = 0; a < Games.length; a++){
            Games[a].style.display = "none";
        }
        for (a = 0; a < Games.length; a++){
            if (Games[a].getAttribute('Game').toUpperCase().includes(Query.toUpperCase())){
                Games[a].style.display = "grid";
                Games_Hit_Count++;
            }
        }
        if (Games_Hit_Count > 0){
            document.getElementById("Branch_Navigation_Status").innerHTML = Games_Hit_Count + " results for '" + Query + "'";
        } else {
            document.getElementById("Branch_Navigation_Status").innerHTML = "No results found for '" + Query + "'.";
        }
    }
    
}