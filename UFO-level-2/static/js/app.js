// from data.js
let tableData = data;
let tbody = d3.select("tbody");
let city = [...new Set(data.map(x => x.city))]
let state = [...new Set(data.map(x => x.state))]
let country = [...new Set(data.map(x => x.country))]
let shape = [...new Set(data.map(x => x.shape))]

// data.forEach(city.push(data.city))

// Populates the table with all the data from the data file
function populate_table(data){
    data.forEach((sightings) => {
        let row = tbody.append("tr");
        Object.entries(sightings).forEach(([key, value]) => {
            let cell = row.append("td");
            cell.text(value);
        });
    });
};


function populate_dropdowns(table_data){
    let options = d3.select("#city>option").attr("value", "").text(city)}

populate_table(data)
