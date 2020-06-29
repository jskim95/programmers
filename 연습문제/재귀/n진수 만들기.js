// n진수 만들기







// 1. 기저조건 (주어진 값<n진수) 일경우 str변수에 값 저장
// 2. (num<2)값일 나올때까지 나누는 함수 실행(분할)
// 3. 나눈 횟수만큼 나머지를 구하는 함수 실행(정복)

function changeNumber(num) {
    var str = '';
    function again(num) {
        if(num<2) {
            str += num
            // console.log(str)
            return;
        } else {
            // console.log(num)
            again(Math.floor(num / 2));
            // console.log(num)
            again(num % 2)
        }
    }
    again(num)
    return str
}
console.log(changeNumber(1))
