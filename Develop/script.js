var past = document.querySelector(".past");
var present = document.querySelector(".present");
var future = document.querySelector(".future");

//Prints current date//
var today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY"));

//Colour codes time//
var currentHour = new Date().getHours();
$(".colorcode").each(function () {
	var val = parseInt($(this).prop("id"));
	if (val > currentHour && val < currentHour + 6) {
		$(this).addClass("future");
	} else if (val < currentHour && val > currentHour - 6) {
		$(this).addClass("past");
	} else if (val === currentHour) {
		$(this).addClass("present");
	}
});

//Saves event on click//
$(document).ready(function () {
	// Get value on button click
	$(".saveBtn").click(function () {
		var str = $("#myInput").val();
	});
});
