// Calculate the cost of hiring personal for the dates specified


document.getElementById("submit").addEventListener("click", process_form);


// This function calculates the number of weeks between the two dates

function monthsBetween(date1, date2) 
{

    // The number of milliseconds in one week
    var OneMonth = 1000 * 60 * 60 * 24 * 30;

    // Convert both dates to milliseconds
    var date1_ms = date1.getTime();
    var date2_ms = date2.getTime();

    // Calculate the difference in milliseconds
    var difference_ms = Math.abs(date1_ms - date2_ms);

    // Convert back to days and return
    return Math.round(difference_ms/OneMonth);
}

$("#calculate").bind( "click", function() { process_form() });

var source = $("#printable").html();
var template = Handlebars.compile(source);

function process_form() 
{	
	var empId = document.getElementById("empId").value;
	var fName = document.getElementById("fName").value;
	var lName = document.getElementById("lName").value;
	var posNum = document.getElementById("posNum").value;
	var empType = document.getElementById("empType").value;
	var sDate = document.getElementById("sDate").value;
	var cDate = document.getElementById("cDate").value;
	
	var glAcct = document.getElementById("glAcct").value;
	var rate = document.getElementById("rate").value;
	var hours = document.getElementById("hours").value;
	
	var supervisor = document.getElementById("supervisor").value;
	var phone = document.getElementById("phone").value;

	console.log(sDate);
	console.log(cDate);
	console.log(hours);
	console.log(rate);

	// return compensation to web page
	
	document.getElementById("compensation").value = calculate(sDate,cDate);
	var comp = document.getElementById("compensation").value;
	
	document.getElementById('text').innerHTML = template(data);
}

function calculate(sDate, cDate)
{
	// convert date string to date
	var date1 = new Date(sDate);
	var date2 = new Date(cDate);

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