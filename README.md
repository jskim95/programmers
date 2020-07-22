# programmers

<details>
<summary>sort</summary>
<div markdown="1">

``` javascript
arr = [1, 3, 7, 5, 21, 13, 44]

1. 오름차순
arr.sort(function (a,b){ return a-b; }) // [ 1, 3, 5, 7, 13, 21, 44 ]

2. 내림차순
arr.sort(function (a,b){ return b-a; }) // [ 44, 21, 13, 7, 5, 3, 1 ]

3. 문자열 길이순
var arr1 = ['orange', 'apple', 'banananananas', 'unwatch', 'star', 'a']

arr1.sort(function lengthSort(a, b) {
  return a.length - b.length;
})

console.log(arr1) // [ 'a', 'star', 'apple', 'orange', 'unwatch', 'banananananas' ]

4. a의 위치에 따라 정렬
var arr2 = ['orange', 'apple', 'unwatch', 'star', 'a','nnnnnnna']

arr2.sort(function positionSort(a, b) {
  return a.indexOf("a") - b.indexOf('a')
})
console.log(arr2) // [ 'apple', 'a', 'orange', 'star', 'unwatch', 'nnnnnnna' ]

5. 객체 속성의 개수에 따라 정렬
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
```

</div>
</details>

<details>
<summary>최댓값 최솟값</summary>
<div markdown="1">

``` javascript
var arr = [1, 2, 3]
var max = 0;
var min = 0;

- Number
max = Math.max(1, 2, 3) // 3
min = Math.min(1, 2, 3) // 1

- Array
max = Math.max.apply(null, arr) // 3
min = Math.min.apply(null, arr) // 1
```

</div>
</details>

<details>
<summary>이차원 배열 초기화</summary>
<div markdown="1">

``` javascript
arr = [1,2,3]
col = []

for(var i=0; i<arr.length; i++) {
  col.push([i])
}

console.log(col) // [[0],[1],[2]]
```

</div>
</details>

<details>
<summary>최대공약수, 최소공배수</summary>

<div markdown="1">

- 유클리드 호제법
  - 최대공약수 -> 큰수%작은수 == 0 일때까지 재귀 호출(0일 경우 작은수가 최대 공약)
  - 최소공배수 -> (큰수*작은수)/최대공약수

```
예시) 34, 52

최대 공약수
52%32 = 20
32%20 = 12
20%12 = 8
12%8 = 4
8%4 = 0       >> 4 최대 공약수

최소 공배수
(52*32)/최대 공약수

```
</div>
</details>

<details>
<summary>무한루프 빠져나오기</summary>
<div markdown="1">

``` javascript
var count = 0;
while(true) {
  count++
  if(count == 10) {
    return false
  }

  ... 소스

}
```

</div>
</details>

<details>
<summary>split</summary>
<div markdown="1">

``` javascript
// 문자열을 특정 기준에 맞게 배열로 바꿔주는 함수

var a = "helloWorld"
var b = "h e l l o W o r l d"
var c = "h-e-l-l-o-W-o-r-l-d"

var aa = a.split("")
var bb = b.split(" ")
var cc = c.split("-")

console.log(aa) // 	[ 'h', 'e', 'l', 'l', 'o', 'W', 'o', 'r', 'l', 'd' ]
console.log(bb) // 	[ 'h', 'e', 'l', 'l', 'o', 'W', 'o', 'r', 'l', 'd' ]
console.log(cc) // 	[ 'h', 'e', 'l', 'l', 'o', 'W', 'o', 'r', 'l', 'd' ]

```

</div>
</details>

<details>
<summary>얕은복사, 깊은복사</summary>
<div markdown="1">

``` javascript
// 얕은 복사 -> 기존 배열에 영향을 끼침
// 깊은 복사 -> 기존 배열에 영향을 안끼침
var a = [12, 2, 34, 4] // 기존 배열
var b = a // 얕은 복사
var c = Array.from(a) // 깊은 복사

a.reverse() // 기존 배열 변경
c.push(123123) // 깊은 복사한 배열 변경

console.log(a) // 기존 배열
console.log(b) // 얕은 복사
console.log(c) // 깊은 복사
```

</div>
</details>

</div>
</details>

<details>
<summary>올림,버림,반올림</summary>
<div markdown="1">

