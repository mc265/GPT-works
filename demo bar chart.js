// Sample data for the chart
const data = [
  { name: "A", value: 10 },
  { name: "B", value: 20 },
  { name: "C", value: 15 },
  { name: "D", value: 25 },
];

// Set up the dimensions for the chart
const width = 500;
const height = 300;

// Create an SVG container for the chart
const svg = d3.select("body")
  .append("svg")
  .attr("width", width)
  .attr("height", height);

// Create a scale for the x-axis
const xScale = d3.scaleLinear()
  .domain([0, d3.max(data, d => d.value)])
  .range([0, width]);

// Create a scale for the y-axis
const yScale = d3.scaleBand()
  .domain(data.map(d => d.name))
  .range([0, height])
  .padding(0.1);

// Create and append the bars to the chart
svg.selectAll("rect")
  .data(data)
  .enter()
  .append("rect")
  .attr("x", 0)
  .attr("y", d => yScale(d.name))
  .attr("width", d => xScale(d.value))
  .attr("height", yScale.bandwidth())
  .attr("fill", "steelblue");

// Add labels to the bars
svg.selectAll("text")
  .data(data)
  .enter()
  .append("text")
  .attr("x", d => xScale(d.value) + 10)
  .attr("y", d => yScale(d.name) + yScale.bandwidth() / 2)
  .attr("dy", "0.35em")
  .text(d => d.value)
  .attr("fill", "white");
