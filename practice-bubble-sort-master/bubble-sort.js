
function bubbleSort(arr) {
  let hasSwapped = false;
      // Iterate through the array

        // If the current value is greater than its neighbor to the right
        while(true){
          // Swap those values
  for (let i = 0; i <arr.length; i++){
      if(arr[i] > arr[i+1]){
      [arr[i], arr[i+1]] = [arr[i+1], arr[i]];
      hasSwapped = true;

          // Do not move this console.log
          console.log(arr.join(","));
    }
    }
    if(!hasSwapped) return
    hasSwapped =false
  }
     // If you get to the end of the array and no swaps have occurred, return

      // Otherwise, repeat from the beginning

  }

  module.exports = bubbleSort;
