function solveRect(l, b) {
  console.log("Solving for rectangle with l = " + l + " and b = " + b);
  rect(l, b, (err, rect) => {
    if (err) {
      console.log("ERROR: ", err.message);
    } else {
      console.log("The area of the rectangle of dimensions l = " + l + " and b = " + b + " is " + rect.area());
      console.log("The perimeter of the rectangle of dimensions l = " + l + " and b = " + b + " is " + rect.perimeter());
    }
  });
  console.log("This statement after the call to rect()");
};
solveRect(3,4);
solveRect(0,2);
solveRect(-1,-1);
