//Prints current date//
var today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY"));

//Colour codes time//
var currentHour = new Date().getHours();
$(".colorcode").each(function () {
	var val = parseInt($(this).prop("id"));
	if (val > currentHour && val < currentHour + 6) {
		$(this).css("background-color", "Blue");
	} else if (val < currentHour && val > currentHour - 6) {
		$(this).css("background-color", "Red");
	} else if (val === currentHour) {
		$(this).css("background-color", "Green");
	} else {
		$(this).css("background-color", "White");
	}
});

//Saves event on click//
$(document).ready(function () {
	// Get value on button click
	$(".saveBtn").click(function () {
		var str = $("#myInput").val();
	});
});
