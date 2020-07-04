문제
객체의 최대 value값을 구하시오
만약 최대value값이 똑같은 key가 있다면 해당 key : value를 리턴하시오.



!!! 주의 !!!
객체 key는 string 이기 때문에 값비교를 하고 싶다면 숫자형으로 바꾸자 !!!!!!



// 코드
function getMaxKey(obj) {
  var prev = -1
  var answer = {}
  for(var prop in obj) {
    if((obj[prev] || -1) < obj[prop] || (obj[prev] === obj[prop]) && prev*1 < prop*1)
      {
        prev = prop
      }
  }
  answer[prev] = obj[prev]
  return answer
}

console.log(getMaxKey({ 1: 1, 2: 2, 3: 1, 41: 1, 5: 2 })) // { '5': 2 }


// 설명

function getMaxKey(obj) {
  var prev = -1
  var answer = {}
  console.log(obj)
  for(var prop in obj) {
    console.log((obj[prev] || -1)) // obj[prev]는 처음에 undefined이기 때문에초기값 넣어주기 위해서
    console.log((obj[prev] || -1) < obj[prop], `${obj[prev]} : ${obj[prop]}`) // 이전값 < 현재값 값교체(최댓값 구하는 과정)
    console.log((obj[prev] === obj[prop])) // value값이 같은 경우
    console.log(prev > prop, prev, '>', prop) // key값이 이전키 < 현재키 일경우 키값 교체

    if((obj[prev] || -1) < obj[prop] || (obj[prev] === obj[prop]) && prev*1 < prop*1)
      {
        prev = prop
      }
  }
  answer[prev] = obj[prev]
  console.log(answer)

}

getMaxKey({ 1: 1, 2: 2, 3: 1, 41: 1, 5: 2 })
