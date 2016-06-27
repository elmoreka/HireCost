var source = $("#printable").html();
var template = Handlebars.compile(source);
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