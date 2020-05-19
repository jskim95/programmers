// 문자열 다루기 기본


    // 문제 설명
    // 문자열 s의 길이가 4 혹은 6이고, 숫자로만 구성돼있는지 확인해주는 함수, solution을 완성하세요. 예를 들어 s가 a234이면 False를 리턴하고 1234라면 True를 리턴하면 됩니다.
    // 
    // 제한 사항
    // s는 길이 1 이상, 길이 8 이하인 문자열입니다.
    // 입출력 예
    // s	return
    // a234	false
    // 1234	true
    
    // 막힌 부분
    
    테스트 11번 뭐가 문제인지 모르겠음
    문자길이 4, 6, 공백, 숫자형, 문자형 체크함
    
    // 풀이
    
    function solution(s) {
    var answer = true;
    if(s.length==4 || s.length==6) {       
       if(s*0 !== 0) {        
            answer = false
        } else if(s == " " || s == null) {
            answer = false
        } else {
            answer = true
        }
    } else {
        answer = false
    }
   
    return answer;
}
    
