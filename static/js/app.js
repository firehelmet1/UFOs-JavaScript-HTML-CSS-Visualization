// from data.js
var tableData = data;

// Define Button, Table Body variables

var button = d3.select("#filter-btn");
var tbody = d3.select("tbody");

// Append HTML table with filteredData
tableData.forEach((event) => {
    var row = tbody.append("tr");
    Object.entries(event).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
        });
    });

// Button is clicked, data read in and filtered, output results to HTML
button.on ("click", function () {
    
    // Capture input textbox values
    var inputText1 = d3.select("#datetime");
    var inputText2 = d3.select("#city");
    var inputText3 = d3.select("#state");
    var inputText4 = d3.select("#country");
    var inputText5 = d3.select("#shape");

    var inputValue1 = inputText1.property("value");
    var inputValue2 = inputText2.property("value");
    var inputValue3 = inputText3.property("value");
    var inputValue4 = inputText4.property("value");
    var inputValue5 = inputText5.property("value");


    //console.log(inputValue);
    
    // Clear existing Table values - reference - https://www.daniweb.com/programming/web-development/threads/113340/delete-all-rows-from-table-in-javascript
    for(var i = document.getElementById("ufo-table").rows.length; i > 0;i--)
        {
        document.getElementById("ufo-table").deleteRow(i -1);
        }
    
    
    // Filter and print out results to console
    
    if (inputValue1 !== "") {
        var filteredData1 = tableData.filter(sighting => sighting.datetime === inputValue1);
      }
      else {var filteredData1 = tableData
      }
    if (inputValue2 !== "") {
        var filteredData2 = filteredData1.filter(sighting => sighting.city === inputValue2);
      } 
      else {var filteredData2 = filteredData1
      }  
    if (inputValue3 !== "") {
        var filteredData3 = filteredData2.filter(sighting => sighting.state === inputValue3);
      }
      else {var filteredData3 = filteredData2
      }
    if (inputValue4 !== "") {
        var filteredData4 = filteredData3.filter(sighting => sighting.country === inputValue4);
      }
      else {var filteredData4 = filteredData3
      }
    if (inputValue5 !== "") {
        var filteredData5 = filteredData4.filter(sighting => sighting.shape === inputValue5);
      }
      else {var filteredData5 = filteredData4
      }


    console.log(filteredData2);
   
    // Append HTML table with filteredData
    filteredData5.forEach((event) => {
        var row = tbody.append("tr");
        Object.entries(event).forEach(([key, value]) => {
          var cell = row.append("td");
           cell.text(value);
        });
    });
});
