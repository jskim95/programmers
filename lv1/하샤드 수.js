// 1. 자릿수를 구하기 위해서 x를 문자열로 변환한다.
// 2. add 변수에 자릿수 합을 저장한다.
// 3. x/add 에서 나머지가 생기면 하샤드 수가 아니다.

function solution(x) {
    
    var strX = x.toString();
    var add = 0;
    var answer = true;
    
    for(var i=0; i<strX.length; i++){
        add += parseInt(strX[i])
    }
    console.log(add)
    if(x%add > 0){
        answer = false;
    }
    
    return answer;
}
