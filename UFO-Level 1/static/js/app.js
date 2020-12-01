// // from data.js
// var tableData = data;
// // var tblColumns = ["datetime", "city", "state", "country", "shape", "durationMinutes", "comments"]
// console.log(tableData);

// // Get a reference to the table body
// var tbody = d3.select("tbody");
// var searchDate = d3.select("#searchDate");
// var btnSearch = d3.select("#btnSearch");
// var btnReset = d3.select ("#btnReset");


// var loadTableRows = (whichData)  => {

//     tbody.html("");

//         whichData.forEach(dataRow => {

//             var tbleRow = tbody.append("tr");

//             tblColmns.forEach(column => tbleRow.append("td").text(dataRow[column]))

//         });

// }

// loadTableRows(tableData);


// btnSearch.on("click", () => {
//         d3.event.preventDefault();

//     // var searchedDate = searchDate.property("value");
//     // var searchedCity = searchCity.property("value");
//     // var searchedState = searchState.property("value");
//     // var searchedCountry = searchCountry.property("value");
//     // var searchedShape = searchShape.property("value");

//         var searchedDate = searchDate.property("value");    

//         var tableDate_Filtered = tableData.filter(tableData => tableData.datetime === searchedDate);

//             if(tableData_Filtered.length !== 0) {
//                 loadTableRows(tableData_Filtered);
//             }
//             else {
//                 tbody.html("");
//                 tbody.append("tr").append("td").text("No sightings on this date")
//             }
//         })
//         // else if(searchedCity) {
//         //     var tableDate_Filtered = tableData.filter(tableData => tableData.city === searchedCity);

//         //     if(tableData_Filtered.length !== 0) {
//         //         loadTableRows(tableData_Filtered);
//         //     }
//         //     else {
//         //         tbody.html("");
//         //         tbody.append("tr").append("td").text("No sightings on this date")
//         //     }

//         // }
//         // else if(searchedState) {
//         //     var tableDate_Filtered = tableData.filter(tableData => tableData.state === searchedState);

//         //     if(tableData_Filtered.length !== 0) {
//         //         loadTableRows(tableData_Filtered);
//         //     }
//         //     else {
//         //         tbody.html("");
//         //         tbody.append("tr").append("td").text("No sightings on this date")
//         //     }

//         // }
//         // else if(searchedCountry) {
//         //     var tableDate_Filtered = tableData.filter(tableData => tableData.country === searchedCountry);

//         //     if(tableData_Filtered.length !== 0) {
//         //         loadTableRows(tableData_Filtered);
//         //     }
//         //     else {
//         //         tbody.html("");
//         //         tbody.append("tr").append("td").text("No sightings on this date")
//         //     }

//         // }
//         // else if(searchedShape) {
//         //     var tableDate_Filtered = tableData.filter(tableData => tableData.shape === searchedShape);

//         //     if(tableData_Filtered.length !== 0) {
//         //         loadTableRows(tableData_Filtered);
//         //     }
//         //     else {
//         //         tbody.html("");
//         //         tbody.append("tr").append("td").text("No sightings on this date")
//         //     }


// btnReset.on("click", () => {

//     document.getElementById("searchDate").value='';


//     loadTableRows(tableData);


// })




// from data.js
var tableData = data;
console.log(tableData);

// Get a reference to the table body
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

    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");
    console.log(inputValue);
    var filteredData = tableData.filter(sighting => sighting.datetime === inputvalue);
    console.log(filteredData);

    filteredData.forEach(function(selections) {
    
    console.log(selections);
    var row =tbody.append("tr");
    Object.entries(selections).forEach(function([key, value]){
        console.log(key, value);
        var cell = row.append("td");
        cell.text(value);

    });


    });

});