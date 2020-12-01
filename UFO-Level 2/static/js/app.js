// from data.js
var tableData = data;
console.log(tableData);

// Reference to the table body
var tbody = d3.select("tbody");

// UFO sighting value for each column
tableData.forEach(function(ufoSighting) {
    console.log(ufoSighting);
    var row = tbody.append("tr");

    // Use 'Object.enrties' to console.log each UFO Sighting value
    Object.entries(ufoSighting).forEach(function([key, value]) {
        console.log(key, value);
        var cell = row.append("td");
        cell.text(value);
    });
});

// Select the button
var button = d3.select("#filter-btn");
button.on("click", function() {

    tbody.html("");

    var inputElement = d3.select("#input");
    var inputValue = inputElement.property("value");
    
    
    var filteredData = tableData.filter(sighting => sighting.datetime === inputValue  ||
                                                    sighting.city === inputValue  ||
                                                    sighting.state === inputValue  ||
                                                    sighting.country === InputValue  ||
                                                    sighting.shape === inputValue);

    console.log(filteredData);

    filteredData.forEach(function(selections) {

    console.log(selections);
    var row =tbody.append("tr");
    Object.entries(selections).forEach(function([key, value]) {
        console.log(key, value);
        var cell = row.append("td");
        cell.text(value);

        });
});
});


