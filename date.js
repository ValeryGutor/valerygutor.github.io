var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];       
var today = new Date();
today.setTime(today.getTime());       
document.getElementById("spanDate").innerHTML = months[today.getMonth()] + " " + today.getDate()+ ", " + today.getFullYear();