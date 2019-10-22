// 1. a변수에 입력값의 길이의 절반값을 정수형으로 저장
// 2. 조건문에서 입력값의 길이가 홀수일 경우 가운데 글자를 answer에 저장
// 3. 입력값의 길이가 짝수일 경우 가운데 두글자를 answer에 저장

function solution(s) {
    console.log(parseInt(s.length/2));
    var a = parseInt(s.length/2)
    
    if(s.length%2 == 1){
        console.log(s[a])
        var answer = s[a]
    } else {
        console.log(s[a-1]+s[a])
        var answer = s[a-1]+s[a]
    }
   
    return answer;
}
