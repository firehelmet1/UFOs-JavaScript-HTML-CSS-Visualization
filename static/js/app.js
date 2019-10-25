// from data.js
var tableData = data;

// Define Button, Table Body variables

var button = d3.select("#filter-btn");
var tbody = d3.select("tbody");

// Button is clicked, data read in and filtered, output results to HTML
button.on ("click", function () {
    // Capture input text value 
    var inputText = d3.select("#datetime");
    var inputValue = inputText.property("value");
    console.log(inputValue);
    
    // Clear existing Table values - reference - https://www.daniweb.com/programming/web-development/threads/113340/delete-all-rows-from-table-in-javascript
    for(var i = document.getElementById("ufo-table").rows.length; i > 0;i--)
        {
        document.getElementById("ufo-table").deleteRow(i -1);
        }

    // Filter and print out results to console
    var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);
    console.log(filteredData);
   
    // Append HTML table with filteredData
    filteredData.forEach((event) => {
        var row = tbody.append("tr");
        Object.entries(event).forEach(([key, value]) => {
          var cell = row.append("td");
           cell.text(value);
        });
    });
});