``` javascript
1.올림
Math.ceil(변수)

2.버림
Math.floor(변수)

3.반올림
Math.round(변수)

4.소숫점길이 만큼 반올림
변수.toString(소숫점길이)

var num = 99.555
console.log(Math.ceil(num)) // 100
console.log(Math.floor(num)) // 99
console.log(Math.round(num)) // 100
console.log(num.toFixed(2)) // 99.56


```

</div>
</details>

<details>
<summary>substring</summary>
<div markdown="1">

```javascript

var str = '123456789';

// --------------------------------- substring ---------------------------------
// string.substring(start, end) - start인덱스 부터 end인덱스-1 까지 출력함
// string.substring(start) - start부터 마지막 인덱스 까지

console.log(str.substring(1,4)) // 234
console.log(str.substring(0)) // 123456789
console.log(str) // 123456789

// --------------------------------- substr ---------------------------------
// string.substr(start, end) - start인덱스 부터 end인덱스-1 까지 출력함
// string.substr(start) - start부터 마지막 인덱스 까지
console.log(str.substr(0,4)) // 1234
console.log(str.substr(5)) // 6789
console.log(str) // 123456789


```

</div>
</details>

<details>
<summary>대문자, 소문자</summary>
<div markdown="1">

```

```

</div>
</details>

<details>
<summary>아스키코드</summary>
<div markdown="1">

``` javascript
// 아스키 코드표
// https://m.blog.naver.com/PostView.nhn?blogId=diceworld&logNo=220175224345&proxyReferer=https:%2F%2Fwww.google.com%2F
  1. 자바스크립트 charCodeAt 사용방법 (문자열을 아스키 코드로 변환)
  "문자열".charCodeAt([문자열 자릿수]);

  2. 자바스크립트 fromCharCode 사용방법 (아스키코드를 문자열로 변환)
  "문자열".fromCharCode([아스키코드값]);



  var str = '123456789';
  // --------------------------------- 문자열을 아스키 코드로 변환 ---------------------------------
  console.log(str.charCodeAt([0])) // 49
  console.log(str.charCodeAt([8])) // 57
  console.log(str.charCodeAt([9])) // NaN

  // --------------------------------- 아스키코드를 문자열로 변환 ---------------------------------
  console.log(String.fromCharCode(89)) // Y
  console.log(String.fromCharCode(65, 83, 67, 73, 73)) // ASCII





```

</div>
</details>

<details>
<summary>2진수</summary>
<div markdown="1">

```

```

</div>
</details>

<details>
<summary>slice, splice</summary>
<div markdown="1">

```

```

</div>
</details>

<details>
<summary>reverse</summary>
<div markdown="1">

```javascript
// 배열.reverse() => (O)
// 문자열.reverse() => (X)
// 숫자.reverse() => (X)
var a = 'hello'
var b = [1, 2, 3, 4, 5]
var c = 12345

console.log(a.reverse()) // TypeError: a.reverse is not a function
console.log(b.reverse()) // [ 5, 4, 3, 2, 1 ]
console.log(c) // TypeError: c.reverse is not a function
```

</div>
</details>

### 막힌 문제


<details>
<summary>lv2(가장큰수)</summary>
<div markdown="1">

