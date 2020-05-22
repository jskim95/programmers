// 직사각형 별찍기

    // 문제 설명
    // 이 문제에는 표준 입력으로 두 개의 정수 n과 m이 주어집니다.
    // 별(*) 문자를 이용해 가로의 길이가 n, 세로의 길이가 m인 직사각형 형태를 출력해보세요.

    // 제한 조건
    // n과 m은 각각 1000 이하인 자연수입니다.
    // 예시
    // 입력

    // 5 3
    // 출력

    // *****
    // *****
    // *****
    
    // 풀이
    - 2중 반복문 이용
    바깥쪽 반복문 -> 행
    안쪽 반복문 -> 열
    
    // 코드
    
    (예전 풀이)
    process.stdin.setEncoding('utf8');
    process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    var sum = "";
    var result = "";
    for(var i=0; i<a; i++) {
        sum += "*";
    }
    for(var j=0; j<b; j++) {
        result += sum;
        result += "\n";
    }
    console.log(result)
     return result;
});

    (현재 풀이)
    process.stdin.setEncoding('utf8');
    process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    var c = '';
    for(var i=0; i<b; i++) {
        for(var j=0; j<a; j++) {
            c += "*"
        }
        c += "\n"
    }
    console.log(c)
});


    
    
