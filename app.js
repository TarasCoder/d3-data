const DUMMY_DATA = [
  { id: "d1", value: 10, region: "USA" },
  { id: "d2", value: 7, region: "China" },
  { id: "d3", value: 1, region: "India" },
  { id: "d4", value: 6, region: "Germany" },
];

const xScale = d3.scaleBand().domain(DUMMY_DATA.map((dataPoint)=> dataPoint.region)).rangeRound([0,250]).padding(0.1);
const yScale = d3.scaleLinear().domain([0, 15]).range([200, 0]);

const container = d3
  .select(".d3-test")
  .classed("container", true);

const bars = container.selectAll(".bar")
    .data(DUMMY_DATA)
    .enter()
    .append("rect")
    .text(data => data.region)
    .classed("bar", true)
    .attr("width", xScale.bandwidth())
    .attr("height", data => 200 - yScale(data.value))
    .attr("x", data => xScale(data.region))
    .attr("y", data => yScale(data.value));
