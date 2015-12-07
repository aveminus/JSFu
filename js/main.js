window.onload = function() {
    var myHeading = document.querySelector("h1");
    myHeading.textContent = "Hello world!";
    console.log("Window loaded");
}

/*
document.querySelector('HTML').onclick = function(){
    alert("go away!!!");
}
*/

var myImage = document.querySelector("img");

myImage.onclick  = function() {
    var mySrc = myImage.getAttribute('src');
    //alert(mySrc);
    if(mySrc === "images/firefox-icon.png"){
    	myImage.setAttribute('src','');	
    }else{
    	myImage.setAttribute('src', "images/firefox-icon.png" );
    }
    
}