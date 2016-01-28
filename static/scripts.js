
// TODO: make argument company name
// Glassdoor
// sample query
var GDCompanyAPIQuery = "http://api.glassdoor.com/api/api.htm?t.p=5317&t.k=n07aR34Lk3Y&userip=0.0.0.0&useragent=&format=json&v=1&action=employers&q="
var userAgent ="chrome"
var userIP="localhost:8000"
var companyQuery = "tubemogul"


function gdAPICompany(){
	console.log(GDPartner);
	apiCall="http://api.glassdoor.com/api/api.htm?t.p="+GDPartner+"&t.k="+GDKey+"&userip="+userIP+"&useragent="+userAgent+"&format=json&v=1&action=employers&q="+companyQuery
	console.log(apiCall);
	$.ajax({
		url: apiCall,
		data: {
			format: 'json'
		},
		dataType: 'jsonp',
		success: function(data){
			console.log(data.response);
		},
		error: function(){
			console.log("didn't work");
		},
		type: 'GET'
	})
};

gdAPICompany();

function onLILogin(){
	alert("logging in");
}