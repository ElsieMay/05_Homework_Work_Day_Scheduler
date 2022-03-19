var present = document.querySelector(".present");
var past = document.querySelector(".past");
var future = document.querySelector(".future");
//Prints current date//
var today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY"));
//Colour codes rows based on time tense//
var currentHour = Date.now().getHours();
$(".colorcode").each(function () {
	var val = parseInt($(this).prop("id"));
	if (val > currentHour && val < currentHour + 6) {
		$(this).css(future);
	} else if (val < currentHour && val > currentHour - 6) {
		$(this).css(past);
	} else if (val === currentHour) {
		$(this).css(present);
	}
});
//Saves event on click//
$(document).ready(function () {
	// Get value on button click
	$(".saveBtn").click(function () {
		var str = $("#myInput").val();
	});
});
