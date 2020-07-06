$(document).ready(function(){
    var currentdaytodisplay = moment().format("dddd, MMMM Do");
    document.getElementById("currentDay").append(currentdaytodisplay);

    $(".saveBtn").on("click", function(){
        var textvalue = $(this).siblings(".description").val()
        var id = $(this).parent().attr("id")
        window.localStorage.setItem(id, textvalue)        
    })
function updatehour () {
    var currenthour = moment().hours();
    $(".time-block").each(function(){
        var blockhour = $(this).attr("id")
        if (blockhour < currenthour) {
            $(this).addClass("past")
        }
        else if(blockhour = currenthour) {
            $(this).removeClass("past")
            $(this).addClass("present")            
        }
        else {
            $(this).removeClass("past")
            $(this).removeClass("present")
            $(this).addClass("future")
        }
    })
}
updatehour (); 

var interval = setInterval(updatehour, 15000);
$("#9am .description").val(localStorage.getItem("9am"))
$("#10am .description").val(localStorage.getItem("10am"))
$("#11am .description").val(localStorage.getItem("11am"))
$("#12pm .description").val(localStorage.getItem("12pm"))
$("#1pm .description").val(localStorage.getItem("1pm"))
$("#2pm .description").val(localStorage.getItem("2pm"))
$("#3pm .description").val(localStorage.getItem("3pm"))
$("#4pm .description").val(localStorage.getItem("4pm"))
$("#5pm .description").val(localStorage.getItem("5pm"))

})

