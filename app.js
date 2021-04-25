var dob = prompt("Enter date of birth")
var dobmili = dob.getTime();
var Today = newDate();
var Todaymili = Today.getTime();
var diff = Todaymili - dobmili;
var accuAge = Math.floor(diff/(1000*60*60*24*30*12))
document.write(accuAge)