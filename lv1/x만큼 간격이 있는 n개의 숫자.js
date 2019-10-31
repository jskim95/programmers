// x만큼 간격이 있는 n개의 숫자

// 문제 설명

// 함수 solution은 정수 x와 자연수 n을 입력 받아, 
// x부터 시작해 x씩 증가하는 숫자를 n개 지니는 리스트를 리턴해야 합니다.
// 다음 제한 조건을 보고, 조건을 만족하는 함수, solution을 완성해주세요.

// 제한 조건
// x는 -10000000 이상, 10000000 이하인 정수입니다.
// n은 1000 이하인 자연수입니다.

// 입출력 예
// x	n	answer
// 2	5	[2,4,6,8,10]
// 4	3	[4,8,12]
// -4	2	[-4, -8]




// 풀이
// 1. n은 answer 배열의 크기
// 2. answer[n-1] 값을 저장하기 위해 sum변수 선언한다. 초기값은 x를 넣는다.
// 3. 반복문을 사용해서 answer배열에 값을 삽입한다.
// 4. nswer[0]에 x 값 삽입한다
// 5. nswer[n]에는 answer[n-1] + x 값을 삽입한다.

function solution(x, n) {
    var answer = [];
    var sum = x;

    for(var i=0; i<n; i++){
        
        if(i == 0){
            answer[i] = sum;
        } else {
            sum += x;
            answer[i] = sum;
        }
    
    }
    
    return answer;
}
