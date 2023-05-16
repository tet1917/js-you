//let 変数を宣言する。
let unko = 'Hello WOrld!';
unko = 'Hello World2!!';

//定数宣言　定数なので値を変えれない。
const bigUnko = 'He...Hell...Hello World';


let inoki = ['いーち','にー','さーん','だー'];
console.log(inoki);

console.log(bigUnko);

//ループ分
// let index =0;
// while(index < inoki.length){
//   console.log(inoki[index]);
//   index++;
// }

//if else文
if(inoki.length>5){
  console.log('ボンバイエ！')
} else{
  console.log('ボンバ、、、')
}


//関数
//関数を書く理由
//①同じ命令を何度も使いたいとき
//②任意のタイミングで命令を実行させたいとき
//アロー関数を使うことがかなりベター
//基本上書きすることはないのでconstを使う
//同じ命令を一部だけ変えて使いまわしたい時に引数が有効->argが引数
const test = (arg) => {
  //ここに実行したい命令を書く
  if(inoki.length>arg){
    console.log('ボンバイエ！')
  } else{
    console.log('ボンバ、、、')
  }
};
//実行するときは関数名()にて実行。
//引数の値を（）の中に入れてあげる。
test(5);

//オブジェクト
const unko2 = {
  color:'pink',
  size:'big',
  purfume:'mint',
  goTOilet:() =>{
    console.log("Hello world!");
  }
};
//console.log(unko2.goTOilet());


//console.log(window.innerHeight);
//window.alert('Hi');
//window->webブラウザ全体のオブジェクト


//ドキュメント
//console.log(document.getElementsByTagName('button')[0]);
document.getElementsByTagName('button')[0].addEventListener('click',()=>{
  //命令を書く
  window.alert('hello world');
});

