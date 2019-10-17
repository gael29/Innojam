var data = {"hah" : "Lokesh"};
 
var xmlhttp = new XMLHttpRequest();
 
xmlhttp.open("POST", "/demo", true);
 
xmlhttp.send( JSON.stringify( data ) );