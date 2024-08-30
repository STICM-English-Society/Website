function AB_Renderer_Article_Render(Data){
    let Article_Data = Data;
    // Header
    document.getElementById("Article_Banner_Image_Secondary").src = Article_Data.Metadata.Article_Banner;
    document.getElementById("Article_Banner_Image_Primary").src = Article_Data.Metadata.Article_Banner;
    document.getElementById("Article_Header_Title").innerHTML = Article_Data.Metadata.Article_Title;
    document.getElementById("Article_Page_Title").innerHTML = "English Society | " + Article_Data.Metadata.Article_Title;
    document.getElementById("Article_Header_Details_Author").innerHTML = Article_Data.Metadata.Article_Author;
    document.getElementById("Article_Header_Details_Category").innerHTML = Article_Data.Metadata.Article_Category;
    document.getElementById("Article_Header_Details_PublishingDate").innerHTML = Article_Data.Metadata.Article_PublishingDate;
    // Contents

    document.getElementById("Article_Content").innerHTML = "";

    var Content = Article_Data.Contents;
    for (a = 0; a < Content.length; a++){
        var Content_Data = Content[a];
        var Element_InnerHTML = ``;
        if (Content_Data.Type == "Primary_Title"){
            Element_InnerHTML = `
                <h1 class='Article_Content_Title_Big'>
                    ${Content_Data.Content}
                </h1>
            `;
            var Element = document.createElement('span');
            Element.setAttribute('class', 'Element');
            Element.innerHTML = Element_InnerHTML;
            document.getElementById("Article_Content").appendChild(Element);
        }
        if (Content_Data.Type == "Secondary_Title"){
            Element_InnerHTML = `
                <h2 class='Article_Content_Title'>
                    ${Content_Data.Content}
                </h2>
            `;
            var Element = document.createElement('span');
            Element.setAttribute('class', 'Element');
            Element.innerHTML = Element_InnerHTML;
            document.getElementById("Article_Content").appendChild(Element);
        }
        if (Content_Data.Type == "Paragraph"){
            Element_InnerHTML = `
                <p class="Article_Content_Paragraph">
                    ${Content_Data.Content}
                </p>
            `;
            var Element = document.createElement('span');
            Element.setAttribute('class', 'Element');
            Element.innerHTML = Element_InnerHTML;
            document.getElementById("Article_Content").appendChild(Element);
        }
        if (Content_Data.Type == "Numbered_List"){
            Element_InnerHTML = `
                <div class="Article_Content_List">
                    <p class="Article_Content_List_Header">
                        ${Content_Data.Header}
                    </p>
                    <ol id="Numbered_List_Item_${a}">
                        
                    </ol>
                </div>
            `;

            var Element = document.createElement('span');
            Element.setAttribute('class', 'Element');
            Element.innerHTML = Element_InnerHTML;
            document.getElementById("Article_Content").appendChild(Element);

            var Element_Subdata = Content_Data.Content.split(/\r?\n|\r|\n/g);
            for (b = 0; b < Element_Subdata.length; b++){
                var Element_Subdata_Element = document.createElement("li");
                Element_Subdata_Element.setAttribute('class', 'Article_Content_List_Content');
                Element_Subdata_Element.innerHTML = Element_Subdata[b];
                document.getElementById("Numbered_List_Item_" + a).appendChild(Element_Subdata_Element);
            }
        }
        if (Content_Data.Type == "Bulleted_List"){
            Element_InnerHTML = `
                <div class="Article_Content_List">
                    <p class="Article_Content_List_Header">
                        ${Content_Data.Header}
                    </p>
                    <ul id="Bulleted_List_Item_${a}">
                        
                    </ul>
                </div>
            `;

            var Element = document.createElement('span');
            Element.setAttribute('class', 'Element');
            Element.innerHTML = Element_InnerHTML;
            document.getElementById("Article_Content").appendChild(Element);

            var Element_Subdata = Content_Data.Content.split(/\r?\n|\r|\n/g);
            for (b = 0; b < Element_Subdata.length; b++){
                var Element_Subdata_Element = document.createElement("li");
                Element_Subdata_Element.setAttribute('class', 'Article_Content_List_Content');
                Element_Subdata_Element.innerHTML = Element_Subdata[b];
                document.getElementById("Bulleted_List_Item_" + a).appendChild(Element_Subdata_Element);
            }
        }
        if (Content_Data.Type == "Quote"){
            Element_InnerHTML = `
                <div class="Article_Content_Quote">
                    <h1 class="Article_Content_Quote_Apostrophe Apostrophe_1">
                        "
                    </h1>
                    <h3 class="Article_Content_Quote_Content">
                        ${Content_Data.Content}
                    </h3>
                    <h1 class="Article_Content_Quote_Apostrophe Apostrophe_2">
                        "
                    </h1>
                    <h4 class="Article_Content_Quote_Source">
                        ${Content_Data.Source}
                    </h4>
                </div>
            `;
            var Element = document.createElement('span');
            Element.setAttribute('class', 'Element');
            Element.innerHTML = Element_InnerHTML;
            document.getElementById("Article_Content").appendChild(Element);
        }
        if (Content_Data.Type == "Image"){
            Element_InnerHTML = `
                <div class='Article_Content_Images'>
                    <div class="Article_Content_Images_Item">
                        <img class='Article_Content_Images_Item_Image' src='${Content_Data.Source}' draggable='false' loading='lazy'/>
                        <p class="Article_Content_Images_Item_Description">
                            ${Content_Data.Description}
                        </p>
                        <p class="Article_Content_Images_Item_Credit">
                            ${Content_Data.Credits}
                        </p>
                    </div>
                </div>
            `;
            var Element = document.createElement('span');
            Element.setAttribute('class', 'Element');
            Element.innerHTML = Element_InnerHTML;
            document.getElementById("Article_Content").appendChild(Element);
        }
        if (Content_Data.Type == "Video"){
            Element_InnerHTML = `
                <iframe class="Article_Content_EmbeddedVideo" src="${Content_Data.Source}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen=""></iframe>
            `;
            var Element = document.createElement('span');
            Element.setAttribute('class', 'Element');
            Element.innerHTML = Element_InnerHTML;
            document.getElementById("Article_Content").appendChild(Element);
        }
    }
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
    setTimeout(function(){
        Element_Style_Animate_Batch_QuerySelector(".Element", "Article_Content_Appear", "0.5s", "forwards", "1", 150);
    }, 2000);
}

