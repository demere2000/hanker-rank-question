function processData(input) {
    var lines = input.split('\n');
    var dimension = parseInt(lines[0]);
    var grid = [];
    for(var i = 1; i <= dimension; ++i)
    {
        grid.push(lines[i]);
    }
    displayPathtoPrincess(dimension, grid);
}

function displayPathtoPrincess(dimension, grid)
{
    // Your Code here
    // Find Mario ('m') and Princess Peach ('p') positions
  let marioRow, marioCol, princessRow, princessCol;
  for (let i = 0; i < dimension; i++) {
    for (let j = 0; j < dimension; j++) {
      if (grid[i][j] === 'm') {
        marioRow = i;
        marioCol = j;
      }
      if (grid[i][j] === 'p') {
        princessRow = i;
        princessCol = j;
      }
    }
  }

  // Calculate the row and column differences
  const rowDiff = princessRow - marioRow;
  const colDiff = princessCol - marioCol;

  // Determine the moves to rescue Princess Peach
  if (rowDiff < 0) {
    for (let i = 0; i < -rowDiff; i++) {
      console.log('UP');
    }
  } else {
    for (let i = 0; i < rowDiff; i++) {
      console.log('DOWN');
    }
  }

  if (colDiff < 0) {
    for (let i = 0; i < -colDiff; i++) {
      console.log('LEFT');
    }
  } else {
    for (let i = 0; i < colDiff; i++) {
      console.log('RIGHT');
    }
  }
}


process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";

process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
