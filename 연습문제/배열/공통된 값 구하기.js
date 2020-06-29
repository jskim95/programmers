var arr1 = [1,1,1,2,3,4,5,6];
var arr2 = [1,3,5,7,9];
var arr3 = [1,5,7];

주어진 배열들 중에서 공통된 값을 구해서 return 하시오.



// 해설
// 1. arr1 -> arr2 -> arr3 순서로 2중반복문을 통해서 배열의 값들을 꺼낸다.
// 2. 꺼낸 값을 tail변수에 넣고 currentArray[j], currentArray[j-1] 값이 같을때는 if문을 통과한다
// 3. currentArray[j]값이 currentArray[j-1] 값과 다른경우 if문에 들어간다
// 4. arr1의 배열 경우 처음으로 들어가기 때문에 hash객체에 값이 없어서 1로 초기화 된다
// 5. arr2, arr3 경우 공통된 값이 들어가 있기 때문에 해당 객체의 값을 ++해준다
// 6. 3배열의 공통된 값을 구하기 때문에 for in문에서 객체의 값 = 총 배열의 크기 인경우 result변수에 push



var arr1 = [1,1,1,2,3,4,5,6];
var arr2 = [1,3,5,7,9];
var arr3 = [1,5,7];
function commonValue(arr) {
    var hash = {}
    var tail = []
    var result = [];
    
    for(var i=0; i<arr.length; i++) {
        var currentArray = arr[i]
        tail = null;
        for(var j=0; j<currentArray.length; j++) {
            var currentValue = currentArray[j]
            if(tail != currentValue) {
                if(!hash[currentValue]) {
                    hash[currentValue] = 1
                } else {
                    hash[currentValue]++
                }
            }
            tail = currentValue
            // console.log(tail, i, j, hash)
        }
    }
    for(var prop in hash) {
        if(hash[prop] == arr.length) {
            result.push(parseInt(prop))
        }
    }
    return result
}
console.log(commonValue([arr1, arr2, arr3]))
