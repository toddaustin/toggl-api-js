# toggl-api-js

A simple js script calling the toggl reporting API. Outputs a projects name and total weekly time in HH:MM:SS.

No jQuery necessary. 

Script resides in js/reports.js. Html provided for example usage.

Simply call the function with Your Project ID and container class name as paramenters (See index.html for usage):

<code js>callTogglData('[Your Project ID]','project-info');</code>

Output:

## CES Reporting
Total time recorded this week: 10:44:07

## Training Inventory
Total time recorded this week: 05:09:28
