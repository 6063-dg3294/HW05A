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
    const name = table.getString(c, "Title")
    const posx = random(0, width)
    const posy = random(0, height)
    let x = table.getString(c, 9) / 30000000
    const fixX = map(x, 0, 1000, 0, 500);
    let y = table.getString(c, 9) / 50000000
    const fixY = map(y, 0, 1000, 0, 500);
    let i = table.getString(c, 9) / 72255

    let yVel = table.getString(c, 9) / 5000000


    // print(table.getString(c, 9))
    textAlign(CENTER);
    fill(200, i, i)
    ellipse(posx, posy, fixX, fixY)
    
    fill(200, 150, 100)
    textSize(10)
    text(name, posx, posy)




  }

    



  }
    
    

  




function draw() {

}
