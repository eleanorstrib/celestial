// TODO: make argument company name
// Glassdoor
// sample query
var GDCompanyAPIQuery = "http://api.glassdoor.com/api/api.htm?t.p=5317&t.k=n07aR34Lk3Y&userip=0.0.0.0&useragent=&format=json&v=1&action=employers&q="
var userAgent ="chrome"
var userIP="localhost:8000"


function gdAPICompany(){
	apiCall="http://api.glassdoor.com/api/api.htm?t.p="+GDPartner+"&t.k="+GDKey+"&userip="+userIP+"&useragent="+userAgent+"&format=json&v=1&action=employers&q=brightroll"
	console.log(apiCall);
	$.ajax({
		url: apiCall,
		data: {
			format: 'json'
		},
		dataType: 'jsonp',
		success: function(data){
			var gd1 = JSON.stringify(data.response);
			console.log(gd1);
			document.getElementById("glassdoor").innerHTML=gd1;
		},
		error: function(){
			console.log("didn't work");
		},
		type: 'GET'
	})
};

gdAPICompany();
