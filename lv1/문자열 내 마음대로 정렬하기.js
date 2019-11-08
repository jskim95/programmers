// 문자열 내 마음대로 정렬하기

// 문제 설명

// 문자열로 구성된 리스트 strings와, 정수 n이 주어졌을 때,
// 각 문자열의 인덱스 n번째 글자를 기준으로 오름차순 정렬하려 합니다.
// 예를 들어 strings가 [sun, bed, car]이고 n이 1이면 각 단어의 인덱스 1의 문자 u, e, a로 strings를 정렬합니다.

// 제한 조건
// strings는 길이 1 이상, 50이하인 배열입니다.
// strings의 원소는 소문자 알파벳으로 이루어져 있습니다.
// strings의 원소는 길이 1 이상, 100이하인 문자열입니다.
// 모든 strings의 원소의 길이는 n보다 큽니다.
// 인덱스 1의 문자가 같은 문자열이 여럿 일 경우, 사전순으로 앞선 문자열이 앞쪽에 위치합니다.

// 입출력 예
// strings	n	return
// [sun, bed, car]	1	[car, bed, sun]
// [abce, abcd, cdx]	2	[abcd, abce, cdx]

// 입출력 예 설명
// 입출력 예 1
// sun, bed, car의 1번째 인덱스 값은 각각 u, e, a 입니다. 이를 기준으로 strings를 정렬하면 [car, bed, sun] 입니다.
// 입출력 예 2
// abce와 abcd, cdx의 2번째 인덱스 값은 c, c, x입니다. 따라서 정렬 후에는 cdx가 가장 뒤에 위치합니다.
// abce와 abcd는 사전순으로 정렬하면 abcd가 우선하므로, 답은 [abcd, abce, cdx] 입니다.





// 풀이
// 1. (마지막 조건)n번째 인덱스가 같을때는 오름차순으로 정렬하기 때문에 처음에 strings배열을 오름차순한다
// 2. strings배열에 n번째 인덱스 값을 구한다
// 3. n번째 인덱스 값을 a배열 변수에 삽입후 오름차순 정렬한다.

// 4. while문을 통해 a배열의 인덱스를 차례대로 꺼낸다
// 5. (strings[?][n] == a[i]) 조건이 성립될때까지 반복문을 돌린다.
// 6. 조건이 성립될경우 
//    answer변수에 strings[?]값을 넣고
//    strings배열의 ?에 위치한 인덱스를 삭제한다.

// 7. i++ 하고 for문을 중단하기 위해 break사용

// !! 제한조건 !!
// (인덱스 1의 문자가 같은 문자열이 여럿 일 경우, 사전순으로 앞선 문자열이 앞쪽에 위치합니다.)
// a배열과 strings배열을 오름차순 했기때문에 a배열값이 중복되어도 상관없음 차례대로 꺼내기때문에



function solution(strings, n) {
    var answer = [];
    var a = [];   
    var i = 0;
    strings.sort();
    
    for(var k=0; k<strings.length; k++) {
        a[k] = strings[k][n]
    }
    a.sort();
    
    while(a[i]){
        for(var j=0; j<strings.length; j++){
            if(strings[j][n] == a[i]){
                answer.push(strings[j]);                
                strings.splice(j, 1);
                i++;
                break;
            }
        }
             
    }

       
    return answer;
}
