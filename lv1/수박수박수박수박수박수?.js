function solution(n) {
    var a = "수";
    var b = "박";
    var answer = '';
    for(var i = 0; i<n; i++)
        if(i%2 == 0){
            answer += a;
        } else{
            answer += b;
        }
    
    return answer;
}
