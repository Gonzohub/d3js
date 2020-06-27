// @TODO: YOUR CODE HERE!
const path = '/assets/data/data.csv';

var svgWidth = 960;
var svgHeight = 500;

var margin = {
    top: 20,
    right: 40,
    bottom: 60,
    left: 100
  },
    width = svgWidth - margin.left - margin.right,
    height = svgHeight - margin.top - margin.bottom;


var svg = d3.select("#scatter")
            .append("svg")
            .attr("width", svgWidth)
            .attr("height", svgHeight);

var chartGroup = svg.append("g")
    .attr("transform", `translate(${margin.left}, ${margin.top})`);

d3.csv(path).then(function(data) {
    
console.log([data]);

        //removing redundancy of typing data[i]."something"
        

        //defining x-axis
        var x = d3.scaleLinear()
            .domain(d3.extent(data, d => d.age))
            .range([0, width]);
        
        chartGroup.append("g")
            .attr("transform", "translate(0," + height + ")")
            .call(d3.axisBottom(x))

        //defining y axis
        var y = d3.scaleLinear()
            .domain([0, 40])
            .range([height, 0]);
        chartGroup.append("g")
            .call(d3.axisLeft(y));

        chartGroup.append('g')
        .selectAll("dot")
        .data(data)
        .enter()
        .append("circle")
            .attr("cx", function (d) { return x(d.age); } )
            .attr("cy", function (d) { return y(d.smokes); } )
            .attr("r", 1.5);

        
            //var circleLabels = circlesGroup
            //.selectAll("text")
            //.data(censusData).enter().append("text");
    });