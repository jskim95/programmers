// 배열 중복값 확인하기





var arr1 = [1,2,3,4,5]
var arr2 = [1,1,2,2,3,3,4,4,5,5]

function checkLength(arr) {
  var check = new Set(arr)
  return arr.length > check.size
}

console.log(checkLength(arr1)) // false 중복된값 없음
console.log(checkLength(arr2)) // true 중복된값 있음
