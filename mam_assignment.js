
function fibonaccia(n){
        a=0;
        b=1;
        if (n==1)
            console.log(0)
        if (n==2)
            console.log(0,' ',1)
        else{
            console.log(0,' ',1)
            for (let i=2;i<n;i++){
                let c= a+b;
                a=b
                b=c
                console.log(c)
            }
        } 
}
fibonaccia(10)

//  Celiseus to farenhit//

 function fahreinhit(cel){
    return cel *1.8+32;
 }

let celiseus = 5
console.log(celiseus+" celsius in"+" "+fahreinhit(celiseus))


//squareroot//
function square_root(num){
    return Math.sqrt(num)
} 

console.log('square root ',square_root(10))

//ramdom numbers//
function rand(min,max){
    return Math.round(Math.random(max-min)+1)+min
}
console.log(rand(20,50))



//palindrome//

// arr1 = a.split('').reverse().join('');
// console.log(arr1)
function palindrome(str){
    let rev = ''
    for (let i=str.length-1;i>=0;i--){
        rev = rev + str[i]
    }
    if(str===rev){
        return ' palindrome '
    }
    return ' not a palindrome '
}

let original = 'aaab'

console.log(palindrome(original))

    


