let ArrValue = new Array(9).fill(0).map((i,index) => index + 1).filter((i) => i%2==0).reduce((acc,current)=> acc+current,0);
console.log(ArrValue); 