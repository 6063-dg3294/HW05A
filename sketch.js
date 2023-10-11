let table;

function preload(){
  table = loadTable('HighestHolywoodGrossingMovies.csv', 'csv', 'header');
}


function setup() {

  createCanvas(windowWidth, windowHeight);
  // let rows = table.getRows();
  // console.log(table);


  // for (let r = 0; r < table.getRowCount(); r++){
  //   // const name = table.getString(r, "World Wide Sales (in $)")
  //   // console.log(name)
  //   background(0)
  
  let column = table.getColumn(9);
  //print it column by column
  //note: a row is an object, not an array
  for (let c = 0; c < table.getRowCount(); c++) {
    let x = table.getString(c, 9) / 300000
    let y = table.getString(c, 9) / 500000
    print(table.getString(c, 9))
    ellipse(x, y, 25, 25)



  }

    



  }
    
    

  




function draw() {

}
