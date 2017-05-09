// 解构可以指定默认值
//如果默认值是一个表达式，采用惰性求值得方式

//对象解构，变量必须与属性同名
// let {foo}={foo:5,bar:6};

// console.log(foo);

// var o={
//     foo
// }

// console.log(o);
//变量解构以后对应的是属性所对应的值

// function example() {
//   return {
//     foo: 1,
//     bar: 2
//   };
// }
// let { foo, bar } = example();
// console.log(bar);

//扩展运算符可以将一个类数组的结构转为数组，功能同array.from

// function msg(x,y="world"){
//     console.log(x,y);
// }

// msg("hello");

//函数的默认值赋值必须使用=来进行，包括对象

// function say(a,b){
//     console.log(a,b);
// }

// let arr=[1,2];
// say(...arr);   //1 2
// say([...arr]); //[1,2] undefined
//扩展运算符... ，将数组转为逗号分隔的序列

// let arr={b:3,a:5};

// let {a,b}=arr;

// var o={
//     a
// }

// console.log(o);

//then方法指定的回调函数，将在脚本所有同步任务执行结束后才会执行

// var p1=new Promise((resolve,reject)=>{
//     setTimeout(()=>{     
//         resolve(45);
//         console.log("p1 resolved");
//     },6000);
// });

// var p2=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve(p1);
//     },5000);
// });

// p2.then((value)=>{
//     console.log(value);
// });

//由于p2的状态是由p1传递过来的所以p2的状态由p1来决定，p2的then语句也由p1来决定

// var p1=new Promise((resolve,reject)=>{
//     try{
//         resolve(x+2);
//     }catch(e){
//         reject(45);
//     }
// })

// p1.then(v=>console.log(v)).catch(err=>console.log(err));

//使用generator生成器时，通过for..of语句可以不使用next遍历

//表达式用于函数名
// let a='msg';

// var o={
//     [a](){
//         console.log("123");
//     }
// }

// o[a]();

//生成器实例
// var fs=require('fs');


// var readFileNew=function (){
//     var readP=new Promise((resolve,reject)=>{ 
//     fs.readFile('./src/main.js','utf8',function(err,data){
//         if(err){
//             reject(err);
//         }
//         resolve();
//         it.next();
//     });
    
//     });

// return readP;
// }


// function *gRead(){
//     yield readFileNew();
//     console.log("read end");
// }

// var it=gRead();
// it.next();