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

```

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

```

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

```

```

</div>
</details>

### 막힌 문제
<details>
<summary>lv2(구명보트)</summary>
<div markdown="1">
!! 한명 남았을때 반복문이랑 함수에서 못빠져나옴

입력값 〉	[10, 20, 30, 40, 50, 60, 70, 80, 90], 100  
출력 〉

배 갯수 : 0,   
남은 사람 몸무게: 10,20,30,40,50,60,70,80,90,  
최댓값+최솟값<무게제한 일대 까지 최댓값 감소하는 index : 1

배 갯수 : 1,  
남은 사람 몸무게: 20,30,40,50,60,70,80,  
최댓값+최솟값<무게제한 일대 까지 최댓값 감소하는 index : 1

배 갯수 : 2,  
남은 사람 몸무게: 30,40,50,60,70,  
최댓값+최솟값<무게제한 일대 까지 최댓값 감소하는 index : 1

배 갯수 : 3,
남은 사람 몸무게: 40,50,60,  
최댓값+최솟값<무게제한 일대 까지 최댓값 감소하는 index : 1

한명 일때  
한명 일때  
한명 일때  
한명 일때  
한명 일때  

섬에 한명 남았을때 처리를 다시 생각해봐야 할듯


``` javascript
// 2차 시도
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
                console.log('두명씩', people, index)
                answer += index
                people.splice(people.length-index, index)
                people.shift()            
                index = 0
            } else if(index>people.length && people.length !== 1) {
                // console.log('혼자씩', people)
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
<summary>lv2(스킬 트리)</summary>
<div markdown="1">


``` javascript
// 순서는 뽑았는데 [0,1,2,0] [1,3,4] 순서를 못구하겠음
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
<summary>lv2(프린터)</summary>
<div markdown="1">

``` javascript
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
<summary>lv2(위장)</summary>
<div markdown="1">

``` javascript
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
<summary>lv2(짝지어 제거하기)</summary>
<div markdown="1">

``` javascript
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
<summary>lv2(H-Index)</summary>
<div markdown="1">

``` javascript
// 11번케이스가 뭔지 모르겠음  
// 1. 모든 논문 인용0회일때 return 0처리  
// 2. h최댓값 처리함  
//
// 아마 논문수 1000편이하를 이용하면 될듯  

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
<summary>lv2(올바른 괄호)</summary>
<div markdown="1">

``` javascript
// 효율성 실패
// again함수 안에 반복문 스택으로 풀어보자

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
<summary>lv2(큰 수 만들기)</summary>
<div markdown="1">

``` javascript
// 10번 테스트케이스 시간초과
// 마지막 arr.join("")이 시간이 오래 걸리는거 같음
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

### lv2 질문하기 참고해서 푼문제
- 카펫(테스트 케이스4,6,7 참고) - 노란색 격자의 가로가 긴 경우로 해결해야됌
- 짝지어 제거하기 - 스택으로 풀면 O(N)으로 풀수있다고 질문하기에서 봄
- H-Index - 테스트 케이스 참고
- 큰 수 만들기 - 테스트 케이스 참고
- 구명보트 - 테스트 케이스 참고
