var Generator_ErrorMessage_ChosenLine;
function Generator_ErrorMessage_PrintTitle(){
	const request = new XMLHttpRequest();
	request.open("GET", "Assets/404_messages.json", false);
	request.send();
	const messages = JSON.parse(request.responseText);
	console.log(messages);
	var Generator_ErrorMessage_RandomIndex = Math.floor(Math.random() * messages.length);
	Generator_ErrorMessage_ChosenLine = Generator_ErrorMessage_RandomIndex;
	var Generator_ErrorMessage_Line_WordByWord_Title = messages[Generator_ErrorMessage_RandomIndex].Title.split("");
	console.log(Generator_ErrorMessage_Line_WordByWord_Title);
	var Generator_ErrorMessage_Line_WordByWord_Message = messages[Generator_ErrorMessage_RandomIndex].Message.split("");
	console.log(Generator_ErrorMessage_Line_WordByWord_Message);
	
	// Clear the existing text in the error title
	document.getElementById("pageElement_Error_Title").innerHTML = messages[Generator_ErrorMessage_RandomIndex].Title;
	document.getElementById("pageElement_Error_Subtitle").innerHTML = messages[Generator_ErrorMessage_RandomIndex].Message;	
}
