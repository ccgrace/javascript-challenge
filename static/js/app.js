// from data.js
let tableData = data;
let tbody = d3.select("tbody");

data.forEach(function(sightings) {
    console.log(sightings);
    let row = tbody.append("tr");
})
