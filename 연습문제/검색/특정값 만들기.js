문제)
배열의 값들을 더해서 주어진 숫자 만들기

예시)
var arr1 = [1,3,5,7,9];
num = 10
result => true

예시 설명)
arr1[0]와 arr1[4]를 합치면 10이 나오므로 return true





function makeNum(arr, num) {
  for(var i=0; i<arr.length; i++) {
    for(var j=i+1; j<arr.length; j++) {
      if(arr[i]+arr[j] == num) {
        return true
      }
    }
  }
  return false
}
console.log(makeNum([1,3,5,7,9], 14))





function fastMakeNum(arr, num) {
  // store => {'구해야하는 값 - arr[i]번째 값' : arr[i]번째 값}
  var store = {}
  for(var i=0; i<arr.length; i++) {
    console.log(store)
    if(store[arr[i]]) {
      return true;
    } else {
      store[num-arr[i]] = arr[i]
    }
  }
  return false;
}

console.log(fastMakeNum([1,3,5,7,9], 14))
