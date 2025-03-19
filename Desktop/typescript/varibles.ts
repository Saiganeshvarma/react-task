// // // // // // // // // // // // // // number

// // // // // // // // // // // // // var a : number = 10
// // // // // // // // // // // // // // string

// // // // // // // // // // // // // var b : string = "type script"
// // // // // // // // // // // // // console.log(b);

// // // // // // // // // // // // // // object

// // // // // // // // // // // // // var c : object = {
// // // // // // // // // // // // //     name : "type script",
// // // // // // // // // // // // //     age : 20
// // // // // // // // // // // // // }

// // // // // // // // // // // // // undefined


// // // // // // // // // // // // var a : undefined ;
// // // // // // // // // // // // console.log(a);

// // // // // // // // // // // // var noVal : null = null


// // // // // // // // // // // // arrays

// // // // // // // // // // // var arr : number[] = [1,2,3,4,5]
// // // // // // // // // // // var arrs : string[] = ["sai","ganesh","varma"]

// // // // // // // // // // var a : boolean = true


// // // // // // // // // var k : any = [1,2,3,4,5]
// // // // // // // // // var j : any = ["sai","varma"]

// // // // // // // // // var m : any = 10

// // // // // // // // function add(a : number,b : number){
// // // // // // // //     return  a+b
// // // // // // // // }
// // // // // // // // console.log(add(10,10))

// // // // // // // // export{}


// // // // // // // function add(a:number,b : number) : number{
// // // // // // //     return a+b
// // // // // // // }
// // // // // // // console.log(add(10,10));
// // // // // // // export{}


// // // // // // var add = (a:number, b : number)=> {a+b}
// // // // // // console.log(add(10,10));
// // // // // // export{}

// // // // // var a = 10
// // // // // var b = 20
// // // // // if(a>b){
// // // // //     console.log("a is the bigger");
// // // // // }else{
// // // // //     console.log(" b is the bigger");
// // // // // }

// // // // var a : number = 10
// // // // var b : number = 20
// // // // if(a>b){
// // // //     console.log(" a is the bigger");
// // // // }else{
// // // //     console.log("b is the bigger");
// // // // }

// // // var a : number = 10
// // // var b : number = 20

// // // var result : boolean = a>b?true: false

// // // for(var i : number = 0 ; i<=10 ; i++){
// // //     console.log(i);
// // // }

// // var a : number = 10
// // var i : number = 1
// // while(i<=a){
// //     console.log(i);
// //     i++
// // }


// function check(a: number, b : number) : string{
//     if(a>b){
//         return "yes"
//     }else{
//         return "no"
//     }
// }

var str : string[] = ["sai","ganesh","varma"]
var strnum : number[] = [1,2,3,4,5]
// if the aray is the combination of the strings and the numbers

var mixedArray : (number|string)[] = [1,"2",3,"4",5]
mixedArray.forEach((item)=>{
    if(typeof(item) == "string"){
        console.log(`${item} is the string`);
    }else if(typeof(item) == "number"){
        console.log(`${item} is the number`);
    }
})

function check(a : number,b : number)  : string | boolean | number[]{
    if(a>b){
        return "yes"
    }else{
        return false
    }
}


