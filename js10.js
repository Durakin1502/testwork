let testData = [1, 2, 1990, 85, 24, "Vasya", "colya@example.com", "Rafshan", "ashan@example.com", true, false];
let testData2 = [1, 2, 1990, 85, 24, 5, 7, 8.1];
function array_unique(arr){
  let res = []
  for(let el of arr){
    if(!res.includes(el)){
      res.push(el)
    }
  }
  return res
}
let result = array_unique(testData.concat(testData2))
console.log(result)
