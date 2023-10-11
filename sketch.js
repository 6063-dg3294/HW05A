let table;

function preload(){
  table = loadTable('HighestHolywoodGrossingMovies.csv', 'csv', 'header');
}


function setup() {

  createCanvas(windowWidth, windowHeight);
  background(0)
  strokeWeight(0)
  // let rows = table.getRows();
  // console.log(table);


  // for (let r = 0; r < table.getRowCount(); r++){
  //   // const name = table.getString(r, "World Wide Sales (in $)")
  //   // console.log(name)
  //   background(0)
  
  let column9 = table.getColumn(9);
  let column8 = table.getColumn(8);
  print(column8)
  print (min(column9))
  print (max(column9))
  
  
  //print it column by column
  //note: a row is an object, not an array
  for (let c = 0; c < table.getRowCount(); c++) {
    const name = table.getString(c, "Title")
    const posx = random(0, width)
    const posy = random(0, height)
    let x = table.getNum(c, 9) 
    // C9 max & min map
    const fixX = map(x, 179968873, 2923706026, 20, 200);
    // C8 max & min map
    let y = table.getNum(c, 8) 
    const fixY = map(y, 84925523, 2138484377, 20, 200);
    let i = table.getNum(c, 9) 
    const fixI = map(i, 179968873, 2923706027, 20, 255)



    // print(table.getString(c, 9))
    textAlign(CENTER);
    fill(100, fixI, fixI)
    ellipse(posx, posy, fixX, fixY)
    
    fill(200, 150, 100)
    textSize(8)
    text(name, posx, posy)




  }

    



  }
    
    

  




function draw() {

}
