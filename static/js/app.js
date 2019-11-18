// from data.js
var tableData = data;

var button = d3.select("#filter-btn");
button.on("click", function() {
    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");
    console.log(inputValue);
});

function selectInput(exactdate) {
    return exactdate.datetime === "1/1/2010";
}

var searchResults = data.filter(selectInput);
console.log(searchResults);

var table = d3.select("table");
var tbody = d3.select("tbody");

for (var i = 0; i < searchResults.length; i++) {
var row = tbody.append("tr");
row.append("td").text(searchResults[i].datetime);
row.append("td").text(searchResults[i].city);
row.append("td").text(searchResults[i].state);
row.append("td").text(searchResults[i].country);
row.append("td").text(searchResults[i].shape);
row.append("td").text(searchResults[i].durationMinutes);
row.append("td").text(searchResults[i].comments);

}



