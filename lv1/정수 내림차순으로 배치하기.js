// 정수 내림차순으로 배치하기

// 문제 설명
// 함수 solution은 정수 n을 매개변수로 입력받습니다.
// n의 각 자릿수를 큰것부터 작은 순으로 정렬한 새로운 정수를 리턴해주세요.
// 예를들어 n이 118372면 873211을 리턴하면 됩니다.

// 제한 조건
// n은 1이상 8000000000 이하인 자연수입니다.

// 입출력 예
// n	return
// 118372	873211





function solution(n) {
    var answer = 0;
    var a = n.toString()
    var b = [];
    
    for(var i=0; i<a.length; i++) {
        b[i] = a[i]
    }
    
    b.sort(function(a,b){
            return b-a;
        })
    
    answer = parseInt(b.join(""));
    console.log(answer)

    return answer;
}
