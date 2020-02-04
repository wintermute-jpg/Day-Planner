
var d = new Date();


//on load functions
$(document).ready(function(){
    //display date
    $("#date").html("<h1>" + d + "<h1>")
    //post contents of local storage
    $("#textarea" + num ).html(localStorage.savedData);
});

//save text to local storage
function save(element){
    var num = element.attr("id");
    //specify which field will be saved and pulls text content
    var IDdata= $("#textarea" + num).val();
    console.log(IDdata);
    //create an array for user content to be stored
   var userList = $("<li>" + IDdata);
    userList.append(document.createTextNode(IDdata));
    var myArray = (userList, IDdata);
    //post the content to the local storage memory
    localStorage.setItem("savedData", JSON.stringify(myArray));
    console.log(localStorage.getItem('savedData'));
};