``` javascript
막힌 부분numbers에 있는 값을cal 변수에 2차원 배열로 넣었는데 그이후에 막힘
ex)
<!-- numbers = [12, 24, 33, 1, 51]
cal = [[1, 2], [2, 4], [3, 3], [1], [5, 1]]
이 상태에서 cal[i][0]이 큰 수를 가장 우선으로 answer변수에 넣고
만약 cal[i][0]와 cal[i+1][0]이 같은경우에는
반복문을 통해 큰수를 찾으려고 하는데 머리가 막힘 -->

function solution(numbers) {
    var answer = '';
    var cal = []
    var a = numbers.sort().reverse().join(" ")
    var num = 0
    for(var i=0; i<numbers.length; i++) {
        cal.push([])
        for(var j=num; j<a.length; j++) {
            if(a[j] !== " ") {
                cal[i].push(a[j])
                num++
            } else {
                num++
                break;
            }
        }
    }

    console.log(a)
    console.log(cal)
    var count = 0;
    while(cal.length>0) {
        count++
        if(count == 10) {
            break;
        }
        for(var i=0; i<cal.length; i++) {
            if(i < cal.length-1 &&cal[i][0] > cal[i+1][0]) {
                answer += cal[i]
                cal.shift()
                break;
            } else {
                answer += cal[i+1]
                break;
            }
        }
    }
    console.log(answer)

    return answer;
}

// 2차 시도
function solution(numbers) {
    var answer = '';
    var a = numbers.join(",")
    var cal = []

    for(var i=0; i<numbers.length; i++) {
        cal.push([])
        for(var j=0; j<a.length; j++) {
            if(a[j]*1 >=0 ) {
                cal[i].push(a[j])
            } else {
                a = a.substr(j+1)
                break;
            }
        }
    }
    cal.sort().reverse()

    for(var i=0; i<cal.length-1; i++) {
        for(var j=0; j<cal[i].length-1; j++) {
            if(cal[i][j] == cal[i+1][j] && cal[i][j+1]<cal[i+1][j]) {  
                var temp = cal[i]
                cal[i] = cal[i+1]
                cal[i+1] = temp
            }
        }
        answer += cal[i]
    }
    answer += cal[i]
    var result = ''
    for(var i=0; i<answer.length; i++) {
        if(answer[i]*1 >=0) {
            result += answer[i]
        }
    }
    console.log(typeof result)
    return result;
}
```

</div>
</details>

<details>
<summary>lv2(타겟 넘버)</summary>
<div markdown="1">

``` javascript
// taget/number 하고 몫 만큼 +, - 계산하기
// ex)
// 3/1 == 3 이므로 순수 +3개, (+, -)0개 되게 만들기
// dfs, bfs 공부하고 다시 풀기
// -1+1+1+1+1 = 3
// +1-1+1+1+1 = 3
// +1+1-1+1+1 = 3
// +1+1+1-1+1 = 3
// +1+1+1+1-1 = 3
function solution(numbers, target) {
    var answer = 0;
    for(var i=0; i<numbers.length; i++) {
        var cal = 0;
        for(var j=0; j<numbers.length; j++) {
            if(cal > target) {
                cal -=  numbers[j]
                continue;
            }
            if(cal <= target) {
                cal += numbers[j]
                if(cal == target) {
                    continue;
                }
            }
        }
        if(cal==target && j==numbers.length) {
            answer++
        }
    }
    return answer;
}
```

</div>
</details>

<details>
<summary>lv2(위장)</summary>
<div markdown="1">

``` javascript
// 순열 공부하고 다시 풀기
function solution(clothes) {
    var answer = clothes.length;
    var hash = {};
    var tail = [];
    var sum = [];

    for(var i=0; i<clothes.length; i++) {
        tail = null;
        for(var j=0; j<clothes[i].length; j++) {
            var value = clothes[i][1]
            if(tail != value) {
                if(!hash[value]) {
                    hash[value] = 1
                } else {
                    hash[value]++
                }
            }
            tail = value
        }
    }
    console.log(hash)
    if(Object.keys(hash).length>1) {
        var cal = [];
        for(var value in hash) {
            cal[value] = hash[]
        }
    }
    return answer;
}
```

</div>
</details>

<details>
<summary>lv2(영어 끝말잇기)</summary>
<div markdown="1">

``` javascript

function solution(n, words) {
    var answer = [1, 1]; // 끝말잇기 시작할때 순서, 차례 초기값 설정
    var countTurn = -1; // 0부터 시작하면 차례가 초기화 제대로 안되서 -1부터 시작
    var countPeople = 0;
    // 모든사람 순서 돌았을때 차례,순번 초기화 함수
    function reset() {
        answer[1]++
        countTurn = 0
        countPeople = 1
    }

    for(var i=0; i<words.length-1; i++) {
        countTurn++
        countPeople++
        var last = words[i].length-1 // 해당 단어 마지막 글자

        if(countTurn == n) {
            reset()
        }
        // console.log(i, answer, countTurn, countPeople)
        if(words[i][last] == words[i+1][0]) {
            for(var j=0; j<=i-1; j++) {
                //  해당 순서 사람이 중복단어를 말했을 경우
                // (i!= j) 하는 이유는 다른 순서에서 중복 단어를 사용했는지 체크하기 위해서
                if(words[i] == words[j] && i!==j) {
                    answer[0] = countPeople
                    return answer
                //  해당 순서 다음 사람이 중복단어를 말했을 경우
                } else if(words[i+1] == words[j] && i!==j) {
                    countTurn++
                    countPeople++
                    if(countTurn == n) {
                        reset()
                        return answer
                    } else {
                        answer[0] = countPeople
                        return answer
                    }
                }
            }
        // 다음 사람이 끝말잇기를 틀렷을 경우
        } else if(words[i][last] !== words[i+1][0]) {
            countTurn++
            countPeople++
            if(countTurn == n) {
                reset()
            }
            return answer
        }         
    }
    // 끝까지 아무도 안틀렷을 경우
    answer[0] = 0
    answer[1] = 0
    return answer
}

```

