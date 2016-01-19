function makeBlockColumnAll( ) {
  // build a column of different block types
  // the variable i will contain the block ID	
  var i ;
  // bookmark the drone's position so it can return there later
  this.chkpt('mystartposition'); 
  // in this example we go from block type 1 to 50
  for ( i = 1; i <= 50; i++ ) {
	    // this will include LAVA and WATER in the column
		// make one block of specified ID, and then move up one block higher
		this.box(i, 1, 1, 1).up(1);
  }
  // return the drone to where it started
  this.move('mystartposition'); 
};
var Drone = require('drone'); 
Drone.extend( makeBlockColumnAll );