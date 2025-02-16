let age=25
console.log(typeof(age))
// nan is also a number but doesnot contain a value
//"33"=>33
// "33abc"=>nan type is an Number  
// true =>1
let  isLoggedIn="hii"
let booleanIsLogggedIn=Boolean(isLoggedIn)
console.log(booleanIsLogggedIn)
//""=> false
// "hii"=> true
// 1=>true

//88888888888 **************** operation********************
let value=3
let negvalue=-value
console.log(negvalue)

let str1="hii"
let str2="name"
let str3=str1+str2
console.log(str3)
console.log(1+"2")
console.log(1+"2" +"2")
console.log(1+2+"2")
console.log("1"+"2")

console.log(+true)
// console.log(true+)
let n1,n2,n3;
n1=n2=n3=3+4

let x=3;
const y=x++;
const z=++x;
// console.log(`x:$(x) ,y:$(y)`)
console.log(`x:${z} ,y:${y}`)

let a=3;
// const y=x++;
const b=++a;
// console.log(`x:$(x) ,y:$(y)`)
console.log(`x:${a} ,y:${b}`)

console.log(null>0)// false
console.log(null==0)//false
console.log(null>=0) //true

console.log(undefined>0)// false
console.log(undefined==0)//false
console.log(undefined>=0) //true
//avoid this type of conversion i n the code