var arr = [1, 2, 3, 4];

Array.prototype.append = function (appended){
  for(let i = this.length-1; i >= 0; i--){
    this[i+1] = this[i]
  }
  this[0] = appended
}
arr.append(6)

console.log(arr)
