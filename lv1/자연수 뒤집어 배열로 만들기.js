// 자연수 뒤집어 배열로 만들기

// 문제 설명
// 자연수 n을 뒤집어 각 자리 숫자를 원소로 가지는 배열 형태로 리턴해주세요.
// 예를들어 n이 12345이면 [5,4,3,2,1]을 리턴합니다.

// 제한 조건
// n은 10,000,000,000이하인 자연수입니다.

// 입출력 예
// n	return
// 12345	[5,4,3,2,1]


// 풀이
// 1. 입력값 문자열로 변환
// 2. answer 배열에 str배열 마지막 값 정수형으로 변환후 삽입

function solution(n) {
    var str = n.toString();
    var answer = [];
    console.log(str + " " + str.length)
    
    for(var i=0; i<str.length; i++){
        answer[i] = parseInt(str[(str.length-i)-1])
    }
    
    console.log(answer)
    return answer;
}
