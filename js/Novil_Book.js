$(document).ready(function () {  
    bindButtons();
    $(".title").addClass("shown");
});


function bindButtons(){
    $("#next").click(function(){
        showNextLine();
    });

    $("#prev").click(function(){
        showPrevLine();
    })   
}


function showNextLine(){
    var currentLine = $(".line.shown");
    var nextLineToShow = currentLine.next();
    if (currentLine.length == 0){
        nextLineToShow = $(".line").first();
    }
    $(".line.shown").removeClass("shown");
    nextLineToShow.addClass("shown");
}



function showPrevLine(){
    var currentLine = $(".line.shown");
    var prevLineToShow = currentLine.prev();
    if (currentLine.length == 0){
        prevLineToShow = $(".line").first();
    }
    $(".line.shown").removeClass("shown");
    prevLineToShow.addClass("shown");
}



// //PAGE TURN EVENTS 
// $("document").onkeydown = checkKey;

// function checkKey(e) {

//     e = e || window.event;

//    var pageCounter;

//     if (e.keyCode == '38') {
//         // up arrow
//     }
//     else if (e.keyCode == '40') {
//         // down arrow
//     }
//     else if (e.keyCode == '37') {
//        // left arrow
//     }
//     else if (e.keyCode == '39') {
//        // right arrow
//     }

// }