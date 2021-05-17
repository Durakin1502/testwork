let obj = {
  name: "Igor",
  haracter : {
    Int: 10,
    Str: 8
  }
}
function cloneDeep(cloneObj){
  return JSON.parse(JSON.stringify(cloneObj))
}
let clone = cloneDeep(obj)
clone.haracter.Int = 20
console.log(clone)
console.log(obj)
