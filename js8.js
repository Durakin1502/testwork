let testData = [1, 2, 1990, 85, 24, "Vasya", "colya@example.com", "Rafshan", "ashan@example.com", true, false];

function array_skip_until(arr, value){
  return arr.slice((arr.indexOf(value)=== -1)?arr.length+1:arr.indexOf(value));
}

console.log(array_skip_until(testData, 'Vasya'));
console.log(array_skip_until(testData, 'sas'));
console.log(array_skip_until(testData, 2))
