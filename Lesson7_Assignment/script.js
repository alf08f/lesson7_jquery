/*
    Program Name: Recipe Display Application
    
    Author: Anna Rissinger
    
    Date: 3/26/2017
    
    Filename: script.js
*/

//dispalys the next element after the current target
function display(event) {
    
    $(event.currentTarget).next().fadeIn("slow");
    
}//end of display

//attach event listener to h3 edlement to invoke display fuction when clicked
$("h3").click(display);