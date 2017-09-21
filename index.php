<!DOCTYPE html>
<html>
   
    <head>
      
        <title>The world time</title>
        
		<meta name="viewport" content="width=device-width, initial-scale=1.0">

        <link rel="stylesheet" type="text/css" href="style.css">
        <link href="https://fonts.googleapis.com/css?family=Ubuntu+Mono" rel="stylesheet">
         
    </head>
       
    <body>
        
        	<div id="container">
           
				<h1>The world time</h1> <br>

				<p><h3>Please enter city or country name:</h3> <br><input type="text" placeholder="name of area" onfocus="this.placeholder = ''" onblur="this.placeholder = 'name of area..'" id="theCity"> <br>
				<button id="myButton">submit</button></p> 

				<p id="local-time">Local time at: <span id="city" style="text-transform: capitalize;"/></p>
				<div id="selectedTime"></div>

				<h4>Your Current Time:</h4> 
				<div id="time" />

				<script src="time.js"></script> 
				<script src="currentTime.js"></script>  
        
            </div>            
<!--              <a id="home" href="http://mjakevicius.co.uk"><img src="logo.png" alt=""></a>-->
    </body>
        
</html>