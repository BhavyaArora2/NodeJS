var rect={
  area:(x,y)=>(x*y),
  perimeter:(x,y)=>(2*(x+y))
};

function solveRect(l,b){
console.log("the length is l="+l +"and breadth b is="+b);
if(l<=0||b<=0){
  console.log("l and b should be greater than zero");
}
else{
  console.log("area of rect is:"+rect.area(l,b)+ "perimeter is"+rect.perimeter(l,b));
}
}
solveRect(2,3);
solveRect(0,3);
