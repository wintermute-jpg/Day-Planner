
var d = new Date();
var userInput = $(".userAdd")


//on load funtions
$(document).ready(function(){
    //display date
    $("#date").html("<h1>" + d + "<h1>")
    //post contents of local storage
    $("#textarea").html(localStorage.getItem('userList'));

});

//Add save functionality to buttons
function save(){
    //save text to local storage
    console.log('It worked!');
    //specify which field will be saved

    //pulls text content from input field
    var txt= document.getElementById("textarea").value;
    console.log(txt);
    //create an array for user content to be stored
    var userList = $("<li>");
    userList.append(document.createTextNode(txt));
    var myArray = (userList, txt);
    //post the content to the local storage memory
    localStorage.setItem('userList', JSON.stringify(myArray));
    console.log(localStorage.getItem('userList'));
};