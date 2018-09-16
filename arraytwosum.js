function twoSum(arr, R) {
    //the array and the number or result of the sum you are looking to get
      var ij = [];
    //and empty array that will show us the two number that will give us as result R
      // go thru the array
      for (var i = 0; i < arr.length; i++) { 
    
        // compare the first number to the rest and each other
        for (var j = i + 1; j < arr.length; j++) {
    
          // the comparison should give as result R if not go back to the next number
          if (arr[i] + arr[j] === R) {
            //since at the end we would like the two numbers that added together give us R, we push them to the empty array
            ij.push([arr[i], arr[j]]);
          }
    
        }
    
      }
    
      // return the empty array that now should be filled with the numbers that add together will produce R
      return ij;
    
    }
    
    twoSum([4, 6, 3, -2, 12, 9], 10);