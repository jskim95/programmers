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
