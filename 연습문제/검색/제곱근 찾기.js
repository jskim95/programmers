문제)
해당 숫자의 제곱근을 찾아라

예시)
9 => 3
81 => 9
16 => 4

예시 설명)
9의 제곱근은 3이다
81의 제곱근은 9이다






// 선형 탐색
function squareNum(num) {
  if(num == 0 || num == 1) {
    return num
  }

  var index = 1;
  var square = 1;

  while(square < num) {
    if(square == num) {
      return square
    }
    index++;
    square = index*index
  }
  return index;
}
console.log(squareNum(4)) // 2





// 이진 탐색
function fastSquareNum(num) {
  if(num == 0 || num == 1) {
    return num;
  }
  var start = 1;
  var end = num;
  var ans = 0;

  while(start<= end) {
    var mid = parseInt((start+end)/2);

    if(mid*mid == num) {
      return mid;
    }

    if(mid*mid<num) {
      start = mid+1;
      ans = mid;
    } else {
      end = mid-1
    }
  }
  return ans;
}

console.log(fastSquareNum(36)) // 6
