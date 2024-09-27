window.addEventListener('DOMContentLoaded', Playlist_Fetch);

function Playlist_Fetch() {
    var Playlist_QueryString = window.location.search;
    var Playlist_QueryString_Parameters = new URLSearchParams(Playlist_QueryString);
    if (Playlist_QueryString_Parameters.get('Playlist') != null) {
        var Playlist_FileLocation = "Videos/" + Playlist_QueryString_Parameters.get('Playlist') + ".json";
        console.log(Playlist_FileLocation);
        Playlist_Load(Playlist_FileLocation);
    } else {
        let Data = {
            "Metadata": {
                "Playlist_Thumbnail": "https://sticm-english-society.github.io/Website/Assets/Images/Placeholder.png",
                "Playlist_Title": "Test Playlist",
                "Playlist_Description": "Test Description"
            },
            "Contents": [
                {
                    "Video_Title": "ONE OK ROCK - Vandalize",
                    "Video_Thumbnail": "https://sticm-english-society.github.io/Website/Assets/Images/Placeholder_1.png",
                    "Video_URL": "https://www.youtube.com/embed/SLxsw-G_9dw?si=v-I1emwYpWA6axAG",
                    "Video_PublishingDate": "1 September 2024"
                },
                {
                    "Video_Title": "ONE OK ROCK - Delusion:All",
                    "Video_Thumbnail": "https://sticm-english-society.github.io/Website/Assets/Images/Placeholder_2.png",
                    "Video_URL": "https://www.youtube.com/embed/TmwCl9wUrC8?si=dlUUiww-iqw2bBPi",
                    "Video_PublishingDate": "1 September 2024"
                },
                {
                    "Video_Title": "ONE OK ROCK - Re:Make - Live",
                    "Video_Thumbnail": "https://sticm-english-society.github.io/Website/Assets/Images/Placeholder_3.png",
                    "Video_URL": "https://www.youtube.com/embed/9HYvSROg4YU?si=F6GCfZl6TMGuqxK7",
                    "Video_PublishingDate": "1 September 2024"
                },
                {
                    "Video_Title": "Eve - FightSong",
                    "Video_Thumbnail": "https://sticm-english-society.github.io/Website/Assets/Images/Placeholder_4.png",
                    "Video_URL": "https://www.youtube.com/embed/0GEm67c9WUg?si=ma1LhRKZetm0an1_",
                    "Video_PublishingDate": "1 September 2024"
                },
                {
                    "Video_Title": "Eve - fanfare (Instrumental)",
                    "Video_Thumbnail": "https://sticm-english-society.github.io/Website/Assets/Images/Placeholder_5.png",
                    "Video_URL": "https://www.youtube.com/embed/KKdkIv3Xge4?si=yUV5t0s4REp-9ICz",
                    "Video_PublishingDate": "1 September 2024"
                }
            ]
        };
        Playlist_Render(Data);
    }
}

function Playlist_Load(IndexURL){
    const request = new XMLHttpRequest();
    request.open("GET", IndexURL, false);
    request.send();
    var Playlist_Data = JSON.parse(request.responseText);
    console.log(Playlist_Data);
    Playlist_Render(Playlist_Data);
}


let Playlist_Data;
function Playlist_Render(Data){
    Playlist_Data = Data;
    document.getElementById("Player_Category").innerHTML = Playlist_Data.Metadata.Playlist_Title;
    document.getElementById("Player_Playlist_List").innerHTML = "";
    for (a = 0; a <= Playlist_Data.Contents.length; a++){
        var Playlist_Item_InnerHTML = `
            <img src="${Playlist_Data.Contents[a].Video_Thumbnail}" loading="lazy" class="Player_Playlist_List_Item_Thumbnail"/>
            <h3 class="Player_Playlist_List_Item_Title">
            ${Playlist_Data.Contents[a].Video_Title}
            </h3>
        `;
        var Playlist_Item = document.createElement('button');
        Playlist_Item.setAttribute('class', 'Player_Playlist_List_Item');
        Playlist_Item.setAttribute('onclick', `Playlist_Video_Play(${a})`);
        Playlist_Item.innerHTML = Playlist_Item_InnerHTML;
        document.getElementById("Player_Playlist_List").appendChild(Playlist_Item);
    }
}

function Playlist_Video_Play(Item){
    let Video_Data = Playlist_Data.Contents[Item];
    Element_Attribute_Set("Player_Video", "src", Video_Data.Video_URL);
    document.getElementById("Player_Title").innerHTML = Video_Data.Video_Title;
    document.getElementById("Player_PublishingDate").innerHTML = Video_Data.Video_PublishingDate;
}