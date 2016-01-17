/**
 * Retrieves data from the Toggle API
 * @param  {String} project   project id to retrieve
 * @param  {String} thisClass class of container to hold returned data
 * Usage: callTogglData('projectID','.yourClass');
 */
function callTogglData(project, thisClass){
	var myKey, dataContainer, requestHeaders;
 	myKey = 'Basic ' + window.btoa('[Your API Key]' + ':api_token');
 	dataContainer = $(thisClass);
    requestHeaders = { 'Authorization' : myKey };
	$.ajax({
	    url: 'https://toggl.com/reports/api/v2/weekly',
	    data: {user_agent: '[YourUserID_youremail@example.com]', workspace_id: '[Your Workspace ID]', project_ids: project},
	    headers: requestHeaders,
	    success: function(data){
	    	var duration, seconds, minutes, hours;
	        duration = data.total_grand;
	        seconds = parseInt((duration/1000)%60),
		    minutes = parseInt((duration/(1000*60))%60),
		    hours = parseInt((duration/(1000*60*60))%24);

	        hours = (hours < 10) ? "0" + hours : hours;
	        minutes = (minutes < 10) ? "0" + minutes : minutes;
	        seconds = (seconds < 10) ? "0" + seconds : seconds;

	        dataContainer.append('<h3>' + data.data[0].title.project + '</h3><p>Total time recorded this week: ' + hours + ':' + minutes + ':' + seconds + '</p>');
	    }
	});
}

