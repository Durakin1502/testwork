let testData = [1, 2, 1990, 85, 24, "Vasya", "colya@example.com", "Rafshan", "ashan@example.com", true, false];

function array_find(arr, b){
  return arr.filter(el => b instanceof RegExp? b.test(el): new RegExp(b).test(el))
}

console.log(array_find(testData,1990))
console.log(array_find(testData,"Vasya"))
console.log(array_find(testData, /^Vas.*/i))
