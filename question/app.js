const quiz = [
  {
    question:'ゲーム史上、最も売れたゲーム機は次のうちどれ？',
    answers:[
      'スーパーファミコン',
      'プレイステーション２',
      'ニンテンドースイッチ',
      'ニンテンドーDS'
    ],
    correct:'ニンテンドーDS'
  },
  {
    question:'糸井重里が規格に関わった、任天堂の看板ゲームといえば？',
    answers:[
      'MOTHER2',
      'スーパーマリオブラザーズ3',
      'スーパードンキーコング',
      '星野カービィ'
    ],
    correct:'MOTHER2'
  },
  {
    question:'ファイナルファンタジーⅣの主人公の名前は？',
    answers:[
      'フリオニール',
      'クラウド',
      'セシル',
      'ティーダ'
    ],
    correct:'セシル'
  }
]
const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;


//textContentは内部のテキストをとってくる
document.getElementById('js-question').textContent = quiz[quizIndex].question;


document.getElementById('js-question').textContent = quiz[quizIndex].question;

const $answerBtns = document.getElementsByTagName('button');


//e->マウスイベント、その中のtargetを指定してあげると、クリックした場所を取ってくれる。
for (let i = 0; i < $answerBtns.length; i++) {
  $answerBtns[i].textContent = quiz[quizIndex].answers[i];
  $answerBtns[i].addEventListener('click', () => {
    if (quiz[quizIndex].correct === quiz[quizIndex].answers[i]) {
      window.alert('正解');
      score++;
    } else {
      window.alert('不正解');
    }

    quizIndex++;
    if(quizIndex<quizLength){
      //問題数があれば実行
      document.getElementById('js-question').textContent = quiz[quizIndex].question;
      for (let j = 0; j < $answerBtns.length; j++) {
        $answerBtns[j].textContent = quiz[quizIndex].answers[j];
      }
    }else{
      //なければ終了
      window.alert('終了'+score+'/'+quizIndex+'点です');
      //window.location.href = 'index.html';
      quizIndex = 0;
    }
  });
}


