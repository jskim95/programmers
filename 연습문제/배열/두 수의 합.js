주어진 값을 배열 안의 2개를 합쳐서 만드시오.
(만들수 없는 경우 답 : -1)

arr = [1, 4, 7, 10, 15]
sum = 11

답 : [3, 0] 










// 1. arr[0] ~ arr[arr.length-1] 값을 current값에 넣는다
// 2. difference 변수에 sum-current 값을 넣는다
// 3. else문에서 hash객체의 (key = difference값), (value = current값)
//    hash객체에는 key+value는 sum이 되는값이 저장된다
// 4. if문에서 hash[current]의 의미는 
//    현재값이 4인데 hash객체에 difference값이 4인 경우가 있는지 찾는 경우다
//    그러므로 return(i, hash[current]) => 현재값 : 4, 나머지값 : (6-4 = 2)인 hash객체 값을 return한다 

function findSumBetter(arr, sum) {
    var hash = {};
    
    for(var i=0; i<arr.length; i++) {
        var current = arr[i]
        var difference = sum - current;
        
        if(hash[current] != undefined) {
            return [i, hash[current]];
        } else {
            hash[difference] = i
        }
    }
    return -1
}
console.log(findSumBetter([1,2,3,4,5], 6))
