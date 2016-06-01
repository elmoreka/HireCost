// Calculate the cost of hiring personal for the dates specified


document.getElementById("submit").addEventListener("click", cost);


// This function calculates the number of weeks between the two dates

function weeksBetween(date1, date2) 
{

    // The number of milliseconds in one week
    var OneWeek = 1000 * 60 * 60 * 24 * 7;

    // Convert both dates to milliseconds
    var date1_ms = date1.getTime();
    var date2_ms = date2.getTime();

    // Calculate the difference in milliseconds
    var difference_ms = Math.abs(date1_ms - date2_ms);

    // Convert back to days and return
    return Math.round(difference_ms/OneWeek);
}

function cost() 
{	
	var custname = document.getElementById("custname").value;
	var address = document.getElementById("address").value;
	var city = document.getElementById("city").value;
	var state = document.getElementById("state").value;
	var zip = document.getElementById("zip").value;
	var email = document.getElementById("email").value;
	var phone = document.getElementById("phone").value;
	var position = document.getElementById("position").value;
	var message = document.getElementById("message").value;

	var sDate = document.getElementById("sDate").value;
	var cDate = document.getElementById("cDate").value;

	var rate = document.getElementById("rate").value;
	var hours = document.getElementById("hours").value;
	
	console.log(date1);
	console.log(date2);
	console.log(hours);
	console.log(rate);


	// convert date string to date
	var date1 = new Date(sDate);
	var date2 = new Date(cDate);

	console.log(date1);
	console.log(date2);

	// retrieve number of weeks
	var weeks = weeksBetween(date1, date2);

	console.log(weeks);

	// calculate total hours and compensation
	var comp = rate * hours * weeks;
	var tHours = hours * weeks;

	console.log(comp);
	console.log(tHours);

	// return total hours and compensation to web page
	
	document.getElementById("tHours").value = tHours;
	document.getElementById("compensation").value = comp;
}