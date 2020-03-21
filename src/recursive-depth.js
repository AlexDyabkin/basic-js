module.exports = class DepthCalculator {
    calculateDepth(arr) {

        let i = 0;  
             while(arr.length){
                  i++;
                  arr = arr.reduce( (level, item) => {
                       if(Array.isArray(item)) level++;
                       return level;
                  }, []);
             }
             return i;
   }
};