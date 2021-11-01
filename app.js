"use strict";

window.onload = function(){
    var srchbtn = document.getElementsByTagName("button")[0];

    srchbtn.addEventListener("click", function(e){

        const charac = document.getElementsByTagName("input")[0];
        var xhttp = new XMLHttpRequest(); //create XMLHttpRequest object
        xhttp.onreadystatechange = function(){
             if (this.readyState == 4 && this.status == 200) {
               document.getElementById("result").innerHTML = this.responseText; //display results in the result section
             }
        };
        xhttp.open("POST", "superheroes.php"); //specify the request type and where file is located in this case the file is in the same folder
        xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhttp.send("query=" + String(charac.value)); //send php the character to find
    });
}