// from data.js
let tableData = data;
let tbody = d3.select("tbody");
let city = [...new Set(data.map(x => x.city))].sort();
let state = [...new Set(data.map(x => x.state))].sort();
let country = [...new Set(data.map(x => x.country))].sort();
let shape = [...new Set(data.map(x => x.shape))].sort();

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
populate_table(data);

function populate_cities(data){
    d3.select("#city").html("")
    d3.select("#city").append("option").text("Any")
    city.forEach((option)=>{
        d3.select("#city").append("option").text(option)})
};
    
//     d3.select("#state>option").text(state)
//     d3.select("#country>option").text(country)
//     d3.select("#shape>option").text(shape)
// };

populate_cities(data)

