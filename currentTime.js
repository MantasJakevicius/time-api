function updateTime() {

    var currentTime = new Date();
    
    var year = currentTime.getFullYear();
    var month = currentTime.getMonth() + 1;
    var day = currentTime.getDate();
    var hours = currentTime.getHours();
    var mins = currentTime.getMinutes();
    
    if (mins < 10) {
        mins = "0" + mins;
    }
    
    if ( month < 10 ) {
        month = "0" + month;
    } 
    
    if ( day < 10 ) {
        day = "0" + day;
    }
    
    var v = year + "-" + month + "-" + day + " " + hours + ":" + mins;
    setTimeout("updateTime()", 1000);
    document.getElementById('time').innerHTML = v;
	
	}


updateTime();
