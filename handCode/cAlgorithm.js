function findEmails(){
	var mailArchieve = retrieveMails();
	var cats = {"Place: ": emailRecord("Place", new Date(1994, 2, 5), "unknown")};
	
	function handleParagraph(paragraph){
		if(starsWith(paragraph, "created")){
			addEmails(emails, emailSubject(paragraph), extractDate(paragraph), extractOrigin(paragraph));
		}else if(starsWith(paragraph, "deleted")){
			deleteEmails(emails, emailSubject(paragraph), extractDate(paragraph))
		}
	}
	
	for(var mail = 0; mail < mailArchieve.length; mail++){
		var paragraphs = mailArchieve[mail].split("\n");
		for(var i = 0; i < paragraphs.length; i++){
			handleParagraph(paragraphs[i]);
		}
	}
	return emails;
}