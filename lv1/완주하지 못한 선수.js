// 1. participant 와 completion를 인덱스별로 비교하기위해서 sort 정렬 사용
// 2. participant의 배열 길이만큼 반복문 실행
// 3. participant인덱스와 completion의 인덱스에 값 비교
// 4. if조건문에서 값이 다를 경우 answer에 값을 저장하고 return

function solution(participant, completion) {
    participant.sort();
    completion.sort();
    
    for(var i=0; i<participant.length; i++){
        
        if(participant[i] !== completion[i])  {           
            var answer = participant[i];
            return answer;   
            }
        
    }

}
