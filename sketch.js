let table;

function preload(){
  table = loadTable('HighestHolywoodGrossingMovies.csv', 'csv', 'header');
}


function setup() {
  // print(table.getRowCount() + ' total rows in table');
  // print(table.getColumnCount() + ' total columns in table');
  // print(table.getColumn('name'));
  createCanvas(windowWidth, windowHeight);


  console.log(table);


}

function draw() {
}
