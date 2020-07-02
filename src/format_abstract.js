

const abs_view_group = d3.select('body')
.selectAll("div")
.data(abstract_data)
.enter()


var div_abs = d3.select('body')
  .append('div')
  .html("<h1> Interaction test: press L/R arrow key </h1>  <p>" + abstract_data[0].title );

var motion_states = 3;
var motion_key = 50*motion_states; // will fail after 50 left clicks

var numAbs = 3;
var currentsAbs = 50*numAbs; // will fail after 50 left clicks


window.addEventListener('keydown', (event) => {

switch(event.key) {
    case 'ArrowLeft':   motion_key = motion_key -1; break;
    case 'ArrowRight':  motion_key = motion_key +1; break;
}


var abs_state = motion_key%numAbs;

switch(abs_state){
    
    case 0: div_abs.html( (d,i) => {return "<h1> Hi </h1>  <p>" + abstract_data[abs_state].title + "</p>" }); break;
    case 1: div_abs.html( (d,i) => {return "<h1> Hi </h1>  <p>" + abstract_data[abs_state].title + "</p>" }); break;
    case 2: div_abs.html( (d,i) => {return "<h1> Hi </h1>  <p>" + abstract_data[abs_state].title  +"</p>" }); break;
}
//section_text.transition().duration(500);
})
