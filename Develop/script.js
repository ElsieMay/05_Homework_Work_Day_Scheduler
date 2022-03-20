var past = document.querySelector(".past");
var present = document.querySelector(".present");
var future = document.querySelector(".future");
var myInput = document.querySelector("#myInput");

//Prints current date//
var today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY"));

$(document).ready(function () {
	// saveBtn on click//
	$(".saveBtn").on("click", function () {
		var text = $(this).closest(myInput).val();
		var time = $(this).closest().attr("id");

		// Save event in local storage//
		localStorage.setItem(time, text, JSON.stringify);
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

		$("#8 .description").val(localStorage.getItem("8"));
		$("#9 .description").val(localStorage.getItem("9"));
		$("#10 .description").val(localStorage.getItem("10"));
		$("#11 .description").val(localStorage.getItem("11"));
		$("#12 .description").val(localStorage.getItem("12"));
		$("#13 .description").val(localStorage.getItem("13"));
		$("14 .description").val(localStorage.getItem("14"));
		$("#15 .description").val(localStorage.getItem("15"));
		$("#16 .description").val(localStorage.getItem("16"));
		$("#17 .description").val(localStorage.getItem("17"));
	});
});
