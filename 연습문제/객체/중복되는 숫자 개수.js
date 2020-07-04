중복되는 숫자 개수를 구하시오

예시)
var arr1 = [1,1,2,2,3,3,4,4,5,5] => [2,2,2,2,2]
var arr2 = [1,1,1,1,3,4,5,6,6,6] => [4,3]
var arr3 = [1,2,3,4,5] => [-1]

주의)
중복되는 숫자가 없을 경우 return [-1]




function commonValue(arr) {
  arr.sort()
  var hash = {}
  var answer = []
  for(var i=0; i<arr.length; i++) {
    if(!hash[arr[i]]) {
      hash[arr[i]] = 1
    } else {
      hash[arr[i]]++
    }
  }
  for(var prop in hash) {
    if(hash[prop] >1) {
      answer.push(hash[prop])
    }
  }
  if(answer.length == 0) {
    answer.push(-1)
  }
  return answer

}
console.log(commonValue([1,1,2,2,3,3,4,4,5,5]))
console.log(commonValue([1,1,1,1,3,4,5,6,6,6]))
console.log(commonValue([1,2,3,4,5]))
