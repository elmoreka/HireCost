// Calculate the cost of hiring personal for the dates specified


//document.getElementById("submit").addEventListener("click", process_form);
// run process form when the submit button is clicked.

$("#submit").bind( "click", function() { process_form() });
$("#reset").bind( "click", function() { reset_form() });

var source = $("#printable").html();
var template = Handlebars.compile(source);

$(document).ready(function()
{
	$('#sDate').val("");
	$('#cDate').val("");

	initialize_dates();
})

// process_form will save entered and calculated values to be re-displayed in a print friendly form
// on a new page.  This function will call the calculate function to calculate the Yearly Emcumbrance.

function process_form()
{

	var empId = document.getElementById("empId").value;
	var fName = document.getElementById("fName").value;
	var lName = document.getElementById("lName").value;
	var posNum = document.getElementById("posNum").value;
	var posTitle = document.getElementById("posTitle").value;
	var empType = document.getElementById("empType").value;

	var glAcct = document.getElementById("glAcct").value;
	var sDate = document.getElementById("sDate").value;
	var cDate = document.getElementById("cDate").value;
	var rate = document.getElementById("rate").value;
	var hours = document.getElementById("hours").value;

	var supervisor = document.getElementById("supervisor").value;
	var phone = document.getElementById("phone").value;

	console.log(sDate);
	console.log(cDate);
	console.log(hours);
	console.log(rate);

	if (sDate < cDate)
	{
		// return compensation to web page

		document.getElementById("comp").value = calculate(sDate, cDate);
		var comp = document.getElementById("comp").value;

		var data = {
			'empId': empId,
			'fName': fName,
			'lName': lName,
			'posNum': posNum,
			'posTitle': posTitle,
			'empType': empType,
			'glAcct': glAcct,
			'sDate': sDate,
			'cDate': cDate,
			'rate': rate,
			'hours': hours,
			'comp': comp,
			'supervisor': supervisor,
			'phone': phone,
		}

		console.log(sDate);
		console.log(cDate);
		console.log(hours);
		console.log(rate);

		document.getElementById('text').innerHTML = template(data);
	}
	else
	{
		alert('End date must be later than start date. Please adjust dates.');
	}
}

// This function will calculate the yearly encumbrance. The number of hours x rate x months.  The months between
// function will determine the number of months.

function calculate(sDate,cDate)
{
	// convert date string to date

	var newdate1 = new Date(sDate);
	var newdate2 = new Date(cDate);

	newdate1.setDate(newdate1.getDate() + 2);
	newdate2.setDate(newdate2.getDate() + 2);

	var dd1 = newdate1.getDate();
	var mm1 = newdate1.getMonth() + 1;
	var y1 = newdate1.getFullYear();

	var dd2 = newdate2.getDate();
	var mm2 = newdate2.getMonth() + 1;
	var y2 = newdate2.getFullYear();


	var date1 = mm1 + '-' + dd1 + '-' + y1;
	var date2 = mm2 + '-' + dd2 + '-' + y2;

	var date1 = new Date(date1);
	var date2 = new Date(date2);

	date1 = formatDate(date1);
	date2 = formatDate(date2);

	var rate = document.getElementById("rate").value;
	var hours = document.getElementById("hours").value;	
	console.log(date1);
	console.log(date2);

	// retrieve number of months
	var months = monthsBetween(date1, date2);

	console.log(months);

	// calculate total hours and compensation
	var comp = rate * hours * months;

	console.log(comp);
	return comp;
}

// This function calculates the number of months between the two dates. Partial months will be counted as
// a whole month.  If the end date is 8/1/20xx, then August will count as one month.  Since this is for
// yearly budgeting, the number of months have a max of 12.  If a two year period is entered, it will be
// reduced from 24 to 12 months.

