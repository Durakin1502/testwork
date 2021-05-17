let testData = [1, 2, 1990, 85, 24, "Vasya", "colya@example.com", "Rafshan", "ashan@example.com", true, false];
let testData2 = [1, 2, 1990, 85, 24, 5, 7, 8.1,];
function arr_combain(keys, value){
  return keys
            .filter(key => typeof key === "string" || typeof key === "number" || typeof key === "object")
            .reduce((acc, key, index)=>{
              acc[key] = value[index];
              return acc;
            }, {})
}
console.log(arr_combain(testData, testData2));
