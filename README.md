# programmers

<details>
<summary>sort</summary>
<div markdown="1">

```
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

```
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

```
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

```
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

```

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

### lv2 질문하기 참고해서 푼문제
- 카펫(테스트 케이스4,6,7 참고) - 노란색 격자의 가로가 긴 경우로 해결해야됌
