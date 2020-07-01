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
<summary>lv1(실패율)</summary>
<div markdown="1">

``` javascript
// 실패율은 구함
// 실패율을 내림차순 정렬하는거 공부하고 다시 풀기

function solution(N, stages) {
    var answer = [];
    var cal = [];
    var result = [];
    stages.sort()
    for(var i=0; i<N; i++) {
        if(i<N) {
            cal.push([])
        }   
        for(var j=0; j<stages.length; j++) {
            if(i+1 == stages[j]) {
                cal[i].push(stages[j])
            }
        }
    }
    console.log(cal)
    var len = stages.length
    var hash = {}
    for(var i=0; i<cal.length; i++) {
        answer.push(cal[i].length/len)
        len = len-cal[i].length
    }


    for(var j=0; j<answer.length; j++) {
        var max = Math.max.apply(null,answer)
        if(max == answer[j]) {      
            result.push(j+1)
            answer[j] = 0
            console.log(answer, result)
        }
    }       

    console.log(result)
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

### lv1 질문하기 참고해서 푼문제
- 모의고사
- 체육복
- 최대 공약수와 최소공배수(유클리드 호제법 참고)

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

### lv2 질문하기 참고해서 푼문제
- 카펫(테스트 케이스4,6,7 참고) - 노란색 격자의 가로가 긴 경우로 해결해야됌