</div>
</details>

<details>
<summary>lv3(베스트앨범)</summary>
<div markdown="1">

``` javascript
// 제한 조건
// 1. 장르 별로 가장 많이 재생된 노래를 두 개씩 모아 베스트 앨범을 출시
// 2. 속한 노래가 많이 재생된 장르를 먼저 수록합니다.
// 3. 장르 내에서 많이 재생된 노래를 먼저 수록합니다.
// 4. 장르 내에서 재생 횟수가 같은 노래 중에서는 고유 번호가 낮은 노래를 먼저 수록합니다.


// 장르별 재생횟수 내림차순까지는 만들었는데
// 베스트 앨범에 2개 혹은 1개씩 return 하는법을 모르겠음

// [ [ 4, 'pop', 2500 ],
//   [ 3, 'classic', 800 ],
//   [ 1, 'pop', 600 ],
//   [ 0, 'classic', 500 ],
//   [ 2, 'classic', 150 ] ]

function solution(genres, plays) {
    var answer = [];
    var arr = [];

    for(var i=0; i<genres.length; i++) {
        arr.push([])
        arr[i].push(i)
        arr[i].push(genres[i])
        arr[i].push(plays[i])
    }

    arr.sort(function(a, b) {
        return b[2] - a[2]
    })

    console.log(arr)
    return answer;
}
```

</div>
</details>

<details>
<summary>lv3(멀리 뛰기)</summary>
<div markdown="1">

``` javascript
// 순열 조합 공부하고 다시 풀기

function solution(n) {
    var answer = 1;
    var count = 0;
    var double = 2
    var value = n
    while(true) {
        var num = 0;
        if(value-double>=0) {
            num = (value-double)%1234567
            answer += (num+1)%1234567
        } else {
            break;
        }
        double = (double*2)%1234567
    }
    return answer;
}
```

</div>
</details>

<details>
<summary>lv2(오픈채팅방)</summary>
<div markdown="1">

``` javascript
// 배열로 접근하니깐 한계를 느낌
// 객체로 다시 풀어보자.

  // 현재 출력
  // 'Muzi님이 들어왔습니다.',
  // 'Prodo님이 들어왔습니다.',
  // 'Muzi님이 나갔습니다.',
  // 'Prodo님이 들어왔습니다.'

  function solution(record) {
      var answer = '';
      var arr = [];
      var obj = {};

      for(var i=0; i<record.length; i++) {
          arr.push([])
          arr[i] = record[i].split(" ")
      }
      // 들어왔다가 아이디 바꾼 경우 고유 아이디로 구분 해서 바꿔주기
      // change로 들어왔을때 닉네임 바꾸기
      // answer = answer.replace(/Muzi/g, arr[i][2]) /Muzi/ 이부분을 변수로 하는법을 모르겠음
      for(var i=0; i<arr.length; i++) {
          if(arr[i][0] == 'Enter') {
              for(var k=0; k<arr.length; k++) {
                  if(k<i && arr[i][1] == arr[k][1]) {
                      var temp = arr[k][2]
                      // console.log(/arr[k][2]/g)
                      console.log(temp)
                      answer = answer.replace(/Muzi/g, arr[i][2])
                      break;
                  }
              }
              answer += arr[i][2]+'님이 들어왔습니다.'
          } else if(arr[i][0] == 'Leave') {
              for(var j=0; j<arr.length; j++) {
                  if(arr[i][1] == arr[j][1]) {
                      answer += arr[j][2]+'님이 나갔습니다.'
                      break;
                  }
              }
          }
      }
      // console.log(arr)
      return answer;
  }
```

