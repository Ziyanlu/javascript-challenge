// from data.js
var tableData = data;

var table = d3.select("table");
var tbody = d3.select("tbody");

function buildTable(results) {
    tbody.html("");
    for (var i = 0; i < results.length; i++) {
    var row = tbody.append("tr");
    row.append("td").text(results[i].datetime);
    row.append("td").text(results[i].city);
    row.append("td").text(results[i].state);
    row.append("td").text(results[i].country);
    row.append("td").text(results[i].shape);
    row.append("td").text(results[i].durationMinutes);
    row.append("td").text(results[i].comments);
    }
}

var button = d3.select("#filter-btn");
button.on("click", function() {
    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");
    console.log(inputValue);

    var searchResults = data.filter(ufo => ufo.datetime == inputValue);
    console.log(searchResults);
    buildTable(searchResults);
});


buildTable(tableData);


