const hour = dayjs().hour(); //display the hour
const DMY = dayjs().format("dddd, MMMM YYYY"); //Displays the day, the month, and the year

$("#currentDay").text(DMY); //To view the updated current day text
$(document).ready(function() {
//anything relating to time, is contained in single function below
function Time() {
$(".time-block").each(function () { //go through each row with loop!
  var rowTime = parseInt($(this).attr("id")); //applies to all rows target the ID
  if(rowTime > hour){ //remove any previous classes, then add new class 'future'
    $(this).removeClass("present"); 
    $(this).removeClass("past");
    $(this).addClass("future");
  }
  if(rowTime === hour){//remove any previous classes, then add new class 'present'
    $(this).removeClass("past");
    $(this).removeClass("future");
    $(this).addClass("present");
  }
  if(rowTime < hour){//remove any previous classes, then add new class 'past'
    $(this).removeClass("future");
    $(this).removeClass("present");
    $(this).addClass("past");
  }
})
}
//save each INDIVIDUAL description
  $(".saveBtn9").on("click", function(){ 
    localStorage.setItem("9", $(".description9").val());
    console.log("passing through button9");
})
  $(".saveBtn10").on("click", function(){ 
    localStorage.setItem("10", $(".description10").val());
})
  $(".saveBtn11").on("click", function(){ 
    localStorage.setItem("11", $(".description11").val());
})
  $(".saveBtn12").on("click", function(){ 
    localStorage.setItem("12", $(".description12").val());
})
  $(".saveBtn13").on("click", function(){ 
    localStorage.setItem("13", $(".description13").val());
})
  $(".saveBtn14").on("click", function(){ 
    localStorage.setItem("14", $(".description14").val());
})
  $(".saveBtn15").on("click", function(){ 
    localStorage.setItem("15", $(".description15").val());
})
  $(".saveBtn16").on("click", function(){ 
    localStorage.setItem("16", $(".description16").val());
})
  $(".saveBtn17").on("click", function(){ 
    localStorage.setItem("17", $(".description17").val());
})



//grabbing the users saved input typed into text areas


$(".description9").val(localStorage.getItem("9"));
$(".description10").val(localStorage.getItem("10"));
$(".description11").val(localStorage.getItem("11"));
$(".description12").val(localStorage.getItem("12"));
$(".description13").val(localStorage.getItem("13"));
$(".description14").val(localStorage.getItem("14"));
$(".description15").val(localStorage.getItem("15"));
$(".description16").val(localStorage.getItem("16"));
$(".description17").val(localStorage.getItem("17"));

Time(); //function to update time-blocks
})