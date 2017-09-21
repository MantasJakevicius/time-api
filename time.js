/* This is my Script for open Weather */

var theButton = document.getElementById("myButton");

theButton.addEventListener("click", getTime, false);

function getTime() {
    
    var userCity = document.getElementById("theCity").value;
    //console.log(userCity);
    
    var theAPICall = "http://api.worldweatheronline.com/premium/v1/tz.ashx?key=6c45119504c947d8878142730171309&q=" + userCity + "&format=json";
    
    var myRequest = new XMLHttpRequest();
    
    myRequest.open("GET", theAPICall, true);
    
    //console.log(myRequest);
    
    myRequest.onload = function() {
    
    if(myRequest.readyState == 4 && myRequest.status == 200) {
        
        var myData = JSON.parse(myRequest.responseText);
		
        document.getElementById("selectedTime").innerHTML = myData.data.time_zone[0].localtime + "<br><br>";
		
		var myTime = new Date(myData.data.time_zone[0].localtime);
		
		var month = myTime.getMonth() + 1;
		
		var hours = myTime.getHours();	
        
        document.getElementById("city").innerHTML = myData.data.request[0].query + "<br><br>";
		
		document.getElementById('local-time').setAttribute("style", "visibility: visible; font-weight: bold;");
		
		var body = document.body;
		
		switch (month) {
				
			case 12:
			case 1:
			case 2:
				if ( ( hours <= 7 ) || ( hours >= 18 ) ) {								
					body.style.backgroundImage = "url('image/winter/night.jpg')";
					
				}	else if ( ( hours >= 8 ) && ( hours <= 11 ) ) {								
					body.style.backgroundImage = "url('image/winter/morning.jpg')"; 
					
				}	else if ( ( hours >= 12 ) && ( hours <= 15 ) ) {								
					body.style.backgroundImage = "url('image/winter/afternoon.jpg')"; 
					
				}	else {
					body.style.backgroundImage = "url('image/winter/evening.jpg')"; 
				}
				break;
				
			case 3:
			case 4:
			case 5:
				if ( ( hours <= 6 ) || ( hours >= 21 ) ) {								
					body.style.backgroundImage = "url('image/spring/night.jpg')";
					
				}	else if ( ( hours >= 7 ) && ( hours <= 10 ) ) {								
					body.style.backgroundImage = "url('image/spring/morning.jpg')";
					
				}	else if ( ( hours >= 11 ) && ( hours <= 18 ) ) {								
					body.style.backgroundImage = "url('image/spring/afternoon.jpg')"; 
					
				}	else {
					body.style.backgroundImage = "url('image/winter/evening.jpg')"; 
				}
				break;
				
			case 6:	
			case 7:
			case 8:
				if ( ( hours <= 6 ) || ( hours >= 23 ) ) {								
					body.style.backgroundImage = "url('image/summer/night.jpg')";
					
				}	else if ( ( hours >= 7 ) && ( hours <= 10 ) ) {								
					body.style.backgroundImage = "url('image/summer/morning.jpg')"; 
					
				}	else if ( ( hours >= 11 ) && ( hours <= 20 ) ) {								
					body.style.backgroundImage = "url('image/summer/afternoon.jpg')"; 
					
				}	else {
					body.style.backgroundImage = "url('image/summer/evening.jpg')";
				}
				break;
				
			case 9:
			case 10:
			case 11:
				if ( ( hours <= 6 ) || ( hours >= 20 ) ) {								
					body.style.backgroundImage = "url('image/autumn/night.jpg')";
					
				}	else if ( ( hours >= 7 ) && ( hours <= 10 ) ) {								
					body.style.backgroundImage = "url('image/autumn/morning.jpg')";
					
				}	else if ( ( hours >= 11 ) && ( hours <= 17 ) ) {								
					body.style.backgroundImage = "url('image/autumn/afternoon.jpg')";
					
				}	else {
					body.style.backgroundImage = "url('image/autumn/evening.jpg')"; 
				}
				break;
		}
        
    } 
		else {
            alert("Data can not be accessed!");
        }
        
    }
    
    myRequest.send();
	
} 