function monthsBetween(date1, date2)
{
	var date1Month = date1.getMonth();
	var date2Month = date2.getMonth();
	var date1Year = date1.getFullYear();
	var date2Year = date2.getFullYear();
	var date2Date = date2.getDate();
	var months = 0;

	if (date1 < date2) {

		var i = new Date(date1);
		while ((i <= date2) && (months < 12)) {

			if (date1Month == 11) {
				months++;
				date1Year++;
				date1Month = 00;
				i.setDate(01);
				i.setFullYear(date1Year);
				i.setMonth(00);
			}
			else {
				months++;
				date1Month++;
				i.setDate(01);
				i.setMonth(date1Month);
			}
		}
	}
	else
	{
		alert('End date must be later than start date. Please adjust dates.');
	}
	if (months == 0)
	{
		months = 1;
	}
	if (date2Date == 01)
	{
		months++;
	}
	if (months > 12)
	{
		months = 12;
	}
	return months;
}

function reset_form()
{
	$("#empId").val("");
	$("#fName").val("");
	$("#lName").val("");
	$("#posNum").val("");
	$("#posTitle").val("");
	$("#glAcct").val("");
	$("#sDate").val("");
	$("#cDate").val("");
	$("#rate").val(0);
	$("#hours").val(0);

	$("#supervisor").val("");
	$("#phone").val("");

	initialize_dates();
}
function set_end_date_per_start_date(mode) {
	//
	// Seed the end date based on the start date's month.  If after May, push
	// the end date's year out to next year.
	//
	if (mode == 'initial')
	{
		startDate = new Date();
		console.log(startDate);
	}
	else
	{
		currentStartDate = $("#sDate").val();
		console.log(currentStartDate);
		parts = currentStartDate.value.split("/");
		startDate = new Date(parseInt(parts[2]),(parseInt(parts[0])),parseInt(parts[1]));
		console.log(startDate);
	}
	if (startDate.getMonth() > 4)
	{
		console.log(startDate);
		endDate = new Date((startDate.getFullYear() + 1), 4, 31);
		console.log(endDate);
	}
	else
	{
		endDate = new Date(startDate.getFullYear(), 4, 31);
		console.log(endDate);
	}

	console.log(startDate.getMonth());
	console.log(startDate.getDate());
	startDateString = formatDate2(startDate);

	$("#sDate").val(startDateString);
	console.log($("#sDate").val());

	console.log(startDate.getMonth());
	console.log(startDate.getDate());
	console.log(endDate.getMonth());
	console.log(endDate.getDate());
	endDateString = formatDate2(endDate);


	$("#cDate").val(endDateString);
	console.log($("#cDate").val());
	console.log(endDate.getMonth());
	console.log(endDate.getDate());

	//$.datepicker.setDefaults({
	//	showOn: 'button',
	//	buttonImageOnly: true,
	//	dateFormat: 'mm/dd/yy'});

	//$('#sDate').datepicker();
	//$('#cDate').datepicker();


//	endDateString = endDate.getFullYear() + "-0" + (endDate.getMonth() + 1) + "-0" + endDate.getDate();
}

function initialize_dates() {
	//
	// Seed with today's date.
	//
	set_end_date_per_start_date('initial');
}

function formatDate(date)
{
	if (date.getMonth() < 10 && date.getDate() < 10)
	{
		dateString = date.getFullYear() + "-0" + (date.getMonth() + 1) + "-0" + date.getDate();
	}
	else if (date.getMonth() < 10 && date.getDate() > 9)
	{
		dateString = date.getFullYear() + "-0" + (date.getMonth() + 1) + "-" +date.getDate();
	}
	else if (date.getMonth() > 9 && date.getDate() < 10)
	{
		dateString = date.getFullYear() + "-" + (date.getMonth() + 1) + "-0" + date.getDate();
	}
	else
	{
		dateString = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
	}

	date = new Date(dateString);
	return date;
}

function formatDate2(date)
{
	if (date.getMonth() < 10 && date.getDate() < 10)
	{
		dateString = date.getFullYear() + "-0" + (date.getMonth() + 1) + "-0" + date.getDate();
	}
	else if (date.getMonth() < 10 && date.getDate() > 9)
	{
		dateString = date.getFullYear() + "-0" + (date.getMonth() + 1) + "-" +date.getDate();
	}
	else if (date.getMonth() > 9 && date.getDate() < 10)
	{
		dateString = date.getFullYear() + "-" + (date.getMonth() + 1) + "-0" + date.getDate();
	}
	else
	{
		dateString = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
	}

	return dateString;
}
