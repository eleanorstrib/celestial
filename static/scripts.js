
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

// gdAPICompany();

// LINKEDIN AUTHENTICATION
// Setup an event listener to make an API call once auth is complete
function onLinkedInLoad() {
    IN.Event.on(IN, "auth", getProfileData);
}

// Handle the successful return from the API call
function onSuccess(data) {
    console.log(data);
}

// Handle an error response from the API call
function onError(error) {
    console.log(error);
}

// Use the API call wrapper to request the member's basic profile data
function getProfileData() {
    IN.API.Raw("/people/~").result(onSuccess).error(onError);
}