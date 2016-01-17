/**
 * Retrieves data from the Toggle API
 * @param  {String} url       url to retrieve
 * @param  {String} thisClass class of container to hold returned data
 */
function callTogglData(project, thisClass){
    var xmlhttp;
    var url = 'https://toggl.com/reports/api/v2/weekly?workspace_id=[Your Workspace ID]]&user_agent=[Your User ID]&project_ids=' + project;
    // compatible with IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function(){
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200){
            myData = xmlhttp.responseText;
            thisData = JSON.parse(myData);
            duration = thisData.total_grand;
	      var seconds = parseInt((duration/1000)%60),
	          minutes = parseInt((duration/(1000*60))%60),
	          hours = parseInt((duration/(1000*60*60))%24);

	        hours = (hours < 10) ? "0" + hours : hours;
	        minutes = (minutes < 10) ? "0" + minutes : minutes;
	        seconds = (seconds < 10) ? "0" + seconds : seconds;
            content = '<h3>'+thisData.data[0].title.project + '</h3> <p>Total time recorded this week: ' + hours + ':' + minutes + ':' + seconds + '</p>';
            document.getElementsByClassName(thisClass)[0].innerHTML = content;
        }
    }
    myKey = 'Basic ' + window.btoa('[Your API Key]' + ':api_token');
	requestHeaders = { 'Authorization' : myKey };
    xmlhttp.open("GET", url, true);
    xmlhttp.setRequestHeader('Authorization',myKey);
    xmlhttp.send();
  
}