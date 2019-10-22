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
