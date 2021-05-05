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

// Populates dropdown menus with uniqe entries from data elements
function populate_cities(data){
// grabs city menu and clears contents 
    d3.select("#city").html("")
// appends an ANY element to maintain the option
    d3.select("#city").append("option").text("Any")
// grabs city menu and appends a new option elemnt
    city.forEach((option)=>{
        d3.select("#city").append("option").text(option)})
};

function populate_states(data){
    d3.select("#state").html("")
    d3.select("#state").append("option").text("Any")
    state.forEach((option)=>{
        d3.select("#state").append("option").text(option)})
};

function populate_contries(data){
    d3.select("#country").html("")
    d3.select("#country").append("option").text("Any")
    country.forEach((option)=>{
        d3.select("#country").append("option").text(option)})
};

function populate_shapes(data){
    d3.select("#shape").html("")
    d3.select("#shape").append("option").text("Any")
    shape.forEach((option)=>{
        d3.select("#shape").append("option").text(option)})
};

populate_cities(data);
populate_states(data);
populate_contries(data);
populate_shapes(data);

let filterTable = d3.select(".btn")

filterTable.on("click", function filter_table(data){
    let filteredCity = d3.select("#city");
    let filteredState = d3.select("#state");
    let filteredCountry = d3.select("#country");
    let filteredShape = d3.select("#shape");
    tbody.html("");
    data.forEach((sightings) => {
        let row = tbody.append("tr");
        Object.entries(sightings).forEach(([key, value]) => {
            if (value = filteredCity || filteredState || filteredCountry || filteredShape){
                let cell = row.append("td");
                cell.text(value);
            }
        });
    });
});