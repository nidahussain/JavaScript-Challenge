// // from data.js
// var tableData = data;
// console.log(tableData);
var tableData = data;
console.log(tableData);


var tbody = d3.select("tbody")
console.log(data);

data.forEach(function(sightingReport) {
    console.log(sightingReport);
    var row = tbody.append("tr");
     Object.entries(sightingReport).forEach(function([key, value]) {
       console.log(key, value);
       var cell = tbody.append("td");
       cell.text(value);
     });
   });


var button = d3.select("#filter-btn");
var dateFilter = () => {
  d3.event.preventDefault();
  
  var inputElement = d3.select('#datetime');
  
  var inputValue = inputElement.property("value");

  // console.log(inputValue);
  // console.log(inputElement);

  
  var filteredData = tableData.filter(data => data.datetime === inputValue);
  console.log(filteredData)
// var inputElement = d3.select("#datetime");
  //  var inputValue = inputElement.property("value");
 

  var list = d3.select("tbody");

  list.html("");

  //append 
filteredData.forEach((filteredData) => {
  var row = tbody.append("tr");
  Object.entries(filteredData).forEach(([key, value]) => {
  var cell = row.append("td");
  cell.text(value);
  });
});

};


button.on('click', dateFilter);


d3.select("form").on('submit', dateFilter);