</div>
</details>

<details>
<summary>lv3(야근 지수)</summary>
<div markdown="1">

``` javascript
// 555 4
// (344) 9, 16, 16 => 41
// (335) 9, 9 25 =>  43

// 풀이
// 1. works배열 내림차순 (제곱할때 큰값부터 -1 해야 최솟값이 나올꺼 같아서)
// 2. works배열 요소가 0과 같거나 작으면 continue로 넘기고 큰 경우는 -1 해주기
// 3. n == 0 이면 각 works요소 제곱하고 answer return

function solution(n, works) {
    var answer = 0;
    works.sort(function (a, b) {
        return b-a;
    })
    while(n>0) {

        for(var i=0; i<works.length; i++) {
            n--
            if(works[i]>0) {
                works[i] = works[i]-1
                if(n == 0) {
                    break
                }
            } else {
                continue;
            }
        }
        if(n==0) {
            for(var j=0; j<works.length; j++) {
                answer += works[j]*works[j]
            }
            return answer
        }
    }
    return answer;
}
```

</div>
</details>

<details>
<summary>lv3(네트워크)</summary>
<div markdown="1">

``` javascript
// 컴퓨터 갯수 == 3
// 컴퓨터 연결구조 == [[1, 1, 0], [1, 1, 0], [0, 0, 1]]
// 네트워크 갯수 == 	2

// 주의 사항
// i번 컴퓨터와 j번 컴퓨터가 연결되어 있으면 computers[i][j]를 1로 표현합니다.
// computer[i][i]는 항상 1입니다.

// 풀이 방법
// 1 반복문 : 이중배열에서 0번째 인덱스(computers[i]) 부터 접근
// 2 반복문 : computers[i]배열의 모든 요소 접근 computers[i][j], computers[j][i]이 연결되어 있는지 확인하기 위해서
// 3 반복문 : computers[i][j], computers[j][i]네트워크 연결되어있다면 모든 computers[모든 인덱스][i] = 0으로 바꿔서 n-- 중복 실행 안되게 하기

실패 원인 분석
0번째 인덱스에서 1,2 연결이 되어있는데
1번째 인덱스에서 2번과 중복으로 연결되어서 n--를 중복으로함
3, [[1, 1, 1], [1, 1, 1], [1, 1, 1]]
기댓값 〉	1
실행 결과 〉	실행한 결괏값 0이(가) 기댓값 1와(과) 다릅니다.

출력 〉
i : 0, j : 1, n : 3
[ [ 1, 0, 1 ], [ 0, 1, 1 ], [ 1, 1, 1 ] ]
i : 0, j : 2, n : 2
[ [ 1, 0, 0 ], [ 0, 1, 1 ], [ 0, 1, 1 ] ]
i : 1, j : 2, n : 1
[ [ 1, 0, 0 ], [ 0, 1, 0 ], [ 0, 0, 1 ] ]

function solution(n, computers) {
    var answer = 0;
    for(var i=0; i<computers.length; i++) {
        for(var j=i+1; j<computers[i].length; j++) {
            if(computers[i][j] == 1 && computers[j][i] == 1) {
                console.log(`i : ${i}, j : ${j}, n : ${n} `)
                computers[i][j] = 0
                computers[j][i] = 0
                console.log(computers)
                n--
            }
        }
    }
    return n;
}
```

</div>
</details>

<details>
<summary>lv3(자물쇠와 열쇠)</summary>
<div markdown="1">

``` javascript

// 조건
// 1. 열쇠는 회전과 이동이 가능함
// 2. 열쇠를 이동해서 돌기 부분이 벗어나도 가능함
// 3. 자물쇠 영역 내에서는 열쇠의 돌기 부분과 자물쇠의 홈 부분이 정확히 일치해야 함
// 4. 열쇠의 돌기와 자물쇠의 돌기가 만나서는 안됌
// 5. 물쇠의 모든 홈을 채워 비어있는 곳이 없어야 자물쇠를 열 수 있슴


// 해결법
// 1단계 열쇠 배열전체를 회전 시킬줄 알아야함 시계방향 반시계방향 회전하는 알고리즘
// 1단계 열쇠 배열를 상하좌우 이동시키는 알고리즘

// 2단계 이동시 벗어나는 부분 예외 처리

// 3단계 회전해야할지 이동해야할지 구분하는 알고리즘
```

