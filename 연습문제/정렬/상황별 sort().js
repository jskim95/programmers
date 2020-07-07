상황별 sort()함수 사용하기




// 1. 문자열 길이순으로 정렬하기
var arr1 = ['orange', 'apple', 'banananananas', 'unwatch', 'star', 'a']

arr1.sort(function lengthSort(a, b) {
  return a.length - b.length;
})

console.log(arr1) // [ 'a', 'star', 'apple', 'orange', 'unwatch', 'banananananas' ]





// 2. a의 위치에 따라 정렬하기
var arr2 = ['orange', 'apple', 'unwatch', 'star', 'a','nnnnnnna']

arr2.sort(function positionSort(a, b) {
  return a.indexOf("a") - b.indexOf('a')
})
console.log(arr2) // [ 'apple', 'a', 'orange', 'star', 'unwatch', 'nnnnnnna' ]




// 3. 객체 속성의 개수에 따라 정렬하기
var obj = [
  {prop1:1, prop2:2,},
  {prop1:1, prop2:2, prop3:3, prop4:4, prop5:5, },
  {prop:1, }
]

obj.sort(function keyLengthSort(a, b) {
  return Object.keys(a).length - Object.keys(b).length;
})
console.log(obj)
// [
//   { prop: 1 },
//   { prop1: 1, prop2: 2 },
//   { prop1: 1, prop2: 2, prop3: 3, prop4: 4, prop5: 5 }
// ]
