function solution(arr) {
    var sum = 0;
    for(var i=0; i<arr.length; i++){
        sum += arr[i]
    }
    console.log(sum)
    var answer = sum/arr.length;
    return answer;
}