</div>
</details>

### 막혔던 문제

<details>
<summary>lv2(구명보트)</summary>
<div markdown="1">

``` javascript
// 못푼 이유
// people배열 sort할 때 정렬이 제대로 되지않아서
// 로직은 수정 안해도 되지만 실패가 많이 나옴

// 해결법
// people.sort(function(a,b) {
//     return a-b
// })

// 틀린 코드
function solution(people, limit) {
    var answer = 0;
    var index = 0;
    people.sort(...people)

        while(true) {
            index++
            if(people.length == 0) {
                break;
            }
            if(people.length == 1) {
                answer++
                break;
            }

            if(people[0]+people[people.length-index] <= limit && people.length-index>0) {
                answer += index
                people.splice(people.length-index, index)
                people.shift()            
                index = 0
            } else if(index>people.length && people.length !== 1) {
                answer += people.length
                break;
            }   
        }
    return answer;
}
```
</div>
</details>

<details>
<summary>lv2(튜플)</summary>
<div markdown="1">

``` javascript
// 못푼 이유

// [3, 2, 4, 1] => 답
// [ 3, 2, 1, 4, 3, 2, 3, 3, 2, 4 ] => 내가 만든 배열
// 위에 배열 처럼 값은 뽑았는데 어떻게 답처럼 정렬을 하는지 해결방법을 몰랐었는데

// 해결법
// 객체를 이용해서 중복 값을 알맞게 저장함

// 틀린 코드
function solution(s) {
    var answer = s.replace(/[{}]/g, "").split(',')
    console.log(answer) // [ 3, 2, 1, 4, 3, 2, 3, 3, 2, 4 ]
    return answer;
}

```

</div>
</details>

<details>
<summary>lv2(H-Index)</summary>
<div markdown="1">

``` javascript
// 못푼 이유
// 인용횟수 만큼 while문을 돌려서 너무 비효율 적이었고
// 논문수 1000편이고 인용횟수가 2000일때 h최댓값을 구할수 없음

// 해결법
// 내림차순하고 0번째 인덱스부터 인용횟수를 index = 0으로 지정하고
// 반복문을 통해서 index < 내림차순한 배열 값일때 index++ 계속함

// 틀린 코드
function solution(citations) {
    var answer = 0;
    var count = -1;
    while(true) {
        count++
        var h = 0;
        var max = Math.max(...citations)
        if(max == 0) {
            return 0
        } else if(max == count) {
            return count
        }

        for(var i=0; i<citations.length; i++) {
            if(citations[i] >= count) {
                h++
            }
        }
        if(count == h) {
            return h
        }
    }
    return answer;
}
```

</div>
</details>

<details>
<summary>lv2(짝지어 제거하기)</summary>
<div markdown="1">

``` javascript
// 못푼 이유
// 효율성이 안좋음

// 해결법
// stack을 이용함

// 틀린코드
function solution(s)
{
    var answer = 0;
    var cal = s.split("")
    for(var i=cal.length-1; i>0; i--) {

        if(cal[i-1] == cal[i]) {
            cal.splice(i-1, 2)
        }
    }
    if(cal.length ==0) {
        return 1
    } else {
        return 0
    }

    return answer;
}
```

</div>
</details>

<details>
<summary>lv2(올바른 괄호)</summary>
<div markdown="1">

``` javascript
// 못푼 이유
// 효율성 실패

// 해결법
// 스택 이용

// 틀린 코드
function solution(s){
    var answer = true;
    var total = []
    for(var i=0; i<s.length; i++) {
        total.push(s[i])
    }

    function again(total) {

        for(var j=0; j<total.length; j++) {
            if(total[j] ==="(" && total[j+1] ===")") {
                total.splice(j,2)
                again(total)
            }

        }
        if(total.length<1) {
            return answer = true
        } else {
            return answer = false
        }


    }
    again(total)
    return answer;
}

```

</div>
</details>

<details>
<summary>lv2(스킬트리)</summary>
<div markdown="1">


