function rangeOfNumbers(startNum, endNum) {
    if (startNum > endNum) {
      return [];
    } else {
       const res = rangeOfNumbers(startNum, endNum-1)
       res.push(endNum)
       return res; 
    }
   };
   console.log(rangeOfNumbers(1,5))