// 문자열 내 p와 y의 개수

// 문제 설명
// 대문자와 소문자가 섞여있는 문자열 s가 주어집니다.
// s에 'p'의 개수와 'y'의 개수를 비교해 같으면 True, 다르면 False를 return 하는 solution를 완성하세요.
// 'p', 'y' 모두 하나도 없는 경우는 항상 True를 리턴합니다.
// 단, 개수를 비교할 때 대문자와 소문자는 구별하지 않습니다.
// 예를 들어 s가 pPoooyY면 true를 return하고 Pyy라면 false를 return합니다.

// 제한사항
// 문자열 s의 길이 : 50 이하의 자연수
// 문자열 s는 알파벳으로만 이루어져 있습니다.

// 입출력 예
// s	answer
// "pPoooyY"	true
// "Pyy"	false

// 입출력 예 설명
// 입출력 예 #1
// 'p'의 개수 2개, 'y'의 개수 2개로 같으므로 true를 return 합니다.
// 입출력 예 #2
// 'p'의 개수 1개, 'y'의 개수 2개로 다르므로 false를 return 합니다.



// 풀이

// 1. 대소문자 구별하지 않기 때문에 문자열을 모두 대문자 또는 소문자로 바꾼다.

// 2. s변수에 p와 y 갯수 찾는 조건문


// 3. 조건문

// 1) p의 갯수와 y 개수가 같을때 
// 2) p의 갯수와 y 개수가 다를때
// 3) p와y가 하나도없을때

function solution(s){
    var a = s.toLowerCase() ;
    var countP = 0;
    var countY = 0;
    var answer = true;
    
    for(var i=0; i<a.length; i++){
        if(a[i] == "p") {
            countP++;
        } else if (a[i] == "y") {
            countY++;
        }       
    }
    
    if(countP == countY){
        answer = true;
    } else if(countP !== countY){
        answer = false;
    } else{
        answer = true;
    }
   
    

    return answer;
}
