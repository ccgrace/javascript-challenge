// from data.js
let tableData = data;
let tbody = d3.select("tbody");

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