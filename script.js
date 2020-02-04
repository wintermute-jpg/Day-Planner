 //on load functions
$(document).ready(function(){
    //display date
    $("#date").html(moment().format("MMM Do YY"));
    //post contents of local storage
    //$("#textarea" + num ).html(localStorage.savedData);
    $("#hour-9 .tasks").val(localStorage.getItem("hour-9"));
    $("#hour-10 .tasks").val(localStorage.getItem("hour-10"));
    $("#hour-11 .tasks").val(localStorage.getItem("hour-11"));
    $("#hour-12 .tasks").val(localStorage.getItem("hour-12"));
    $("#hour-1 .tasks").val(localStorage.getItem("hour-1"));
    $("#hour-2 .tasks").val(localStorage.getItem("hour-2"));
    $("#hour-3 .tasks").val(localStorage.getItem("hour-3"));
    $("#hour-4 .tasks").val(localStorage.getItem("hour-4"));
    $("#hour-5 .tasks").val(localStorage.getItem("hour-5"));

$(".save").on("click", function(){
    console.log("button pressed")
    var time = $(this).parent().attr("id");
    console.log(time);
    var task = $(this).siblings(".tasks").val();
    console.log(task);
    localStorage.setItem(time, task);
})
});


//save text to local storage
//function save(element){
  //  var num = element.attr("id");
    //specify which field will be saved and pulls text content
    //var IDdata= $("#textarea" + num).val();
    //console.log(IDdata);
    //create an array for user content to be stored
   //var userList = $("<li>" + IDdata);
    //userList.append(document.createTextNode(IDdata));
    //var myArray = (userList, IDdata);
    //post the content to the local storage memory
    //localStorage.setItem("savedData", JSON.stringify(myArray));
    //console.log(localStorage.getItem('savedData'));
//};

