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
    console.log(currenthour)
    $(".time-block").each(function(){
        var blockhour = $(this).attr("id")
        console.log(blockhour)
        if (blockhour < currenthour) {
            $(this).addClass("past")
        }
        else if(blockhour === currenthour) {
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

updatehour();
var interval = setInterval(updatehour, 15000);
$("#9 .description").val(localStorage.getItem("9"))
$("#10 .description").val(localStorage.getItem("10"))
$("#11 .description").val(localStorage.getItem("11"))
$("#12 .description").val(localStorage.getItem("12"))
$("#13 .description").val(localStorage.getItem("13"))
$("#14 .description").val(localStorage.getItem("14"))
$("#15 .description").val(localStorage.getItem("15"))
$("#16 .description").val(localStorage.getItem("16"))
$("#17 .description").val(localStorage.getItem("17"))

})

