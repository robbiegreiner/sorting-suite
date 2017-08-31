function quickSort(array) {

  if (array.length <= 1){
    return array;
  }


  var pivot = array[array.length - 1];


  var leftArray = [];
  var rightArray = [];


  for ( var i = 0; i < array.length - 1; i++) {
    if (array[i] < pivot) {
      leftArray.push(array[i])
    }
    else rightArray.push(array[i])
  }

    return [...quickSort(leftArray), pivot, ...quickSort(rightArray)]

}


module.exports = quickSort
