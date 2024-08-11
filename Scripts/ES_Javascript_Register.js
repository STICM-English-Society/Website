let Committees = {
    "Technical" : false,
    "Journalism" : false,
    "Promotional" : false
}

function Register_Identify_Committees(){
    if (Element_Attribute_Get("Register_Committee_Technical", "State") == "Active"){
        Committees.Technical = true;
    } else {
        Committees.Technical = false;
    }
    if (Element_Attribute_Get("Register_Committee_Journalism", "State") == "Active"){
        Committees.Journalism = true;
    } else {
        Committees.Journalism = false;
    }
    if (Element_Attribute_Get("Register_Committee_Promotional", "State") == "Active"){
        Committees.Promotional = true;
    } else {
        Committees.Promotional = false;
    }

    if (Committees.Technical == true){
        document.getElementById('button_Register_Page_3').click();
    } else if (Committees.Journalism == true){
        document.getElementById('button_Register_Page_4').click();
    } else if (Committees.Promotional == true){
        document.getElementById('button_Register_Page_5').click();
    }
}

function Register_Identify_NextPage(Page){
    if (Page == "Technical"){
        if (Committees.Journalism == true){
            document.getElementById('button_Register_Page_4').click();
        } else if (Committees.Promotional == true){
            document.getElementById('button_Register_Page_5').click();
        } else {
            document.getElementById('button_Register_Page_6').click();
        }
    }
    if (Page == "Journalism"){
        if (Committees.Promotional == true){
            document.getElementById('button_Register_Page_5').click();
        } else {
            document.getElementById('button_Register_Page_6').click();
        }
    }
    if (Page == "Promotional"){
        document.getElementById('button_Register_Page_6').click();
    }
}

function Register_Identify_PreviousPage(Page){
    if (Page == "Journalism"){
        if (Committees.Technical == true){
            document.getElementById('button_Register_Page_3').click();
        } else {
            document.getElementById('button_Register_Page_2').click();
        }
    }
    if (Page == "Promotional"){
        if (Committees.Journalism == true){
            document.getElementById('button_Register_Page_4').click();
        } else if (Committees.Technical == true){
            document.getElementById('button_Register_Page_3').click();
        } else {
            document.getElementById('button_Register_Page_2').click();
        }
    }
    if (Page == "Choices"){
        if (Committees.Promotional == true){
            document.getElementById('button_Register_Page_5').click();
        } else if (Committees.Journalism == true){
            document.getElementById('button_Register_Page_4').click();
        } else if (Committees.Technical == true){
            document.getElementById('button_Register_Page_3').click();
        } else {
            document.getElementById('button_Register_Page_2').click();
        }
    }
}

function Register_Generate_Code(){
    
}