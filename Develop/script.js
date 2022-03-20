//Prints current date//
var today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY"));

$(document).ready(function () {
	// saveBtn on click//
	$(".saveBtn").on("click", function () {
		var text = $(this).prev(".myInput").val();
		var time = $(this).prev().attr("id");

		// Save event in local storage//
		localStorage.setItem(time, JSON.stringify(text));
	});

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
});

const substr = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
$.each(substr, function (index, val) {
	var myData = JSON.parse(localStorage.getItem(val));
	if (myData !== null) $(`.myInput[id=${val}]`).val(myData);
});
