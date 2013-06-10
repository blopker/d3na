function sinData (x1, x2, dx, amp, offset) {
  var start = Math.min(x1, x2);
  var end = Math.max(x1, x2);

  var a = [];
  for (var i = start; i < end; i += dx) {
    a.push({
      'x': i,
      'y': amp * Math.sin(i + offset)
    });
  }
  return a;
}


function getDHelix (x1, x2, dx, amp) {
  var h1 = sinData(x1, x2, dx, amp, 0),
      h2 = sinData(x1, x2, dx, amp, 1.5);

  var a = [];
  for (var i = 0; i < h1.length; i++) {
    a.push({
      'a': h1[i],
      'b': h2[i]
    });
  }
  return a;
}


var w = 960,
    h = 500,
    cx = w/2,
    cy = h/2,
    scale = 100,
    z = d3.scale.category20c(),
    i = 0;
var data = getDHelix(-Math.PI, Math.PI, 0.1, 1);

var svg = d3.select("body").append("svg")
    .attr("width", w)
    .attr("height", h);


function getC (a, c) {
  return scale * a.y + c;
}

var c = svg.selectAll('rect')
  .data(data).enter().append('rect')
  .attr("cy", function(d) {return getC();})
  .attr("cx", function(d) {return scale * d.x + cx;})
  .attr('r', 2);


//     .style("pointer-events", "all")
//     .on("mousemove", particle);

// function particle() {
//   var m = d3.mouse(this);

//   svg.append("svg:circle")
//       .attr("cx", m[0])
//       .attr("cy", m[1])

//       .attr("r", 1e-6)
//       .style("stroke", z(++i))
//       .style("stroke-opacity", 1)
//     .transition()
//       .duration(2000)
//       .ease(Math.sqrt)
//       .attr("r", 100)
//       .attr('cy', 0)
//       .style("stroke-opacity", 1e-6)
//       .remove();

// }