``` javascript
// 못푼 이유
// 순서는 뽑았는데 [0,1,2,0] [1,3,4] 순서를 못구하겠음
// skill_trees의 순서 값은 뽑았는데 올바른 스킬 순서인지 구분을 못했음

// 해결법
// skill_trees의 순서는 무조건 [0,1,2 ...]순서로 나와야된다는걸 깨달음

// 틀린 코드
function solution(skill, skill_trees) {
    var answer = 0;


        for(var i=0; i<skill_trees.length; i++) {
            var a = []
            for(var q=0; q<skill.length; q++) {
                a.push(0)
            }
            for(var j=0; j<skill_trees[i].length; j++) {
                for(var k=0; k<skill.length; k++) {
                    if(skill[k] == skill_trees[i][j]) {
                        a[k] = j+1

                    }
                }
            }
            console.log(a, i, j, k)
            answer++
            for(var w=0; w<a.length; w++) {
                if(w<a.length-1 && a[w]>a[w+1]) {
                    answer--
                    break;
                }
            }

        }


    return answer;
}
```

</div>
</details>

<details>
<summary>lv2(124 나라의 숫자)</summary>
<div markdown="1">

``` javascript

// 못푼 이유
// n의 값이 12이하일때 answer를 구하는 법을 찾지 못했음

// 해결법
// n:30이 answer:244가 만들어지는 과정을 일일히 써봄
// n == 30일때 n값 변화
// 1. (30-3)/3 => 9 ----> answer == '4'
// 2. (9-3)/3 => 2 ----> answer == '44'
// 3. 2일때는 if(n<=3)조건에 의해 ----> answer == '442'

// 틀린 코드
// 1 1     11 42       21 144
// 2 2     12 44       22 211
// 3 4     13 111      23 212
// 4 11    14 112      24 214
// 5 12    15 114      25 221
// 6 14    16 121      26 222
// 7 21    17 122      27 224
// 8 22    18 124      28 241
// 9 24    19 141      29 242
// 10 41   20 142      30 244

function solution(n) {
    var answer = '';
    var arr = [4,1,2]
    if(n<=3) {
        answer += arr[n%3]
        return answer
    }
    while(true) {
        answer += arr[n%3]
        n = Math.floor(n/3)
        if(Math.floor(n/3) <= 1) {
            answer += arr[n%3]
            break;
        }
    }
    var result = answer.split('').reverse().join('')
    console.log(result)
    return result;
}
```

</div>
</details>

<details>
<summary>lv2(프린터)</summary>
<div markdown="1">

``` javascript

// 못푼 이유
// 상황마다 location위치를 어떻게 처리해야 할지 몰랐음

// 해결법
// 임시 배열에 priorities 내림차순한 배열 임시 저장
// (if문) - priorities[0]번째 값과 내림차순[cnt]값(중요도가 높은순)이 같을때 인쇄
// (else문) - priorities[0]번째 값 맨뒤로 보내고 location값 = location-1
//            location < 0 이 되는순간 priorities.length-1로 바꿈
//            (그 이유는 해당 location 차례가 되었는데 중요도가 높은게 있기 때문에 맨뒤로 가기 때문)
// location이 0이면서 중요도가 제일 높을때 cnt값 return

// 틀린 코드
function solution(priorities, location) {
    var answer = 0;
    var count = 0;
    while(true) {
        var max = Math.max.apply(null, priorities)
        count++
        if(count == 10) {
            break;
        }
        if(priorities[location] == max) {
            return answer += 1
        }
        for(var i=priorities[location]; i<priorities.length; i++) {
            if(priorities[location] < priorities[i]) {
                answer += priorities.length-i
                priorities.splice(i, priorities.length-i)
                console.log(priorities)
            }
        }
    }
    return answer;
}
```

</div>
</details>

<details>
<summary>lv2(쇠막대기)</summary>
<div markdown="1">

``` javascript

// 못푼 이유
// 문제를 이해 못함

// 해결법
// ')'이 나올때 쇠막대기 조각 만들어지는 개수
// [0], [3, 3, 2, 3, 2, 1, 0(막대 마지막이므로 1)], [1, 0(막대 마지막이므로 1)]
// 스택을 이용해서 풀면됌

// 틀린 코드
// 못풀어서 없음
```

</div>
</details>

<details>
<summary>lv2(큰 수 만들기)</summary>
<div markdown="1">

