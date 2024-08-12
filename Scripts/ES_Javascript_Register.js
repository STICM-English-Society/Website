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
            Register_Generate_Code();
        }
    }
    if (Page == "Journalism"){
        if (Committees.Promotional == true){
            document.getElementById('button_Register_Page_5').click();
        } else {
            document.getElementById('button_Register_Page_6').click();
            Register_Generate_Code();
        }
    }
    if (Page == "Promotional"){
        document.getElementById('button_Register_Page_6').click();
        Register_Generate_Code();
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

let Generated_Code_Definitions = {
    "Technical": {
        "Interests": ["", "1", "2", "3", "4", "5", "6", "7", "8"],
        "Devices": ["", "a","b","c","d","e","f"],
        "Operation": ["", "!", "@"]
    },
    "Journalism": {
        "Interests": ["", "1", "2", "3"]
    },
    "Promotional": {
        "Interests": ["", "1", "2", "3", "4"]
    }
}

var Generated_Code = [];
function Register_Generate_Code(){
    Generated_Code = [];
    if (Committees.Technical == true){
        Generated_Code.push("T");
        // Interests
        for (a = 1; a != 9; a++){
            if (Element_Attribute_Get("TC_Interests_" + a, "State") == "Active"){
                Generated_Code.push(Generated_Code_Definitions.Technical.Interests[a]);
            }
        }
        // Devices
        for (a = 1; a != 7; a++){
            if (Element_Attribute_Get("TC_Devices_" + a, "State") == "Active"){
                Generated_Code.push(Generated_Code_Definitions.Technical.Devices[a]);
            }
        }
        // Operation
        for (a = 1; a != 3; a++){
            if (Element_Attribute_Get("TC_Operation_" + a, "State") == "Active"){
                Generated_Code.push(Generated_Code_Definitions.Technical.Operation[a]);
            }
        }
    }
    if (Committees.Journalism == true){
        Generated_Code.push("J");
        // Interests
        for (a = 1; a != 5; a++){
            if (Element_Attribute_Get("JC_Interests_" + a, "State") == "Active"){
                Generated_Code.push(Generated_Code_Definitions.Journalism.Interests[a]);
            }
        }
    }
    if (Committees.Promotional == true){
        Generated_Code.push("P");
        // Interests
        for (a = 1; a != 5; a++){
            if (Element_Attribute_Get("PC_Interests_" + a, "State") == "Active"){
                Generated_Code.push(Generated_Code_Definitions.Promotional.Interests[a]);
            }
        }
    }
    document.getElementById("Register_Page_Code_Text").innerText = Generated_Code.join("");
    console.log(Generated_Code.join(""));
}

function Register_Copy_Code(){
    // Create a temporary input element to hold the URL
  const tempInput2 = document.createElement("input");

  // Set the input value to the current URL
  tempInput2.value = Generated_Code.join("");

  // Append the input element to the DOM
  document.body.appendChild(tempInput2);

  // Select the input element's contents
  tempInput2.select();

  // Copy the selected contents to the clipboard
  document.execCommand("copy");

  // Remove the input element from the DOM
  document.body.removeChild(tempInput2);

  Element_Attribute_Set("Register_Page_Code_Toast", "State", "Visible");
  setTimeout( function() {
    Element_Attribute_Set("Register_Page_Code_Toast", "State", "Hidden");
  }, 3000);
}