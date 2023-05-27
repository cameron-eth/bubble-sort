
function bubbleSort(arr) {
  if (arr.length === 1) {
    console.log(arr.join(","));
    return;
  }
    // Iterate through the array
for (let i = 0; i < arr.length; i++){
  if(arr[i] > arr[i+1]) {
    let temp = arr[i];
    arr[i] = arr[i+1];
    arr[i+1] = temp;

    // bubbleSort(arr)
  }
// console.log(arr)
      // If the current value is greater than its neighbor to the right
        // Swap those values

        // Do not move this console.log
        console.log(arr.join(","));

    // If you get to the end of the array and no swaps have occurred, return

    // Otherwise, repeat from the beginning

}
}

module.exports = bubbleSort;
