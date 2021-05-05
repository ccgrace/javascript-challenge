// from data.js
let tableData = data;
let tbody = d3.select("tbody");

data.forEach((sightings) => {
    let row = tbody.append("tr");
    Object.entries(sightings).forEach(([key, value]) => {
        let cell = row.append("td");
        cell.text(value);
    });
});


let filterTable = d3.select(".btn")

filterTable.on("click", function filter_table(){
    tbody.html("");
    let date = d3.select("#datetime").property("value")
    dateFilter = data.filter(sightings => sightings.datetime === date)

    dateFilter.forEach((sightings) => {
        let row = tbody.append("tr");
        Object.entries(sightings).forEach(([key, value]) => {
            let cell = row.append("td");
            cell.text(value);
        });
    });
});