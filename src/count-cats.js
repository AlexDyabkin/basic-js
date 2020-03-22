module.exports = function countCats(backyard ) {
  var b = backyard.flat(Infinity);
  var count = 0;
  if(b.length === 0){
    return 0;
  } else {
    for(var i = 0; i < b.length; i++){
      if(b[i] === '^^') {
        count++;
      }
    }
  }  
  return count;
};
