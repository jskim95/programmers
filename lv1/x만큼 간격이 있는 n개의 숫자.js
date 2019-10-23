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
