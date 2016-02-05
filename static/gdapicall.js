// // TODO: make argument company name
// // Glassdoor
// // sample query
// var userAgent ="chrome"
// var userIP="localhost:8000"


// function gdAPICompany(company){
// 	// check if the user has entered a company name
// 	// blanks will be ""
// 	if (company !== ""){
// 		apiCall="http://api.glassdoor.com/api/api.htm?t.p="+GDPartner+"&t.k="+GDKey+"&userip="+userIP+"&useragent="+userAgent+"&format=json&v=1&action=employers&q="+company
// 		console.log(company);
	
// 		$.ajax({
// 			url: apiCall,
// 			data: {
// 				format: 'json'
// 			},
// 			dataType: 'jsonp',
// 			success: function(data){
// 				var gdJSONResult = JSON.stringify(data.response);
// 				gdJSONResult = JSON.parse(gdJSONResult);
// 				console.log(gdJSONResult.employers);
// 				if ((gdJSONResult.employers).length === 1){
// 					gdAPICompanyResults.push(gdJSONResult);
// 					console.log('gdAPICompanyResults updated!');
// 				} else {
// 					clarifyQuery(company, gdJSONResult);
// 				}
// 			},
// 			error: function(){
// 				console.log("didn't work");
// 			},
// 			type: 'GET'
// 		});
// 	} 
// };

function clarifyQuery(company, gdAPIData) {
	$('#queryNoMatchModal').modal('show');
	console.log("search query not an exact match for " + company);
	console.log(" testing" + company + gdAPIData);
};



