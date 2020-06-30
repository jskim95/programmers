// 배열 합치기

// 중복되지 않은 값을 새로운 배열에 저장하시오.





var arr1 = [1,2,3,4,5,10]
var arr2 = [6,6,7,7,8,8,9,9]

function addArray(arr1, arr2) {
  var add = new Set(arr1.concat(arr2))
  return Array.from(add)
}

console.log(addArray(arr1,arr2)) // [1, 2, 3, 4, 5, 10, 6, 7, 8, 9]
