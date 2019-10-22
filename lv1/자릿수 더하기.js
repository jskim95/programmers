// 1. 숫자를 문자열로 변환
// 2. 문자열의 각 인덱스를 추출
// 3. 추출한 인덱스를 숫자로 바꿔서 answer에 저장
// 4. answer 추출

function solution(n)
{
    var number = n.toString()
    var answer = 0;
    
    for(var i=0; i<number.length; i++) {
        console.log(parseInt(number[i]))
        answer += parseInt(number[i])
        console.log(answer)
        
    }
    return answer;
   
    
}