``` javascript
// 못푼 이유
// 시간 초과

// 해결법
// 1. 가장 큰 수를 담을 임시 배열stack 생성
// 2. number 배열에서 차례로 꺼내면서 stack에 쌓인 값과 비교하여 stack push or pop
// 3. 끝까지 비교해도 k가 남아있으면 마지막 배열부터 제거

// 틀린 코드
function solution(number, k) {
    var answer = '';
    var count = 0;
    var stop = 0;
    var arr = number.split("")

    while(k>0) {
        stop++
        if(count == k) {
            break;
        } else if(stop > k) {
            var num = k-count
            var a = arr.splice(arr.length-num, num)
            break;
        }

        for(var i=0; i<arr.length-1; i++) {
            if(arr[i]<arr[i+1]) {
                count++
                arr.splice(i,1)
                break;
            }
        }
    }
    answer = arr.join("")
    return answer;
}

```

</div>
</details>



### lv1 푼 문제

#### 일반
1. 2016년
2. 가운데 글자 가져오기
3. 같은 숫자는 싫어
4. 두 정수 사이의 합
5. 모의고사
6. 문자열 내 마음대로 정렬하기
7. 문자열 내 p와 y의 개수
8. 문자열 내림차순으로 배치하기
9. 문자열 다루기 기본
10. 문자열을 정수로 바꾸기
11. 서울에서 김서방 찾기
12. 시저 암호
13. 수박수박수박수박수박수?
14. 약수의 합
15. 완주하지 못한 선수
16. 자릿수 더하기
17. 자연수 뒤집어 배열로 만들기
18. 정수 내림차순으로 배치하기
19. 정수 제곱근 판별
20. 제일 작은 수 제거하기
21. 짝수와 홀수
22. 체육복
23. 최대 공약수와 최소공배수
24. 콜라츠 추측
25. 평균 구하기
26. 하샤드 수
27. 핸드폰 번호 가리기
28. K번째수
29. x만큼 간격이 있는 n개의 숫자
30. 이상한 문자 만들기


#### 카카오
1. 예산
2. 크레인 인형뽑기 게임
3. [1차] 비밀지도
4. 실패율

### lv1 질문하기 참고해서 푼문제
- 모의고사
- 체육복
- 최대 공약수와 최소공배수(유클리드 호제법 참고)
- 실패율 - 테스트케이스 참고

### lv2 푼 문제
1. 기능개발
2. 최댓값과 최솟값
3. 최솟값 만들기
4. 탑
5. 피보나치 수
6. JadenCase 문자열 만들기
7. N개의 최소공배수
8. 다음 큰 숫자
9. 카펫
10. 숫자의 표현
11. 다리를 지나는 트럭
12. 예상 대진표
13. 점프와 순간 이동
14. 행렬의 곱셈
15. 구명보트
16. 튜플
17. H-Index
18. 짝지어 제거하기
19. 올바른 괄호
20. 스킬트리
21. 124 나라의 숫자
22. 프린터
23. 쇠막대기
24. 큰 수 만들기

### lv3 푼 문제
1. 타일 장식물

### lv2 질문하기 참고해서 푼문제
- 카펫(테스트 케이스4,6,7 참고) - 노란색 격자의 가로가 긴 경우로 해결해야됌
- 짝지어 제거하기 - 스택으로 풀면 O(N)으로 풀수있다고 질문하기에서 봄
- H-Index - 테스트 케이스 참고
- 큰 수 만들기 - 테스트 케이스 참고
- 구명보트 - 테스트 케이스 참고(배열 정렬할때는 function(a,b) return a-b 하기 그냥 sort하면 안될때도 있음)


### lv2 다른 사람 풀이 참고해서 푼문제
- 튜플 - {} 안의 숫자 갯수를 구하는 부분 참고
- H-Index - 배열값을 내림차순하고 인용횟수를 이용하는 부분 참고
- 짝지어 제거하기 - 임시 배열을 만들어서 비교하면서 stack을 이용해서 빼는 부분 참고
- 프린터 - 다른 사람 풀이봄
- 쇠막대기 - 다른 사람 풀이봄
- 큰 수 만들기 - 다른 사람 풀이참고(시간초과를 해결못함)


### lv3 질문하기 참고해서 푼 문제
- 멀리 뛰기 - 테스트 케이스 참고
