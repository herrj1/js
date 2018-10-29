
/**
<!-- file is partially commented on purpose-->
<!DOCTYPE html>
<head>
	<title>App1 Herrj</title>
</head>
<body>
	<p>My form</p>
	<form name="myForm" action="/action.php" onsubmit="return validateForm()" method="post">
		Name: <input type="text" name="fname">
		<input type="submit" value="submit">
	</form>
	<script>*/
		function validateForm(){
			var x = document.forms["myForm"]["fname"].value;
			if(x == ""){
				alert("Name cannot be empty");
				return false;
			}
		}
	/**</script>
</body>
</html>*/