/*
    Program Name: Recipe Display Application
    
    Author: Anna Rissinger
    
    Date: 3/26/2017
    
    Filename: drill4.js
*/

//dispalys the next element after the current target
function display(event) {
    
    $(event.currentTarget).next().fadeIn("slow");
    
}//end of display

//attach event listener to h3 edlement to invoke display fuction when clicked
//$("h3").click(display);

//displays and animates the next element after the current tag
function display2(event) {
    
    $(event.currentTarget).next().animate( {height: 'toggle'}, "slow");
    
}//end of display2

//attach event listener to h3 elements to invoke displayy fuction when clicked
$("h3").click(display2);

//change the background color h3 element when mouse hovers over it
$("h3").hover(function () {
    $(this).css("background-color", "purple");
    } , function () {
    $(this).css("background-color", "pink");
});

//hover() will trigger display2 method each time mouse hovers over header
$("h3").hover(dispaly2);